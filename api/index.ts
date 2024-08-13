import { PrismaClient } from '@prisma/client';
import { ZenStackMiddleware } from '@zenstackhq/server/express';
import RestApiHandler from '@zenstackhq/server/api/rest';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());

const prisma = new PrismaClient();

// Configuração do middleware CORS
app.use(cors({
    origin: '*', // Permite todas as origens. Ajuste conforme necessário.
    methods: ['GET', 'OPTIONS', 'PATCH', 'DELETE', 'POST', 'PUT'],
    allowedHeaders: ['X-CSRF-Token', 'X-Requested-With', 'Accept', 'Accept-Version', 'Content-Length', 'Content-MD5', 'Content-Type', 'Date', 'X-Api-Version'],
    credentials: true
}));

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
