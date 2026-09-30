import {
    Building2,
    Camera,
    Code,
    Laptop,
    Megaphone,
    PenTool,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type LearningPath = {
    name: string;
    icon: LucideIcon;
};

export const learningPaths: LearningPath[] = [
    { name: "Design", icon: PenTool },
    { name: "Development", icon: Code },
    { name: "IT & Software", icon: Laptop },
    { name: "Business", icon: Building2 },
    { name: "Marketing", icon: Megaphone },
    { name: "Photography", icon: Camera },
];