import { RefreshCw } from "lucide-react";

interface RefreshProp {
  setCount: (value: number) => void;
}

export default function Refresh({ setCount }: RefreshProp) {
  return (
    <button
      onClick={() => setCount(0)}
      className="rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      <RefreshCw className="h-4 w-4" />
    </button>
  );
}
