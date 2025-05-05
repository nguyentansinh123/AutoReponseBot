"use client";

import { Button } from "@/components/ui/button";
import { usePath } from "@/hooks/use-nav";
import { cn, getMonth } from "@/lib/utils";
import Link from "next/link";
import { useMemo } from "react";
import GradientButton from "../gradiant/gradiantButton";
import { Calendar, Sparkles } from "lucide-react";
import { useQueryAutomations } from "@/hooks/useQuery";
import CreateAutomationButton from "../createAutomation/CreateAutomation";
import { useMutationDataState } from "@/hooks/useMutation";

type Props = {};

function AutomationList({}: Props) {
  const { data } = useQueryAutomations();

  const {latestVariable} = useMutationDataState(["create-automation"])
  console.log(latestVariable)

  const { pathname } = usePath();

  if (data?.status !== 200 || data?.data.length <= 0) {
    return (
      <div className="h-[70vh] flex justify-center items-center flex-col gap-y-3">
        <h3 className="text-lg text-gray-400">No Automation</h3>
        <CreateAutomationButton />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-4">
      {data.data!.map((automation) => (
        <Link
          href={`${pathname}/${automation.id}`}
          key={automation.id}
          className="bg-zinc-900/70 hover:bg-zinc-900/90 group transition-all duration-200 
               rounded-xl p-6 border border-zinc-800/80 hover:border-purple-500/30 
               shadow-sm hover:shadow-lg hover:shadow-purple-900/10 flex"
        >
          <div className="flex flex-col flex-1 items-start">
            <h2 className="text-xl font-semibold text-white group-hover:text-purple-200 transition-colors">
              {automation.name}
            </h2>
            <p className="text-zinc-400 text-sm mb-4">This is from comment</p>

            {/* <div className="flex gap-2 flex-wrap">
              <div
                className="rounded-full px-4 py-1.5 text-sm font-medium
                         bg-purple-500/15 border border-purple-500/40 text-purple-200"
              >
                Get Started
              </div>
            </div> */}
            {automation.keywords.length > 0 ? (
              <div className="flex gap-x-2 flex-wrap mt-3">
                {
                  // @ts-ignore
                  automation.keywords.map((keyword, index) => (
                    <div
                      key={index}
                      className={cn(
                        "rounded-full px-4 py-1 capitalize",
                        (0 + 1) % 1 == 0 &&
                          "bg-keyword-green/15 border-2 border-keyword-green",
                        (1 + 1) % 2 == 0 &&
                          "bg-keyword-purple/15 border-2 border-keyword-purple",
                        (2 + 1) % 3 == 0 &&
                          "bg-keyword-yellow/15 border-2 border-keyword-yellow",
                        (3 + 1) % 4 == 0 &&
                          "bg-keyword-red/15 border-2 border-keyword-red"
                      )}
                    >
                      {keyword.word}
                    </div>
                  ))
                }
              </div>
            ) : (
              <div
                className="rounded-full border mt-4 border-dashed border-zinc-700 px-3 py-1.5 
                       hover:border-zinc-600 transition-colors"
              >
                <p className="text-sm text-zinc-400">No Keywords</p>
              </div>
            )}
          </div>

          <div className="flex flex-col justify-between items-end gap-3 min-w-[140px]">
            <div className="flex items-center text-zinc-500 gap-1.5">
              <Calendar size={14} />
              <p className="text-xs">
                {getMonth(automation.createdAt.getUTCMonth() + 1)}{" "}
                {automation.createdAt.getUTCDate() === 1
                  ? `${automation.createdAt.getUTCDate()}st`
                  : `${automation.createdAt.getUTCDate()}th`}{" "}
                {automation.createdAt.getUTCFullYear()}
              </p>
            </div>

            <div className="flex flex-col gap-2 w-full">
              {automation.listener?.listener === "AI" ? (
                <GradientButton
                  type="BUTTON"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 
                      text-white font-medium rounded-lg py-1.5 px-3 text-sm 
                      hover:from-purple-700 hover:to-blue-700"
                >
                  <div className="flex items-center justify-center gap-1">
                    <Sparkles size={14} className="text-yellow-300" />
                    <span>Smart AI</span>
                  </div>
                </GradientButton>
              ) : (
                <Button
                  className="w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 
                            rounded-lg py-1.5 px-3 text-sm"
                >
                  Standard
                </Button>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default AutomationList;
