// src/components/navbar/types.ts
export interface MenuItem {
  label: string;
  path?: string;
  id?: string;
  showOnRoutes?: string[];
}

export interface NavbarProps {
  logo?: string;
  menuItems?: MenuItem[];
}