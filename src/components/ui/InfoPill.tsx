import type { LucideIcon } from "lucide-react";

type InfoPillProps = {
  icon: LucideIcon;
  label: string;
};

export default function InfoPill({ icon: Icon, label }: InfoPillProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-gray-50 px-4 py-2 text-xs font-medium text-gray-950">
      <Icon size={14} className="text-blue-800" aria-hidden="true" />
      {label}
    </span>
  );
}