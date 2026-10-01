import { Globe, Sun, Zap, Gamepad2, Orbit } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Partner = {
    name: string;
    icon: LucideIcon;
};

export const partners: Partner[] = [
    { name: "Logoipsum", icon: Globe },
    { name: "Logoipsum", icon: Sun },
    { name: "Logoipsum", icon: Zap },
    { name: "Logoipsum", icon: Gamepad2 },
    { name: "Logoipsum", icon: Orbit },
];