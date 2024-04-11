"use client";

import { useState } from "react";
import Increment from "@/components/Increment";
import Decrement from "@/components/Decrement";
import Refresh from "@/components/Refresh";

export default function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-600">
      <div className="text-4xl mb-8 font-bold">
        <div className="border-4 border-black rounded-md p-4">
          Basic React Counter
        </div>
      </div>
      <div className="border-2 border-black rounded-md p-2 mb-4">
        <div className="text-2xl font-bold">{count}</div>
      </div>
      <div className="flex items-center mb-4">
        <Increment count={count} setCount={setCount} />
        <div className="mx-2"></div>
        <Refresh reset={() => setCount(0)} />
        <div className="mx-2"></div>
        <Decrement count={count} setCount={setCount} />
      </div>
    </div>
  );
}
