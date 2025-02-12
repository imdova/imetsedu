import { Laptop, Smartphone, Tablet } from "lucide-react";

interface ViewModeSelectorProps {
  viewMode: "desktop" | "tablet" | "mobile";
  onViewModeChange: (mode: "desktop" | "tablet" | "mobile") => void;
}

export function ViewModeSelector({
  viewMode,
  onViewModeChange,
}: ViewModeSelectorProps) {
  return (
    <div className="flex gap-2">
      {[
        { mode: "desktop", icon: Laptop },
        { mode: "tablet", icon: Tablet },
        { mode: "mobile", icon: Smartphone },
      ].map(({ mode, icon: Icon }) => (
        <button
          key={mode}
          onClick={() =>
            onViewModeChange(mode as "desktop" | "tablet" | "mobile")
          }
          className={`rounded-full p-2 transition-colors hover:bg-red-100 hover:text-red-500 ${
            viewMode === mode ? "bg-light-primary text-white" : ""
          }`}
        >
          <Icon className="h-4 w-4" />
        </button>
      ))}
    </div>
  );
}
