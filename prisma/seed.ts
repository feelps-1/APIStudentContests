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
        site: 'https://www.desafioligajovem.com.br/',
    },
    {
        id: 'nsa',
        name: 'Nasa Space Apps',
        description: 'O Desafio Internacional de Aplicativos Espaciais da NASA é o maior hackathon anual global. Este evento de dois dias oferece uma oportunidade para os participantes utilizarem os dados gratuitos e abertos da NASA e os dados espaciais de seus parceiros da agência espacial para resolver problemas do mundo real na Terra e no espaço.',
        icon: 'https://www.earthdata.nasa.gov/s3fs-public/2023-02/sac-latest-graphic_news_0.jpeg?VersionId=TPV7qYRj8f.mTgemwaOWUZnU9y3c0Z1u',
        tematic: 'Tecnologia',
        education: 'Livre',
        modality: 'Equipes ou individual',
        site: 'https://www.spaceappschallenge.org/',
    },
    {
        id: 'cpe',
        name: 'Copa Colegial de Empreendedorismo',
        description: 'O projeto tem como objetivo estimular o ensino do empreendedorismo em escolas de todo o Brasil e desenvolver o talento empreendedor em adolescentes e jovens do ensino médio por meio de uma competição que elegerá a melhor ideia de negócio.',
        icon: 'https://midias.correiobraziliense.com.br/_midias/jpg/2023/03/24/675x450/1_cl4dhxsvkee318-27681205.jpg?20230324151246?20230324151246',
        tematic: 'Empreendedorismo',
        education: 'Ensino médio',
        modality: 'Equipes',
        site: 'https://www.copacolegial.com.br/',
    },
    {
        id: 'htf',
        name: "Hacktudo Festival",
        description: "É um festival de tecnologia e cultura, apoiado pelo Ministério da Cultura e a Prefeitura do Rio de Janeiro. Ele conta com diversas hackathons, com diferentes prêmios, em que o competidor deve resolver um desafio de diferentes empresas. No ano de 2024, as empresas da Hackathon foram a BEMOBI e a Petrobras.",
        site: "https://www.hacktudo.com.br/",
        icon: "https://yt3.googleusercontent.com/7oGcvxiDNvsoxphVeyYRe1OsLsurbQvTJz0Fl6f3vGjHLQv55m6jgpl8kcECovkmIn9-Rw4W=s900-c-k-c0x00ffffff-no-rj",
        tematic: "Tecnologia",
        education: "Ensino superior, técnico e médio",
        modality: "Equipes"
      },
      {
        id: 'cmc',
        name: "Campus Mobile Claro",
        description: "É um concurso de ideias e soluções para mobile e nele podem se inscrever estudantes universitários e recém-formados, estudantes e egressos de mestrado e doutorado. Os participantes selecionados recebem orientação de especialistas da área de inovação e empreendedorismo para o aperfeiçoamento e desenvolvimento dos projetos.",
        site: "https://www.institutoclaro.org.br/campus-mobile/",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2XhDASrMsX_DUw9ZhwzBV4fbIA7nSoc6oQQ&s",
        tematic: "Tecnologia",
        education: "Ensino superior",
        modality: "Equipes"
      },
      {
        id: 'p4g',
        name: "Power4Girls",
        description: "Power4Girls é uma plataforma que eleva o potencial de jovens meninas, convertendo suas aspirações em ação. Através da colaboração única entre a Embaixada e Consulados dos EUA, implementada pelo Instituto Gloria com apoio das Escolas Técnicas/Tecnológicas Federais, Estaduais e Escolas técnicas sem fins lucrativos de todo país",
        site: "https://power4girls.com.br/",
        icon: "https://power4girls.com.br/wp-content/uploads/2024/03/logo_site_p4g-min.png",
        tematic: "STEAM",
        education: "Ensino médio e técnico",
        modality: "Equipes"
      },
      {
        id: "vcc",
        name: "VC Challenge",
        description: "O VC Challenge é o desafio que conecta estudantes de todo o Brasil a grandes investidores e empresas por meio do ecossistema de Venture Capital e Empreendedorismo.",
        site: "https://kptl.com.br/vc-challenge/",
        icon: "",
        tematic: "Empreendedorismo",
        education: "Ensino médio e superior",
        modality: "Equipes"
      },
      {
        id: 'inv',
        name: "Inova Jovem",
        description: "O programa Inova Jovem é uma competição de empreendedorismo da Unicamp voltada para estudantes do Ensino Médio a nível nacional. O programa foi criado em 2014 e é realizado anualmente pela Agência de Inovação Inova Unicamp.",
        site: "https://www.inova.unicamp.br/category/formacao-e-premios/inova-jovem/",
        icon: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://www.inova.unicamp.br/inovajovem/wp-content/uploads/2014/02/Inova_inovajovem_marca.png",
        tematic: "Empreendedorismo",
        education: "Ensino médio",
        modality: "Equipes"
      },
      {
        id: 'a4g',
        name: "Brazil Conference(AI4GOOD)",
        description: "O AI4GOOD visa gerar soluções reais por meio de projetos OPEN SOURCE, transformando o aprendizado em benefícios concretos para a sociedade. O AI4GOOD oferece suporte contínuo, incluindo mentoria, networking e parcerias com principais empresas de tecnologia, para jovens adultos em qualquer estágio de seus projetos de inteligência artificial.",
        site: "https://www.brazilconference.org/l/social/",
        icon: "https://www.brazilconference.org/l/application/assets/social-impact/brazil-map.webp",
        tematic: "Tecnologia",
        education: "Ensino superior",
        modality: "Equipes"
      },
      {
        id: 'oeu',
        name: "Olimpíada de Empreendedorismo Universitário",
        description: "A competição, que visa incentivar o desenvolvimento de ideias inovadoras entre estudantes universitários, já se consolidou como um dos principais eventos de empreendedorismo acadêmico no Brasil.",
        site: "https://cei.ufg.br/p/olimpiada-de-empreendedorismo-universitario-decima-primeira-edicao",
        icon: "https://files.cercomp.ufg.br/weby/up/752/o/card-interno.png",
        tematic: "Empreendedorismo",
        education: "Ensino Superior",
        modality: "Equipes"
      },
      {
        id: 'ona',
        name: "Olímpiada Nacional de Aplicativos",
        description: "A Olimpíada Nacional de Aplicativos (ONDA) desafia o estudante a desenvolver tecnologias capazes de amenizar os problemas sociais e ambientais que permeiam a sociedade moderna.",
        site: "https://olimpiadaonda.com/",
        icon: "https://olimpiadaonda.com/_next/static/media/logo.d2c1bdd20e3a3c72fc9993c670d94a48.png",
        tematic: "Tecnologia",
        education: "Ensino médio",
        modality: "Equipes"
      },
      {
        id: 'jas',
        name: "JA Startups",
        description: "O JA Startup é um programa de aprendizagem prática para que os jovens conheçam conceitos, ferramentas e desenvolvam as habilidades necessárias para transformar suas ideias em startups de alto impacto.",
        site: "https://jabrasil.org.br/jastartup/",
        icon: "https://jabrasil.org.br/jastartup/wp-content/themes/jastartup/assets/img/ja-startup-white.png",
        tematic: "Empreendedorismo",
        education: "Ensino superior",
        modality: "Equipes"
      }
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
