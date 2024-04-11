"use client";

import { Minus, RefreshCw } from "lucide-react";

interface DecrementProps {
  count: number;
  setCount: (value: number) => void;
}
export default function Decrement({ count, setCount }: DecrementProps) {
  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <button
      type="button"
      onClick={decrement}
      className="flex rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mr-2"
    >
      <Minus className="h-4 w-4" />
    </button>
  );
}
