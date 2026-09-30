import type { LucideIcon } from "lucide-react";

type CategoryCardProps = {
    name: string;
    icon: LucideIcon;
};

export default function CategoryCard({ name, icon: Icon }: CategoryCardProps) {
    return (
        <a
            href="#courses"
            className="flex flex-col items-center gap-3 rounded-3xl border-2 border-gray-100 bg-white px-4 py-8 transition hover:-translate-y-1 hover:shadow-md"
            
        >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-lime-400 text-gray-950">
                <Icon size={30} aria-hidden="true" />
            </span>
            <span className="text-center text-base font-medium text-gray-950">
                {name}
            </span>
        </a>
    );
}