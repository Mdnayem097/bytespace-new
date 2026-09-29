import type { ShapeType } from "@/components/ui/Shape";

type HeroShape = {
    type: ShapeType;
    className: string;
};

export const heroShapes: HeroShape[] = [
    { type: "squiggle", className: "left-[-3%] top-[22%] w-60 text-lime-400" },
    { type: "cylinder", className: "right-[-20%] top-[12%] w-100 text-lime-400" },
    { type: "triangle", className: "right-[5%] top-[38%] w-40 rotate-12 text-gray-50" },
    { type: "ring", className: " bottom-[2%] w-70 z-10 text-gray-50" },
    { type: "squiggle", className: "right-[-5%] bottom-[8%] w-50 z-10 rotate-45 text-gray-50" },
];