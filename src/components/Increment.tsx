"use client";

import { Plus } from "lucide-react";

interface IncrementProps {
  count: number;
  setCount: (count: number) => void;
}

export default function Increment({ count, setCount }: IncrementProps) {
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <button
      onClick={increment}
      className="rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      <Plus className="h-6 w-6" />
    </button>
  );
}
