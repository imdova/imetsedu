import { Home, Layers, Users } from "lucide-react";

export interface LinkType {
  name: string;
  path: string;
  icon: React.ElementType;
}

export const SidebarLinks: LinkType[] = [
  {
    name: "DashBoard",
    path: "/dashboard",
    icon: Home,
  },
  {
    name: "pages",
    path: "/dashboard/pages",
    icon: Layers,
  },
  {
    name: "Users",
    path: "/dashboard/users",
    icon: Users,
  },
];
