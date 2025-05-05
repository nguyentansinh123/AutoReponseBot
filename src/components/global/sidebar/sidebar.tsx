"use client";

import { usePath } from "@/hooks/use-nav";
import React from "react";
import { Settings, Zap, HelpCircle, LogOut } from "lucide-react";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { UserButton, useAuth, useClerk } from "@clerk/nextjs";
import NavItem from "./NavItem";
import { navItems } from "../junkdata/junkdata";
import { Button } from "@/components/ui/button";
import SubscriptionPlan from "@/components/subscription/SubscriptionPlan";

interface SidebarProps {
  id: string;
}

const Sidebar = ({ id }: SidebarProps) => {
  const pathname = usePathname();
  const { page } = usePath();
  const { signOut } = useClerk();
  const { sessionId } = useAuth();

  return (
    <div className="w-64 h-screen border-r border-zinc-800/40 flex flex-col bg-gradient-to-b from-black to-zinc-950">
      <div className="p-4 flex items-center gap-2">
        <div className="p-2 rounded-md bg-gradient-to-br from-purple-600 to-blue-600">
          <Zap size={20} className="text-white" />
        </div>
        <h1 className="text-xl font-bold text-white">
          Auto
          <span className="bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">
            mate
          </span>
        </h1>
      </div>

      <Separator className="bg-zinc-800/40" />

      <div className="flex flex-col gap-1 p-3 flex-1">
        {navItems.map((item) => (
          <NavItem
            page={page}
            id={id}
            key={item.id || `nav-${item.label}`}
            icon={item.icon}
            label={item.label}
            href={`/dashboard/${id}/${
              item.label === "Home" ? "/" : item.label
            }`}
            active={page === item.label.toLowerCase()}
          />
        ))}
      </div>

      <div className="mt-auto">
        <Separator className="bg-zinc-800/40 mb-4" />

        <SubscriptionPlan
          type="FREE"
          usedAutomations={3}
          totalAutomations={5}
        />

        <div className="p-3 space-y-2">
          <NavItem
            page={page}
            id={id}
            key="support"
            icon={<HelpCircle size={18} />}
            label="Help & Support"
            href="/dashboard/support"
            active={page === "support"}
          />
          <NavItem
            page={page}
            id={id}
            key="settings"
            icon={<Settings size={18} />}
            label="Settings"
            href="/dashboard/settings"
            active={page === "settings"}
          />

          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-zinc-400 hover:text-red-400 hover:bg-red-900/10"
            onClick={async () => {
              try {
                if (sessionId) {
                  await signOut({ sessionId });
                } else {
                  await signOut();
                }
                window.location.href = "/";
              } catch (error) {
                console.error("Error signing out:", error);
              }
            }}
          >
            <LogOut size={18} />
            <span>Sign Out</span>
          </Button>
        </div>

        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <UserButton afterSignOutUrl="/" />
            <div>
              <p className="text-sm text-white font-medium">Your Account</p>
              <p className="text-xs text-zinc-400">Free Plan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
