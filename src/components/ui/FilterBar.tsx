import { ChevronDown } from "lucide-react";
import { courseFilters, sortLabel } from "@/data/courseFilters";

const buttonStyle =
  "flex items-center gap-2 rounded-lg border-2 border-gray-100 px-3.5 py-2 text-sm text-gray-950 transition hover:border-blue-800";

export default function FilterBar() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div className="flex flex-wrap items-center gap-3">
        {courseFilters.map(({ label, icon: Icon }) => (
          <button key={label} className={buttonStyle}>
            <Icon size={16} aria-hidden="true" />
            {label}
          </button>
        ))}
      </div>

      <button className={buttonStyle}>
        {sortLabel}
        <ChevronDown size={16} aria-hidden="true" />
      </button>
    </div>
  );
}