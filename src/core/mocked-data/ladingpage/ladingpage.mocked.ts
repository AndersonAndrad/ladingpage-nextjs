import {Skill} from "@/components/ladingpage/skill.component";
import {generateHash} from "@/utils/generate-hash.util";
import {JobDetailProps} from "@/components/ladingpage/job-detail.component";

enum JobImage {
    ACT_DIGITAL = 'https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/iuabmvuylubvatersqi7',
    ILPFARM = 'https://play-lh.googleusercontent.com/FrhlSitKPHZR2ZOcSn-Tlxk_ZD4iP55nxaCQoD-Ux7KAsxXepVEVj3H4uhPRfn59HxQ=w240-h480-rw',
    CAST_GROUP = 'https://www.castgroup.com.br/wp-content/uploads/2024/06/Logo-original-1.png',
    NOVA_CASA = 'https://distribuidoranovacasa.com.br/site/assets/img/logo-nova-casa-acima-nome.png',
    SICOOB = 'https://play-lh.googleusercontent.com/GY-KNYDw_GFuEBK4C_iVXBqFX2VpIW3cJ5Yb-7BkWv363sNO19z8s_0rS0BQ40AXzms',
    MINISTERIO_DA_FAZENDA = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq5QCJ2aW95XLyTYbmAth6xgpZd31ecI_M_w&s',
    BANCO_DO_BRASIL = 'https://play-lh.googleusercontent.com/1-aNhsSPNqiVluwNGZar_7F5PbQ4u1zteuJ1jumnArhe8bfYHHaVwu4aVOF5-NAmLaA',
}

enum SkillImage {
    TYPESCRIPT = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png',
    JAVASCRIPT = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png',
    ANGULAR = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
    JENKINS = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3MvXEfVUnO27xHVVN2yA2BDChYbkFWACDNQ&s',
    MQTT = 'https://media.licdn.com/dms/image/v2/D5612AQE3XK8kOWO8aA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1693403810082?e=2147483647&v=beta&t=-B8BZ3lCZ3SPSMmxTq2qL5pmr4ZYtd7IA9p1-ADJ3IE',
    NODEJS = 'https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--nodejs-programming-language-pack-logos-icons-1174925.png?f=webp&w=256',
    NEXTJS = 'https://static-00.iconduck.com/assets.00/next-js-icon-2048x2048-5dqjgeku.png',
    FLUTTER = 'https://cdn-bdmhh.nitrocdn.com/JNiKLBzGPsfbQJqUQoZqIbUrxBklWopT/assets/images/optimized/rev-b47509f/objectbox.io/wordpress/wp-content/uploads/2024/07/flutter-mobile-300x300.png',
    NESTJS = 'https://cdn.prod.website-files.com/609bc2fa29b6d5b7f44a2785/6477443d765585e53f4beab1_nestjs-logo.webp',
    SOCKETIO = 'https://static-00.iconduck.com/assets.00/socket-io-icon-512x511-xjp7kzx6.png',
    VUEJS = 'https://static-00.iconduck.com/assets.00/vue-js-icon-2048x1766-btrgkrhi.png',
    GIT = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png',
    POSTGRES = 'https://cdn.iconscout.com/icon/free/png-256/free-postgresql-8-1175119.png?f=webp',
    KEYCLOAK = 'https://static-00.iconduck.com/assets.00/keycloak-icon-2048x2048-5ge904so.png',
    REACTJS = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s',
    ORACLE = 'https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/oracle-512.png',
    MONGO_DB = 'https://static-00.iconduck.com/assets.00/mongodb-icon-1024x1024-jyklwn1x.png',
    "C++" = 'https://cdn-icons-png.flaticon.com/512/6132/6132222.png',
    DOT_NET = 'https://static-00.iconduck.com/assets.00/dotnet-icon-2048x2048-6nj1im30.png',
    PHP = 'https://static-00.iconduck.com/assets.00/php-icon-2048x2048-zjxns1zh.png',
    CODE_IGNITER = 'https://static-00.iconduck.com/assets.00/codeigniter-icon-1729x2048-xy6rlkco.png',
    DOCKER = 'https://cdn-icons-png.flaticon.com/512/919/919853.png',
}

enum JobDescription {
    ACT_DIGITAL_PT = 'Desenvolvemos um sistema de chat para assistência em mensagens, controle e configuração, integrando recursos de agendamento para aprimorar a comunicação entre a empresa e seus clientes. A solução foi construída usando MQTT, NestJS, MongoDB, Angular e Socket.io.',
    ACT_DIGITAL_EN = 'We developed a chat system for messaging assistance, control, and configuration, integrating scheduling features to enhance communication between the company and its clients. The solution was built using MQTT, NestJS, MongoDB, Angular, and Socket.io.',

    ILPFARM_PT = 'Desenvolvi um sistema de gestão agrícola, inicialmente focado no módulo financeiro antes de expandir para outras áreas. O sistema inclui recursos como mapeamento do solo, gestão de animais, gerenciamento de atividades no campo e gestão financeira. Foi construído utilizando Angular, NestJS, Keycloak, Flutter, Socket.IO, Docker e PostgreSQL.',
    ILPFARM_EN = 'I developed a farm management system, initially focusing on the financial module before expanding to other modules. The system incorporates features such as soil mapping, animal management, field work management, and financial management. It was built using Angular, NestJS, Keycloak, Flutter, Socket.IO, Docker, and PostgreSQL.',

    BANCO_DO_BRASIL_PT = 'Desenvolvi sistemas para a geração de grandes volumes de dados para testes automatizados, permitindo o acesso por meio de uma API REST e uma interface gráfica. O processo foi implementado utilizando ReactJS, NestJS, Oracle, MongoDB, TypeORM, Angular e Git.',
    BANCO_DO_BRASIL_EN = 'I developed systems for generating large volumes of data for automated testing, enabling access through a REST API and UI. The process was implemented using ReactJS, NestJS, Oracle, MongoDB, TypeORM, Angular, and Git.',

    NOVA_CASA_PT = 'Desenvolvi sistemas para automação de processos, rotinas do ERP Totvs e manutenção de redes e computadores. As tecnologias utilizadas incluíram C++, Vue.js, .NET e Git.',
    NOVA_CASA_EN = 'I developed systems for process automation, ERP Totvs routines, and network and computer maintenance. The technologies used included C++, Vue.js, .NET, and Git.',

    MINISTERIO_DA_FAZENDA_PT = 'Desenvolvi sistemas para automação da geração de relatórios para processos internos, utilizando PHP, CodeIgniter e PostgreSQL.',
    MINISTERIO_DA_FAZENDA_EN = 'I developed systems for automating report generation for internal processes using PHP, CodeIgniter, and PostgreSQL.'
}

export enum Technologies {
    TYPESCRIPT = 'Typescript',
    JAVASCRIPT = 'Javascript',
    ANGULAR = 'Angular',
    JENKINS = 'Jenkins',
    MQTT = 'MQTT',
    NODEJS = 'NodeJs',
    NEXTJS = 'Nextjs',
    FLUTTER = 'Flutter',
    NESTJS = 'Nestjs',
    SOCKETIO = 'SocketIo',
    VUEJS = 'Vuejs',
    GIT = 'Git',
    MONGO_DB = 'MongoDB',
    POSTGRES = 'Postgres',
    KEYCLOAK = 'Keycloak',
    REACTJS = 'ReactJs',
    ORACLE = 'Oracle',
    "C++" = 'C++',
    "DOT_NET" = '.Net',
    PHP = 'PHP',
    CODE_IGNITER = 'CodeIgniter',
    DOCKER = 'Docker',
}

export enum Jobs {
    SICOOB = 'Sicoob',
    ILPFARM = 'ILPFarm',
    BANCO_DO_BRASIL = 'Banco do Brasil',
    NOVA_CASA_DISTRIBUIDORA = 'Nova casa distribuidora',
    MINISTERIO_DA_FAZENDA = 'Ministerio da fazenda',
    ACT_DIGITAL = 'Act digital',
    CAST_GROUP = 'Cast group',
}

export const skills: Skill[] = [
    { id: generateHash(), name: Technologies.TYPESCRIPT, subName: 'TS', experience: '01/01/2020', image: SkillImage.TYPESCRIPT },
    { id: generateHash(), name: Technologies.JAVASCRIPT, subName: 'JS', experience: '01/01/2019', image: SkillImage.JAVASCRIPT },
    { id: generateHash(), name: Technologies.ANGULAR, subName: 'AN', experience: '01/01/2019', image: SkillImage.ANGULAR },
    { id: generateHash(), name: Technologies.JENKINS, subName: 'JE', experience: '01/01/2019', image: SkillImage.JENKINS },
    { id: generateHash(), name: Technologies.MQTT, subName: 'MQTT', experience: '01/01/2019', image: SkillImage.MQTT },
    { id: generateHash(), name: Technologies.NODEJS, subName: 'Node', experience: '01/01/2019', image: SkillImage.NODEJS },
    { id: generateHash(), name: Technologies.NEXTJS, subName: 'Next', experience: '01/01/2019', image: SkillImage.NEXTJS },
    { id: generateHash(), name: Technologies.FLUTTER, subName: 'Flutter', experience: '01/01/2019', image: SkillImage.FLUTTER },
    { id: generateHash(), name: Technologies.NESTJS, subName: 'Nest', experience: '01/01/2019', image: SkillImage.NESTJS },
    { id: generateHash(), name: Technologies.SOCKETIO, subName: 'SK', experience: '01/01/2019', image: SkillImage.SOCKETIO },
    { id: generateHash(), name: Technologies.VUEJS, subName: 'Vue', experience: '01/01/2019', image: SkillImage.VUEJS },
    { id: generateHash(), name: Technologies.GIT, subName: 'GIT', experience: '01/01/2019', image: SkillImage.GIT },
    { id: generateHash(), name: Technologies.POSTGRES, subName: 'Postgres', experience: '01/01/2019', image: SkillImage.POSTGRES },
    { id: generateHash(), name: Technologies.KEYCLOAK, subName: 'Keycloak', experience: '01/01/2019', image: SkillImage.KEYCLOAK },
    { id: generateHash(), name: Technologies.REACTJS, subName: 'ReactJs', experience: '01/01/2019', image: SkillImage.REACTJS },
    { id: generateHash(), name: Technologies.ORACLE, subName: 'Oracle', experience: '01/01/2019', image: SkillImage.ORACLE },
    { id: generateHash(), name: Technologies.MONGO_DB, subName: 'Mongodb', experience: '01/01/2019', image: SkillImage.MONGO_DB },
    { id: generateHash(), name: Technologies['C++'], subName: 'C++', experience: '01/01/2019', image: SkillImage["C++"] },
    { id: generateHash(), name: Technologies.DOT_NET, subName: '.Net', experience: '01/01/2019', image: SkillImage.DOT_NET },
    { id: generateHash(), name: Technologies.CODE_IGNITER, subName: 'CodeIgniter', experience: '01/01/2019', image: SkillImage.CODE_IGNITER },
    { id: generateHash(), name: Technologies.PHP, subName: 'PHP', experience: '01/01/2019', image: SkillImage.PHP },
    { id: generateHash(), name: Technologies.DOCKER, subName: 'Docker', experience: '01/01/2019', image: SkillImage.DOCKER },
];

const skillMap = new Map(skills.map(skill => [skill.name, {...skill, size: 28}]));

export const jobs: Skill[] = [
    { id: generateHash(), name: Jobs.SICOOB, complement: Jobs.ACT_DIGITAL, subName: 'JE', experience: '01/01/2019', image: JobImage.SICOOB },
    { id: generateHash(), name: Jobs.ILPFARM, subName: 'JE', experience: '01/01/2019', image: JobImage.ILPFARM },
    { id: generateHash(), name: Jobs.BANCO_DO_BRASIL, complement: Jobs.CAST_GROUP, subName: 'JE', experience: '01/01/2019', image: JobImage.BANCO_DO_BRASIL },
    { id: generateHash(), name: Jobs.NOVA_CASA_DISTRIBUIDORA, subName: 'JE', experience: '01/01/2019', image: JobImage.NOVA_CASA },
    { id: generateHash(), name: Jobs.MINISTERIO_DA_FAZENDA, subName: 'JE', experience: '01/01/2019', image: JobImage.MINISTERIO_DA_FAZENDA }
];

export const JobsDetail: JobDetailProps[] = [
    {
        skill: {
            id: generateHash(),
            name: Jobs.SICOOB,
            complement: Jobs.ACT_DIGITAL,
            image: JobImage.SICOOB,
        },
        description: JobDescription.ACT_DIGITAL_PT,
        technologies: [
            skillMap.get(Technologies.TYPESCRIPT),
            skillMap.get(Technologies.SOCKETIO),
            skillMap.get(Technologies.MQTT),
            skillMap.get(Technologies.NESTJS),
            skillMap.get(Technologies.MONGO_DB),
            skillMap.get(Technologies.ANGULAR),
            skillMap.get(Technologies.DOCKER),
            skillMap.get(Technologies.GIT),
        ].filter((tech): tech is Skill => Boolean(tech)) as Skill[]
    },
    {
        skill: {
            id: generateHash(),
            name: Jobs.ILPFARM,
            image: JobImage.ILPFARM
        },
        description: JobDescription.ILPFARM_PT,
        technologies: [
            skillMap.get(Technologies.TYPESCRIPT),
            skillMap.get(Technologies.SOCKETIO),
            skillMap.get(Technologies.FLUTTER),
            skillMap.get(Technologies.NESTJS),
            skillMap.get(Technologies.ANGULAR),
            skillMap.get(Technologies.KEYCLOAK),
            skillMap.get(Technologies.POSTGRES),
            skillMap.get(Technologies.DOCKER),
            skillMap.get(Technologies.GIT),
        ].filter((tech): tech is Skill => Boolean(tech)) as Skill[]
    },
    {
        skill: {
            id: generateHash(),
            name: Jobs.BANCO_DO_BRASIL,
            image: JobImage.BANCO_DO_BRASIL,
            complement: Jobs.ACT_DIGITAL,
        },
        description: JobDescription.BANCO_DO_BRASIL_PT,
        technologies: [
            skillMap.get(Technologies.REACTJS),
            skillMap.get(Technologies.ORACLE),
            skillMap.get(Technologies.NESTJS),
            skillMap.get(Technologies.ANGULAR),
            skillMap.get(Technologies.POSTGRES),
            skillMap.get(Technologies.MONGO_DB),
            skillMap.get(Technologies.DOCKER),
            skillMap.get(Technologies.GIT),
        ].filter((tech): tech is Skill => Boolean(tech)) as Skill[]
    },
    {
        skill: {
            id: generateHash(),
            name: Jobs.NOVA_CASA_DISTRIBUIDORA,
            image: JobImage.NOVA_CASA
        },
        description: JobDescription.NOVA_CASA_PT,
        technologies: [
            skillMap.get(Technologies.VUEJS),
            skillMap.get(Technologies["C++"]),
            skillMap.get(Technologies.DOT_NET),
            skillMap.get(Technologies.ORACLE),
            skillMap.get(Technologies.GIT),
        ].filter((tech): tech is Skill => Boolean(tech)) as Skill[]
    },
    {
        skill: {
            id: generateHash(),
            name: Jobs.MINISTERIO_DA_FAZENDA,
            image: JobImage.MINISTERIO_DA_FAZENDA
        },
        description: JobDescription.MINISTERIO_DA_FAZENDA_PT,
        technologies: [
            skillMap.get(Technologies.PHP),
            skillMap.get(Technologies.CODE_IGNITER),
            skillMap.get(Technologies.POSTGRES),
            skillMap.get(Technologies.DOCKER),
            skillMap.get(Technologies.GIT),
        ].filter((tech): tech is Skill => Boolean(tech)) as Skill[]
    },
];