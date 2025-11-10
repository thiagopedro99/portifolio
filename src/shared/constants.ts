
export const portfolioData = {
    hero: {
        name: 'Thiago Silva',
        title: 'Desenvolvedor Full Stack',
        subtitle: 'Criando experiências digitais incríveis',
        description:
            'Sou um desenvolvedor apaixonado por criar soluções web modernas e eficientes. Especializado em React, TypeScript e Node.js, sempre buscando aprender novas tecnologias.',
        cvUrl: '/cv.pdf', // opcional
        socialLinks: [
            { name: 'GitHub', url: 'https://github.com/thiagopedro99', icon: 'github' },
            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/thiago-pedro-da-silva', icon: 'linkedin' },
            { name: 'Email', url: 'mailto:thiago.gefa@gmail.com', icon: 'email' },
        ],
    },

    footer: {
        name: 'Thiago Silva',
        email: 'thiago.gefa@gmail.com',
        phone: '+5531995271544',
        location: 'Belo Horizonte, MG - Brasil',
        text: 'ola tudo bem ? tenho interesse em seus serviços!',
        socialLinks: [
            { name: 'GitHub', url: 'https://github.com/thiagopedro99', icon: 'github' },
            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/thiago-pedro-da-silva', icon: 'linkedin' },
            { name: 'Email', url: 'mailto:thiago.gefa@gmail.com', icon: 'email' },
        ],
        year: new Date().getFullYear(),
    },
    skills: {
        title: 'Habilidades',
        subtitle: 'Ferramentas e linguagens que domino no dia a dia',
        technologies: [
            {
                name: 'React',
                icon: 'icons/react.svg',
                color: '#61DAFB',
                category: 'frontend',
                description: 'React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.'
            },
            {
                name: 'TypeScript',
                icon: 'icons/typescript.svg',
                color: '#3178C6',
                category: 'frontend',
                description: 'TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft que adiciona tipagem estática opcional à JavaScript.'
            },
            {
                name: 'JavaScript',
                icon: 'icons/javascript-original.svg',
                color: '#F7DF1E',
                category: 'frontend',
                description: 'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fracamente tipada.'
            },
            {
                name: 'Node.js',
                icon: 'icons/nodejs-original.svg',
                color: '#339933',
                category: 'backend',
                description: 'Node.js é uma plataforma de desenvolvimento de aplicativos baseada na plataforma JavaScript, que permite a execução de código JavaScript fora de um navegador web.'
            },
            {
                name: 'HTML',
                icon: 'icons/html5-original.svg',
                color: '#E34F26',
                category: 'frontend',
                description: 'HTML é uma linguagem de marcação utilizada para estruturar e apresentar conteúdo na web.'
            },
            {
                name: 'CSS',
                icon: 'icons/css3-original.svg',
                color: '#1572B6',
                category: 'frontend',
                description: 'CSS é uma linguagem de estilo utilizada para descrever a apresentação de documentos HTML e XML.'
            },
            {
                name: 'Git',
                icon: 'icons/git-original.svg',
                color: '#F05032',
                category: 'tools',
                description: 'Git é um sistema de controle de versão distribuído que permite rastrear e gerenciar mudanças em arquivos de código-fonte.'
            },
            {
                name: 'Bootstrap',
                icon: 'icons/bootstrap-original.svg',
                color: '#7952B3',
                category: 'frontend',
                description: 'Bootstrap é uma biblioteca front-end para desenvolvimento de interfaces de usuário responsivas e mobile-first.'
            },
            {
                name: 'PostgreSQL',
                icon: 'icons/postgresql-original.svg',
                color: '#4169E1',
                category: 'backend',
                description: 'PostgreSQL é um sistema de gerenciamento de banco de dados relacional desenvolvido pela PostgreSQL Global Development Group.'
            },
            {
                name: 'MongoDB',
                icon: 'icons/mongodb-original.svg',
                color: '#47A248',
                category: 'backend',
                description: 'MongoDB é um banco de dados NoSQL orientado a documentos que permite armazenar e recuperar dados de forma flexível e escalável.'
            },
            {
                name: 'Angular',
                icon: 'icons/angularjs-original.svg',
                color: '#DD0031',
                category: 'frontend',
                description: 'Angular é um framework de desenvolvimento web de código aberto que permite criar aplicativos web dinâmicos e escaláveis.'
            },


            {
                name: "styled-components",
                icon: "icons/styledcomponents-original.svg",
                color: "#DB7093",
                category: "frontend",
                description: "styled-components é uma biblioteca de estilização para React que permite a criação de estilos dinâmicos em componentes de React."
            }

        ],
    },
    projects: {
        title: 'Meus Projetos',
        projects: [
            {
                id: '1',
                title: 'Template React + styled-components',
                description: 'Template React + styled-components e componentes prontos.',
                technologies: ['React', 'TypeScript', 'Node.js', 'styled-components'],
                liveUrl: 'https://template-react-blush.vercel.app',
                githubUrl: 'https://github.com/thiagopedro99/template-react',
                image: 'https://github.com/thiagopedro99/template-react/blob/master/public/preview.png?raw=true',
                featured: true,
            },

            {
                id: '2',
                title: 'Portfolio Template',
                description: 'Se tem interesse em recriar este portfolio, você pode baixar o template no github.',
                image: 'https://raw.githubusercontent.com/thiagopedro99/portifolio/refs/heads/main/public/preview.png',
                technologies: ['React', 'Styled Components', 'Vite', 'TypeScript', 'Node.js'],
                liveUrl: 'https://portifolio-omega-topaz-82.vercel.app/',
                githubUrl: 'https://github.com/thiagopedro99/portifolio',
            },

            {
                id: '3',
                title: 'Weather App',
                description:
                    'Aplicativo de previsão do tempo com dados em tempo real e interface intuitiva.',
                technologies: ['React', 'API REST', 'Styled Components'],
                liveUrl: 'https://projeto3.com',
                githubUrl: 'https://github.com/seu-usuario/projeto3',
            },
            {
                id: '4',
                title: 'Social Media Dashboard',
                description:
                    'Dashboard para análise de métricas de redes sociais com gráficos interativos.',
                technologies: ['React', 'Chart.js', 'TypeScript'],
                githubUrl: 'https://github.com/seu-usuario/projeto4',
            },
            {
                id: '5',
                title: 'Blog Platform',
                description:
                    'Plataforma de blog com editor de texto rico e sistema de comentários.',
                technologies: ['Next.js', 'MongoDB', 'TailwindCSS'],
                liveUrl: 'https://projeto5.com',
                githubUrl: 'https://github.com/seu-usuario/projeto5',
            },
            {
                id: '6',
                title: 'Task Manager',
                description:
                    'Aplicativo de gerenciamento de tarefas com drag-and-drop e sincronização em tempo real.',
                technologies: ['React', 'Firebase', 'Material-UI'],
                liveUrl: 'https://projeto2.com',
                githubUrl: 'https://github.com/seu-usuario/projeto2',
            },
        ],
    },
};
