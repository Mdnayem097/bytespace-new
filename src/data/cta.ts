import type { ShapeType } from "@/components/ui/Shape";

type CtaShape = {
    type: ShapeType;
    className: string;
};

export const ctaShapes: CtaShape[] = [
    { type: "squiggle", className: "left-[14%] top-[8%] w-34 text-gray-50" },
    { type: "cone", className: "left-[-4%] top-[35%] w-48 -rotate-12 text-gray-50" },
    { type: "ring", className: "-bottom-20 left-[4%] w-72 text-lime-400" },
    { type: "triangle", className: "right-[12%] top-[6%] w-42 rotate-12 text-lime-400" },
    { type: "cylinder", className: "right-[-18%] top-[5%] w-94 text-gray-50" },
    { type: "squiggle", className: "-bottom-8 right-[0%] w-50 -rotate-25 text-lime-400" },
];