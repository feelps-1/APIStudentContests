import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const contestData: Prisma.ContestCreateInput[] = [
    {
        id: 'dlj',
        name: 'Desafio Liga Jovem',
        description: 'kitten',
        icon: '',
        tematic: 'Tecnologia',
        education: '',
        modality: ''
    },
    {
        id: 'nsa',
        name: 'Nasa Space Apps',
        description: 'kitten',
        icon: '',
        tematic: 'Tecnologia',
        education: '',
        modality: ''
    },
    {
        id: 'cpe',
        name: 'Copa Colegial de Empreendedorismo',
        description: 'kitten',
        icon: '',
        tematic: 'Empreendedorismo',
        education: '',
        modality: ''
    },
];

async function main() {
    console.log(`Start seeding ...`);
    for (const c of contestData) {
        // create pet if not exists
        const contest = await prisma.contest.upsert({
            where: { id: c.id },
            create: c,
            update: {},
        });
        console.log(`Upserted Contest with id: ${contest.id}`);
    }
    console.log(`Seeding finished.`);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
