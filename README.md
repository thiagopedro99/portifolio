# Portfólio Profissional - Thiago Silva

Aplicação web moderna desenvolvida para apresentar projetos, habilidades técnicas e experiência profissional. Construída com React, TypeScript e arquitetura escalável, demonstrando boas práticas de desenvolvimento front-end.

[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://portifolio-omega-topaz-82.vercel.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Sobre o Projeto

Este portfólio foi desenvolvido com foco em performance, manutenibilidade e experiência do usuário. A aplicação apresenta uma arquitetura modular com componentes reutilizáveis, sistema de temas dinâmico e navegação intuitiva.

### Características Principais

- **Design Responsivo**: Interface adaptável para dispositivos móveis, tablets e desktops
- **Sistema de Temas**: Alternância entre modo claro e escuro com persistência de preferência
- **Performance Otimizada**: Build otimizado com Vite e SWC para carregamento rápido
- **Navegação Inteligente**: Detecção automática de seção ativa durante scroll
- **Componentização**: Arquitetura baseada em componentes reutilizáveis e isolados
- **Acessibilidade**: Implementação de ARIA labels e navegação por teclado
- **Animações**: Transições suaves e performáticas com styled-components
- **Tipagem Forte**: TypeScript para segurança e manutenibilidade do código

## Stack Técnica


### Principais Tecnologias

- **React 19** - Biblioteca JavaScript para construção de interfaces de usuário
- **TypeScript** - Superset JavaScript com tipagem estática
- **Vite** - Ferramenta de build e desenvolvimento de alta performance
- **Styled-Components 6** - Biblioteca CSS-in-JS para estilização de componentes

### Bibliotecas e Ferramentas

- **React Router DOM 7** - Gerenciamento de rotas e navegação
- **Zustand 5** - Gerenciamento de estado global com arquitetura simples
- **Lucide React** - Biblioteca de ícones SVG otimizados
- **Axios 1.9** - Cliente HTTP para requisições API
- **ESLint** - Análise estática de código
- **TypeScript ESLint** - Regras de linting específicas para TypeScript

## Arquitetura e Estrutura

```
src/
├── components/
│   ├── common/              # Componentes reutilizáveis
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Container/
│   │   ├── Flex/
│   │   ├── Grid/
│   │   ├── Modal/
│   │   ├── ThemeToggle/
│   │   └── Tooltip/
│   ├── layout/              # Layout da aplicação
│   ├── navbar/              # Barra de navegação
│   ├── footer/              # Rodapé
│   └── floatingThemeToggle/ # Botão flutuante de tema
├── pages/
│   ├── home/                # Página principal
│   │   └── sections/        # Seções do portfólio
│   │       ├── hero/        # Seção de apresentação
│   │       ├── skills/      # Seção de habilidades
│   │       └── projects/    # Seção de projetos
│   └── notFound/            # Página 404
├── routes/                  # Configuração de rotas
├── stores/                  # Gerenciamento de estado (Zustand)
│   ├── App/                 # Store da aplicação (tema, idioma)
│   └── Data/                # Store de dados genéricos
├── styles/                  # Estilos e temas
│   ├── themes/
│   │   ├── light.ts         # Tema claro
│   │   ├── dark.ts          # Tema escuro
│   │   └── index.ts
│   ├── globalStyles.ts      # Estilos globais
│   └── styled.d.ts          # Tipagens do styled-components
├── hooks/                   # Custom hooks
│   └── useActiveSection.ts  # Hook para detecção de seção ativa
├── shared/                  # Constantes e utilitários compartilhados
│   └── constants.ts         # Dados do portfólio
├── App.tsx                  # Componente raiz
└── main.tsx                 # Entry point
```

## Instalação e Configuração

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instruções de Instalação

```bash
# Clone o repositório
git clone https://github.com/thiagopedro99/portfolio.git

# Acesse o diretório do projeto
cd portfolio

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

### Scripts Disponíveis

```bash
npm run dev        # Inicia servidor de desenvolvimento com hot reload
npm run build      # Gera build de produção otimizado
npm run preview    # Visualiza build de produção localmente
npm run lint       # Executa análise de código com ESLint
npm run type-check # Verifica tipagem TypeScript sem emitir arquivos
```

## Guia de Personalização

### Configuração de Dados do Portfólio

Os dados do portfólio são centralizados no arquivo `src/shared/constants.ts`. Para personalizar:

```typescript
export const portfolioData = {
  hero: {
    name: 'Seu Nome',
    title: 'Seu Cargo',
    description: 'Sua descrição profissional...',
    cvUrl: '/path-to-your-cv.pdf',
    socialLinks: [
      { 
        name: 'GitHub', 
        url: 'https://github.com/seu-usuario', 
        icon: 'github' 
      },
      // Adicione mais links conforme necessário
    ]
  },
  
  skills: {
    title: 'Habilidades Técnicas',
    subtitle: 'Descrição opcional',
    technologies: [
      {
        name: 'React',
        icon: 'icons/react.svg',
        category: 'frontend',
        description: 'Descrição da tecnologia...'
      },
      // Adicione suas tecnologias
    ]
  },
  
  projects: {
    title: 'Projetos',
    projects: [
      {
        id: '1',
        title: 'Nome do Projeto',
        description: 'Descrição detalhada do projeto...',
        technologies: ['React', 'TypeScript', 'Node.js'],
        liveUrl: 'https://projeto.com',
        githubUrl: 'https://github.com/usuario/projeto',
        image: 'url-da-imagem-do-projeto'
      },
      // Adicione seus projetos
    ]
  },
  
  footer: {
    name: 'Seu Nome',
    email: 'seu@email.com',
    phone: '+55 (00) 00000-0000',
    location: 'Cidade, Estado - País',
    socialLinks: [/* ... */],
    year: new Date().getFullYear()
  }
};
```

### Customização de Temas

### Customização de Temas

Para alterar as cores e estilos dos temas, edite os arquivos em `src/styles/themes/`:

```typescript
// src/styles/themes/light.ts ou dark.ts
export const lightTheme = {
  colors: {
    primary: '#1976d2',
    primaryDark: '#1565c0',
    primaryLight: '#42a5f5',
    // Personalize outras cores conforme necessário
  },
  fonts: {
    primary: '"Roboto", "Helvetica", "Arial", sans-serif',
    // Customize fontes e tamanhos
  },
  // Outros tokens de design...
};
```

### Adição de Ícones de Tecnologias

1. Adicione o arquivo SVG do ícone em `public/icons/`
2. Referencie no arquivo de constantes:

```typescript
{
  name: 'Nova Tecnologia',
  icon: 'icons/nova-tecnologia.svg',
  category: 'frontend', // ou 'backend', 'tools', 'design'
  description: 'Descrição da tecnologia...'
}
```

## Estrutura de Componentes

### Sistema de Design

O projeto utiliza um sistema de componentes reutilizáveis e altamente customizáveis:

**Button**
```typescript
<Button $variant="primary" $size="md" $fullWidth>
  Texto do Botão
</Button>
```

**Card**
```typescript
<Card $variant="elevated" $padding="2rem">
  Conteúdo do card
</Card>
```

**Layout Flex**
```typescript
<Flex $direction="row" $justify="between" $align="center" $gap="1rem">
  {children}
</Flex>
```

**Grid System**
```typescript
<Grid $columns={3} $gap="2rem">
  {items.map(item => <div key={item.id}>{item.content}</div>)}
</Grid>
```

**Modal**
```typescript
<Modal 
  isOpen={isOpen} 
  onClose={handleClose}
  title="Título do Modal"
  size="lg"
>
  Conteúdo do modal
</Modal>
```

## Funcionalidades Principais

### Seção Hero
Apresentação inicial do profissional contendo:
- Nome e título profissional
- Descrição breve de atuação
- Links para redes sociais profissionais (GitHub, LinkedIn, Email)
- Opção de download de currículo
- Call-to-action para contato

### Seção de Habilidades
Sistema interativo de apresentação de competências técnicas:
- Grid responsivo de tecnologias com ícones personalizados
- Modal informativo ao clicar em cada tecnologia
- Exibição de projetos relacionados a cada habilidade
- Categorização por tipo (frontend, backend, ferramentas, design)

### Showcase de Projetos
Portfólio de trabalhos realizados com:
- Cards visuais com imagens e descrições
- Tags de tecnologias utilizadas em cada projeto
- Links diretos para demonstração live e repositório
- Layout responsivo em grid

### Navegação e UX
- Barra de navegação fixa com indicador de seção ativa
- Scroll suave entre seções
- Detecção automática de posição do usuário
- Menu mobile responsivo


## Estratégias de Deploy

### Deploy via Vercel (Recomendado)

```bash
# Instale a CLI da Vercel
npm install -g vercel

# Execute o deploy
vercel
```

### Deploy via Netlify

```bash
# Gere a build de produção
npm run build

# O diretório dist/ está pronto para deploy no Netlify
```

### Deploy via GitHub Pages

```bash
# Instale a dependência
npm install --save-dev gh-pages

# Adicione ao package.json
{
  "homepage": "https://seu-usuario.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}

# Execute o deploy
npm run deploy
```

## Padrões e Boas Práticas

### Arquitetura
- Componentização com responsabilidade única
- Separação clara entre lógica de apresentação e negócio
- Uso de custom hooks para lógica reutilizável
- Gerenciamento de estado centralizado com Zustand

### TypeScript
- Tipagem forte em todos os componentes e funções
- Interfaces e tipos exportados em arquivos dedicados
- Uso de generics para componentes reutilizáveis
- Evitar uso de `any` em favor de tipagem apropriada

### Styled Components
- Props de estilo prefixadas com `$` (transient props)
- Uso consistente de tokens do tema (cores, espaçamentos, fontes)
- Variantes de componentes implementadas com CSS helper functions
- Estilos responsivos baseados em breakpoints do tema

### Acessibilidade
- Implementação de ARIA labels em elementos interativos
- Navegação completa por teclado
- Indicadores visuais de foco (focus-visible)
- Contraste adequado de cores em ambos os temas

### Performance
- Code splitting com lazy loading de rotas
- Otimização de imagens e assets
- Memoization de componentes pesados quando necessário
- Build otimizado com Vite

## Estrutura de Pastas

O projeto segue uma arquitetura modular e escalável:

```
src/
├── components/           # Componentes React
│   ├── common/          # Componentes reutilizáveis (Button, Card, etc)
│   ├── layout/          # Componentes de layout
│   ├── navbar/          # Componente de navegação
│   ├── footer/          # Componente de rodapé
│   └── [feature]/       # Componentes específicos por funcionalidade
├── pages/               # Páginas da aplicação
│   └── [page]/
│       └── sections/    # Seções específicas da página
├── routes/              # Configuração de rotas
├── stores/              # Estado global (Zustand)
├── styles/              # Temas e estilos globais
├── hooks/               # Custom hooks
├── shared/              # Constantes e utilitários
└── types/               # Definições de tipos globais
```

## Contribuindo

Contribuições são bem-vindas. Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nome-da-feature`)
3. Commit suas alterações seguindo o padrão [Conventional Commits](https://www.conventionalcommits.org/)
4. Push para a branch (`git push origin feature/nome-da-feature`)
5. Abra um Pull Request detalhando as mudanças propostas

### Padrão de Commits

Este projeto segue a convenção de [Conventional Commits](https://www.conventionalcommits.org/). Use os seguintes prefixos:

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação, ponto e vírgula, etc (sem mudança de código)
- `refactor:` Refatoração de código
- `perf:` Melhorias de performance
- `test:` Adição ou correção de testes
- `chore:` Atualizações de dependências, configurações, etc
- `ci:` Mudanças em CI/CD

**Exemplos:**
```bash
git commit -m "feat: adiciona componente de toast notifications"
git commit -m "fix: corrige navegação mobile em telas pequenas"
git commit -m "docs: atualiza guia de instalação no README"
git commit -m "refactor: reorganiza estrutura de componentes"
git commit -m "style: ajusta espaçamento do header"
```

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais informações.

## Contato e Redes Profissionais

**Thiago Silva** - Desenvolvedor Full Stack

[![Portfolio](https://img.shields.io/badge/Portfolio-seu--portfolio.vercel.app-blue?style=for-the-badge&logo=vercel&logoColor=white)](https://portifolio-omega-topaz-82.vercel.app/)<br>
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Thiago_Silva-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/thiago-pedro-da-silva)<br>
[![GitHub](https://img.shields.io/badge/GitHub-thiagopedro99-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/thiagopedro99)<br>
[![Email](https://img.shields.io/badge/Email-thiago.gefa@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:thiago.gefa@gmail.com)<br>

---

Desenvolvido por Thiago Silva | 2025