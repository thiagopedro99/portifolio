export const portfolioData = {
    hero: {
        name: 'Thiago Silva',
        title: 'Desenvolvedor Full Stack',
        subtitle: 'Criando experiências digitais incríveis',
        description:
            'Sou um desenvolvedor apaixonado por criar soluções web modernas e eficientes. Especializado em React, TypeScript e Node.js, sempre buscando aprender novas tecnologias.',
        cvUrl: '/cv.pdf', // opcional
        socialLinks: [
            { name: 'GitHub', url: 'https://github.com/seu-usuario', icon: 'github' },
            { name: 'LinkedIn', url: 'https://linkedin.com/in/seu-usuario', icon: 'linkedin' },
            { name: 'Email', url: 'mailto:seu@email.com', icon: 'email' },
        ],
    },
    skills: {
        title: 'Tecnologias que Utilizo',
        subtitle: 'Ferramentas e linguagens que domino no dia a dia',
        technologies: [
            {
                name: 'React',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                color: '#61DAFB',
                category: 'frontend',
                description: 'React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.'
            },
            {
                name: 'TypeScript',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
                color: '#3178C6',
                category: 'frontend',
                description: 'TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft que adiciona tipagem estática opcional à JavaScript.'
            },
            {
                name: 'JavaScript',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                color: '#F7DF1E',
                category: 'frontend',
                description: 'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fracamente tipada.'
            },
            {
                name: 'Node.js',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
                color: '#339933',
                category: 'backend',
                description: 'Node.js é uma plataforma de desenvolvimento de aplicativos baseada na plataforma JavaScript, que permite a execução de código JavaScript fora de um navegador web.'
            },
            {
                name: 'HTML',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
                color: '#E34F26',
                category: 'frontend',
                description: 'HTML é uma linguagem de marcação utilizada para estruturar e apresentar conteúdo na web.'
            },
            {
                name: 'CSS',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
                color: '#1572B6',
                category: 'frontend',
                description: 'CSS é uma linguagem de estilo utilizada para descrever a apresentação de documentos HTML e XML.'
            },
            {
                name: 'Git',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
                color: '#F05032',
                category: 'tools',
                description: 'Git é um sistema de controle de versão distribuído que permite rastrear e gerenciar mudanças em arquivos de código-fonte.'
            },
            {
                name: 'Docker',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
                color: '#2496ED',
                category: 'tools',
                description: 'Docker é uma plataforma de desenvolvimento e execução de aplicativos baseada na plataforma Linux.'
            },
            {
                name: 'PostgreSQL',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
                color: '#4169E1',
                category: 'backend',
                description: 'PostgreSQL é um sistema de gerenciamento de banco de dados relacional desenvolvido pela PostgreSQL Global Development Group.'
            },
            {
                name: 'MongoDB',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
                color: '#47A248',
                category: 'backend',
                description: 'MongoDB é um banco de dados NoSQL orientado a documentos que permite armazenar e recuperar dados de forma flexível e escalável.'
            },
            {
                name: 'Figma',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
                color: '#F24E1E',
                category: 'design',
                description: 'Figma é uma plataforma de design colaborativo e gratuito que permite criar e compartilhar protótipos de interfaces de usuário.'
            },
            {
                name: 'VS Code',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
                color: '#007ACC',
                category: 'tools',
                description: 'VS Code é um editor de código-fonte desenvolvido pela Microsoft que oferece suporte a muitas extensões e ferramentas para desenvolvimento de software.'
            },
        ],
    },
    projects: {
        title: 'Meus Projetos',
        projects: [
            {
                id: '1',
                title: 'E-commerce Platform',
                description:
                    'Plataforma completa de e-commerce com carrinho, checkout e painel administrativo.',
                technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
                liveUrl: 'https://projeto1.com',
                githubUrl: 'https://github.com/seu-usuario/projeto1',
                featured: true,
            },
            {
                id: '2',
                title: 'Task Manager',
                description:
                    'Aplicativo de gerenciamento de tarefas com drag-and-drop e sincronização em tempo real.',
                technologies: ['React', 'Firebase', 'Material-UI'],
                liveUrl: 'https://projeto2.com',
                githubUrl: 'https://github.com/seu-usuario/projeto2',
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
                title: 'Portfolio Template',
                description:
                    'Template moderno e responsivo para portfólios de desenvolvedores.',
                technologies: ['React', 'Styled Components', 'Vite'],
                liveUrl: 'https://projeto6.com',
                githubUrl: 'https://github.com/seu-usuario/projeto6',
            },
        ],
    },
};
