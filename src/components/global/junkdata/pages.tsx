import { HomeIcon, LinkIcon, SettingsIcon, Users, Zap } from "lucide-react";
import React from "react"

export const PAGE_BREAD_CRUMBS: string[] = [
    'contacts',
    'automations',
    'integrations',
    'settings',
  ]

type Props = {
    [page in string]: React.ReactNode
}

export const PAGE_ICON: Props = {
    AUTOMATIONS: <Zap size={20} className="text-purple-500" />,
    CONTACTS: <Users size={20} className="text-blue-500" />,
    INTEGRATIONS: <LinkIcon size={20} className="text-green-500" />,
    SETTINGS: <SettingsIcon size={20} className="text-amber-500" />,
    HOME: <HomeIcon size={20} className="text-sky-500" />,
  };