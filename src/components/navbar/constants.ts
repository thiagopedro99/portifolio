// src/components/navbar/constants.ts
export interface MenuItem {
  label: string;
  id: string;
}

export const menuItems: MenuItem[] = [
  { label: "Home", id: "hero" },
  { label: "Habilidades", id: "skills" },
  { label: "Projetos", id: "projects" },
];