import type { LucideIcon } from "lucide-react";

type PartnerLogoProps = {
    name: string;
    icon: LucideIcon;
};

export default function PartnerLogo({ name, icon: Icon }: PartnerLogoProps) {
    return (
        <div className="flex items-center gap-2 text-gray-400">
            <Icon size={28} aria-hidden="true" />
            <span className="text-base font-semibold">{name}</span>
        </div>
    );
}