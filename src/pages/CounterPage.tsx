import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export default function CounterPage() {
  const [count, setCount] = useState(0);
  const { toast } = useToast();

  const increment = () => {
    setCount(count + 1);
    if (count + 1 === 10) {
      toast({
        title: "Milestone reached!",
        description: "You've reached 10 counts!",
        variant: "default",
      });
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      toast({
        title: "Cannot go below zero",
        description: "The counter cannot be negative",
        variant: "destructive",
      });
    }
  };

  const reset = () => {
    setCount(0);
    toast({
      title: "Counter reset",
      description: "The counter has been reset to zero",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Counter Example</h1>
        <p className="text-gray-600">A simple counter to demonstrate React state management</p>
      </div>

      <div className="flex flex-col items-center space-y-6">
        <div className="bg-white shadow-lg rounded-full w-40 h-40 flex items-center justify-center">
          <span className="text-6xl font-bold text-blue-600">{count}</span>
        </div>

        <div className="flex space-x-4">
          <Button 
            variant="outline"
            onClick={decrement}
            className="px-6"
          >
            -
          </Button>
          <Button 
            variant="default"
            onClick={increment}
            className="px-6 bg-blue-600 hover:bg-blue-700"
          >
            +
          </Button>
        </div>

        <Button 
          variant="ghost" 
          onClick={reset}
          className="mt-4"
        >
          Reset
        </Button>
      </div>
    </div>
  );
}