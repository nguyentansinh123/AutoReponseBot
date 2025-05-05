import { Home, Zap, Bell, RocketIcon, Settings } from "lucide-react";
import { v4 as uuid } from "uuid";

export const navItems = [
  {
    id: uuid(),
    icon: <Home size={18} />,
    label: "Home",
    href: "/dashboard",
  },
  {
    id: uuid(),
    icon: <Zap size={18} />,
    label: "Automations",
    href: "/dashboard/automations",
  },
  {
    id: uuid(),
    icon: <RocketIcon size={18} />,
    label: "Integrations",
    href: "/dashboard/integrations",
  },
  {
    id: uuid(),
    icon: <Settings size={18} />,
    label: "Settings",
    href: "/dashboard/messages",
  },
  {
    id: uuid(),
    icon: <Bell size={18} />,
    label: "Notifications",
    href: "/dashboard/notifications",
  },
];
