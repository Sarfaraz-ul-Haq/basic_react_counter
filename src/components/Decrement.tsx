"use client";

import { Minus } from "lucide-react";

interface DecrementProps {
  count: number;
  setCount: (count: number) => void;
}
export default function Decrement({ count, setCount }: DecrementProps) {
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <button
      onClick={decrement}
      className="flex rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mr-2"
    >
      <Minus className="h-6 w-6" />
    </button>
  );
}
