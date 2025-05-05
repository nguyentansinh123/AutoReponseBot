import { cn } from "@/lib/utils";
import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  label: string;
  current: "VIP" | "FREE";
  landing?: boolean;
};

const PaymentCard = ({ label, current, landing }: Props) => {
  const features =
    label === "VIP"
      ? [
          "Unlimited automations",
          "Chat GPT features",
          "Priority support",
          "Custom integrations",
        ]
      : [
          "Basic automations",
          "Standard support",
          "Community access",
          "1GB storage",
        ];

  return (
    <div
      className={cn(
        "rounded-lg p-4 transition-all hover:shadow-lg",
        label !== current
          ? "bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700"
          : "bg-gradient-to-r from-purple-600 to-blue-600 border border-purple-500/50"
      )}
    >
      <div
        className={cn(
          landing && "radial-gradient",
          "flex flex-col rounded-xl p-5 bg-slate-900/60 backdrop-blur-sm"
        )}
      >
        {landing ? (
          <h2 className="text-2xl font-bold mb-1">
            {label === "VIP" && "Premium Plan"}
            {label === "FREE" && "Standard"}
          </h2>
        ) : (
          <h2 className="text-2xl font-bold mb-1">
            {label === current
              ? "Your Current Plan"
              : current === "VIP"
              ? "Downgrade"
              : "Upgrade"}
          </h2>
        )}
        <p className="text-zinc-400 text-sm mb-4">
          {label === "VIP"
            ? "Advanced features for professionals"
            : "Everything you need to get started"}
        </p>

        {label === "VIP" ? (
          <span className="bg-gradient-to-r text-3xl from-purple-500 via-blue-500 to-indigo-500 font-bold bg-clip-text text-transparent">
            Chat GPT
          </span>
        ) : (
          <p className="font-bold mt-2 text-zinc-300">Standard</p>
        )}

        {label === "VIP" ? (
          <p className="mb-4">
            <b className="text-xl">$99.99</b>
            <span className="text-zinc-400 text-sm">/month</span>
          </p>
        ) : (
          <p className="text-xl mb-4">Free</p>
        )}

        <div className="space-y-2 mt-2">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-2">
              <div
                className={cn(
                  "rounded-full p-1",
                  label === "VIP" ? "bg-purple-500/20" : "bg-zinc-700/20"
                )}
              >
                <Check
                  size={12}
                  className={
                    label === "VIP" ? "text-purple-400" : "text-zinc-400"
                  }
                />
              </div>
              <p className="text-sm text-zinc-300">{feature}</p>
            </div>
          ))}
        </div>
        {landing ? (
          <Button
            className={cn(
              "rounded-full mt-5",
              label === "VIP"
                ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
                : "bg-background-80 text-white hover:text-background-80"
            )}
          >
            {label === current
              ? "Get Started"
              : current === "VIP"
              ? "Free"
              : "Get Started"}
          </Button>
        ) : (
          <Button
            className="rounded-full mt-5 bg-background-80 text-white hover:text-background-80"
            disabled={label === current}
          >
            {label === current
              ? "Active"
              : current === "VIP"
              ? "Downgrade"
              : "Upgrade"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default PaymentCard;
