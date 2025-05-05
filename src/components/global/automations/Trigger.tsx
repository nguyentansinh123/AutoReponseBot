"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type Props = {
  id: string;
};

function Trigger({ id }: Props) {
  return (
      <div className="flex flex-col gap-y-2">
          <div>
            <div className="flex gap-x-2 items-center">
              <p className="font-bold"></p>
            </div>
            <p className="text-sm font-light"></p>
          </div>
        <Button
          className="bg-gradient-to-br from-[#3352CC] font-medium text-white to-[#1C2D70]"
        >
        </Button>
      </div>
  );
}

export default Trigger;
