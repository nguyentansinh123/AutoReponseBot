"use client";

import React, { useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCreateAutomation } from '@/hooks/useAutomation';
import { v4 } from 'uuid';

type Props = {
  onClick?: () => void;
  className?: string;
}

const CreateAutomationButton = ({ onClick, className }: Props) => {

  const mutationId = useMemo(()=>v4(),[])
  const {isPending, mutate} = useCreateAutomation(mutationId)

  console.log(mutationId)

  return (
    <Button 
      onClick={()=>mutate({name: "No Name Yet", id:mutationId, createdAt: new Date()})}
      className={cn(
        "bg-gradient-to-r from-purple-600 to-blue-600",
        "hover:from-purple-700 hover:to-blue-700",
        "text-white font-medium px-4 py-2 h-10",
        "flex items-center gap-2 transition-all duration-300",
        "shadow-md shadow-purple-900/20",
      )}
    >
      <Plus size={16} className="text-purple-200" />
      <span className="lg:inline hidden">Create an Automation</span>
    </Button>
  );
};

export default CreateAutomationButton;