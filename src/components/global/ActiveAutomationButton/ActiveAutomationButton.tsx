import { Button } from "@/components/ui/button";
import { ActivitySquare, Loader2 } from "lucide-react";

type Props = {
  id: string;
};

function ActiveAutomationButton({ id }: Props) {
  return (
    <Button className="lg:px-10 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70] ml-4">
      <ActivitySquare />
      <p className="lg:inline hidden">Activate</p>
    </Button>
  );
}

export default ActiveAutomationButton;
