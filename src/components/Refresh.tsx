import { RefreshCw } from "lucide-react";

interface RefreshProp {
  reset: () => void;
}

export default function Refresh({ reset }: RefreshProp) {
  return (
    <button
      type="button"
      onClick={reset}
      className="rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      <RefreshCw className="h-4 w-4" />
    </button>
  );
}
