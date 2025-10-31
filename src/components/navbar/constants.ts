// src/components/navbar/constants.ts

export interface MenuItem {
  label: string;
  path?: string;
  id?: string;
  showOnRoutes?: string[];
  hideOnRoutes?: string[];
}

// Itens que aparecem apenas na home (com scroll)
export const homeMenuItems: MenuItem[] = [
  { 
    label: "Home", 
    id: "hero",
    showOnRoutes: ["/"],
  },
  { 
    label: "Habilidades", 
    id: "skills",
    showOnRoutes: ["/"],
  },
  { 
    label: "Projetos", 
    id: "projects",
    showOnRoutes: ["/"],
  },
];

// Item "Home" que aparece em TODAS as rotas EXCETO na home (navegação)
export const navigationMenuItems: MenuItem[] = [
  { 
    label: "Home", 
    path: "/",
    showOnRoutes: ["*"],
    hideOnRoutes: ["/"], // Esconde quando está na home
  },
  { 
    label: "Components", 
    path: "/components",
    showOnRoutes: ["*"],
  },
];

// Combina todos os itens
export const allMenuItems: MenuItem[] = [
  ...homeMenuItems,
  ...navigationMenuItems,
];