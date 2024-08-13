import { PrismaClient } from '@prisma/client';
import { ZenStackMiddleware } from '@zenstackhq/server/express';
import RestApiHandler from '@zenstackhq/server/api/rest';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());

const prisma = new PrismaClient();

// Configuração do middleware CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
    if (req.method === "OPTIONS") {
        return res.status(200).end();
    } else {
        next();
    }
});

app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
        res.status(200).send();
    } else {
        next();
    }
});

// create a RESTful-style API handler
const apiHandler = RestApiHandler({ endpoint: 'http://localhost:3000/api' });

app.use('/api', ZenStackMiddleware({ 
    getPrisma: () => prisma,
    handler: apiHandler 
}));

export default app;
