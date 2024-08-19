import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const contestData: Prisma.ContestCreateInput[] = [
    {
        id: 'dlj',
        name: 'Desafio Liga Jovem',
        description: 'É uma competição gratuita entre equipes de estudantes de todo o Brasil, com o desafio de resolver um problema das suas escolas e/ou comunidades, usando tecnologia!',
        icon: 'https://www.desafioligajovem.com.br/wp-content/uploads/2024/03/Design-sem-nome-4.png',
        tematic: 'Tecnologia, Empreendedorismo',
        education: 'Ensino Fundamental, Médio, Técnico e Superior',
        modality: 'Equipes',
        website: 'https://www.desafioligajovem.com.br/'
    },
    {
        id: 'nsa',
        name: 'Nasa Space Apps',
        description: 'O Desafio Internacional de Aplicativos Espaciais da NASA é o maior hackathon anual global. Este evento de dois dias oferece uma oportunidade para os participantes utilizarem os dados gratuitos e abertos da NASA e os dados espaciais de seus parceiros da agência espacial para resolver problemas do mundo real na Terra e no espaço.',
        icon: 'https://www.earthdata.nasa.gov/s3fs-public/2023-02/sac-latest-graphic_news_0.jpeg?VersionId=TPV7qYRj8f.mTgemwaOWUZnU9y3c0Z1u',
        tematic: 'Tecnologia',
        education: 'Livre',
        modality: 'Equipes ou individual',
        website: 'https://www.spaceappschallenge.org/'
    },
    {
        id: 'cpe',
        name: 'Copa Colegial de Empreendedorismo',
        description: 'O projeto tem como objetivo estimular o ensino do empreendedorismo em escolas de todo o Brasil e desenvolver o talento empreendedor em adolescentes e jovens do ensino médio por meio de uma competição que elegerá a melhor ideia de negócio.',
        icon: 'https://midias.correiobraziliense.com.br/_midias/jpg/2023/03/24/675x450/1_cl4dhxsvkee318-27681205.jpg?20230324151246?20230324151246',
        tematic: 'Empreendedorismo',
        education: 'Ensino médio',
        modality: 'Equipes',
        website: 'https://www.copacolegial.com.br/'
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
