"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PAGE_BREAD_CRUMBS } from "../junkdata/pages";
import {
  ChevronRight,
  Home,
  Settings,
  Bell,
  Search,
  LogIn,
  UserPlus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useUser, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import CreateAutomationButton from "../createAutomation/CreateAutomation";
import MainBreadCrumb from "../MainBreadCrumb/MainBreadCrumb";
import { usePath } from "@/hooks/use-nav";

interface MainNavBarProps {
  id: string;
}

const MainNavBar = ({ id }: MainNavBarProps) => {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = React.useState("");
  const { isSignedIn, user } = useUser();
  const { page } = usePath();

  const pathSegments = pathname.split("/").filter(Boolean);
  const currentPage = pathSegments[pathSegments.length - 1];
  const isCurrentPage = (page: string) => {
    return PAGE_BREAD_CRUMBS.includes(page) && pathname.includes(page);
  };

  return (
    <div className="flex flex-col w-full gap-6 mb-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            href={`/dashboard/${id}`}
            className="text-zinc-400 hover:text-white"
          >
            <Home size={18} />
          </Link>
          <ChevronRight size={16} className="text-zinc-600" />

          <div className="flex items-center gap-2">
            {PAGE_BREAD_CRUMBS.map((page, index) =>
              isCurrentPage(page) ? (
                <div key={page} className="flex items-center gap-2">
                  {index > 0 && (
                    <ChevronRight size={16} className="text-zinc-600" />
                  )}
                  <span className="text-sm font-medium text-white capitalize">
                    {page}
                  </span>
                </div>
              ) : null
            )}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <CreateAutomationButton />

          <div className="relative">
            <Search
              size={16}
              className="absolute left-2.5 top-2.5 text-zinc-500"
            />
            <Input
              placeholder="Search..."
              className="w-64 bg-zinc-900 border-zinc-800 pl-9 text-sm text-zinc-300 focus:border-purple-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Button
            size="icon"
            variant="ghost"
            className="rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800"
          >
            <Bell size={18} />
          </Button>

          <Button
            size="icon"
            variant="ghost"
            className="rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800"
          >
            <Settings size={18} />
          </Button>

          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <div className="flex items-center gap-2">
              <SignInButton>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-zinc-400 hover:text-white hover:bg-zinc-800 gap-1.5"
                >
                  <LogIn size={16} />
                  <span>Login</span>
                </Button>
              </SignInButton>

              <SignUpButton>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 gap-1.5"
                >
                  <UserPlus size={16} />
                  <span>Sign Up</span>
                </Button>
              </SignUpButton>
            </div>
          )}
        </div>
      </div>


      {(currentPage === "automations" || currentPage === "contacts") && (
        <div className="flex items-center border-b border-zinc-800">
          <Button
            variant="ghost"
            className={cn(
              "rounded-none border-b-2 border-transparent px-4",
              currentPage === "automations" && "border-purple-500 text-white"
            )}
          >
            All
          </Button>
          <Button
            variant="ghost"
            className="rounded-none border-b-2 border-transparent px-4 text-zinc-400 hover:text-zinc-100"
          >
            Active
          </Button>
          <Button
            variant="ghost"
            className="rounded-none border-b-2 border-transparent px-4 text-zinc-400 hover:text-zinc-100"
          >
            Draft
          </Button>
          <Button
            variant="ghost"
            className="rounded-none border-b-2 border-transparent px-4 text-zinc-400 hover:text-zinc-100"
          >
            Archived
          </Button>
        </div>
      )}
      <MainBreadCrumb
        page={page === id ? 'Home': page}
        id={id}
      />
    </div>
  );
};

export default MainNavBar;