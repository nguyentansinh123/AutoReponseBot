import React from "react";
import { PAGE_ICON } from "../junkdata/pages";
import { cn } from "@/lib/utils";

interface Props {
  page: string;
  id?: string;
}

const MainBreadCrumb = ({ page, id }: Props) => {
  return (
    <div className="flex flex-col w-full">
      {page === "Home" ? (
        <div className="flex items-start w-full">
          <div className="radial--gradient py-5 px-8 inline-flex items-center gap-3 rounded-lg">
            <div className="p-2 rounded-full bg-sky-500/10">
              {PAGE_ICON.HOME}
            </div>
            <div>
              <p className="text-zinc-400 text-sm">Welcome back</p>
              <h2 className="capitalize text-2xl font-medium text-white">{id}</h2>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-start">
          <div className="radial--gradient inline-flex py-4 px-6 gap-x-3 items-center rounded-lg">
            <div className={cn(
              "p-2 rounded-full",
              page.toLowerCase() === "automations" && "bg-purple-500/10",
              page.toLowerCase() === "contacts" && "bg-blue-500/10",
              page.toLowerCase() === "integrations" && "bg-green-500/10",
              page.toLowerCase() === "settings" && "bg-amber-500/10",
            )}>
              {PAGE_ICON[page.toUpperCase()]}
            </div>
            <div>
              <h2 className="font-medium text-xl capitalize text-white">{page}</h2>
              <p className="text-xs text-zinc-400">
                {page.toLowerCase() === "automations" && "Manage your workflows"}
                {page.toLowerCase() === "contacts" && "View your contacts"}
                {page.toLowerCase() === "integrations" && "Connect your services"}
                {page.toLowerCase() === "settings" && "Configure your account"}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainBreadCrumb;