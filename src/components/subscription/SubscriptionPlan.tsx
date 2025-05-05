"use client";

import React from 'react';
import { Crown, ChevronRight, Zap } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface SubscriptionPlanProps {
  type: 'FREE' | 'VIP';  
  usedAutomations?: number;
  totalAutomations?: number;
  className?: string;
}

const SubscriptionPlan = ({
  type = "FREE",
  usedAutomations = 3,
  totalAutomations = 5,
  className,
}: SubscriptionPlanProps) => {
  const usagePercentage = Math.min(100, Math.round((usedAutomations / totalAutomations) * 100));
  const isPremium = type === 'VIP'; 
  
  const getPlanDisplayName = () => {
    if (type === 'VIP') return "VIP Plan";
    return "Free Plan";
  };
  
  return (
    <div className={cn("mx-3 my-3", className)}>
      <Link href="/dashboard/settings/billing">
        <div className="rounded-lg bg-gradient-to-br from-zinc-900 to-black p-3 border border-zinc-800/60 hover:border-purple-500/50 transition-all group cursor-pointer">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {isPremium ? (
                <div className="bg-gradient-to-br from-amber-500/20 to-yellow-500/20 p-1.5 rounded-md">
                  <Crown size={16} className="text-amber-400" />
                </div>
              ) : (
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-1.5 rounded-md">
                  <Zap size={16} className="text-purple-400" />
                </div>
              )}
              <div>
                <div className="flex items-center gap-2">
                  <span className={cn(
                    "text-[10px] font-bold px-1.5 py-0.5 rounded-sm",
                    isPremium 
                      ? "bg-gradient-to-r from-amber-500/30 to-yellow-500/30 text-amber-300" 
                      : "bg-gradient-to-r from-purple-500/30 to-blue-500/30 text-blue-300"
                  )}>
                    {type}
                  </span>
                </div>
                <p className="text-xs font-medium text-zinc-400 mt-1">Current Plan</p>
                <p className="text-sm font-semibold text-white">
                  {getPlanDisplayName()}
                  {type === 'FREE' && (
                    <span className="ml-1 text-xs text-purple-400">(Upgrade)</span>
                  )}
                </p>
              </div>
            </div>
            <div className="bg-zinc-800/50 group-hover:bg-purple-600/30 rounded-full p-1 transition-all">
              <ChevronRight size={14} className="text-zinc-400 group-hover:text-purple-300" />
            </div>
          </div>
          
          <div className="mt-2 pt-2 border-t border-zinc-800/50">
            <div className="flex items-center justify-between text-xs">
              <p className="text-zinc-500">{usedAutomations} of {totalAutomations} automations used</p>
              <p className={cn(
                "font-medium",
                usagePercentage > 80 ? "text-amber-400" : 
                usagePercentage > 50 ? "text-blue-400" : "text-zinc-400"
              )}>{usagePercentage}%</p>
            </div>
            <div className="w-full h-1.5 bg-zinc-800/60 rounded-full mt-1 overflow-hidden">
              <div 
                className={cn(
                  "h-full rounded-full",
                  usagePercentage > 80 ? "bg-gradient-to-r from-amber-600 to-red-500" : 
                  "bg-gradient-to-r from-purple-600 to-blue-500"
                )}
                style={{ width: `${usagePercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SubscriptionPlan;