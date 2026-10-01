import { Check } from "lucide-react";

type CheckListProps = {
    items: string[];
    size?: "md" | "sm";
};

const sizes = {
    md: { list: "space-y-4", item: "gap-4 text-lg md:text-xl", circle: "h-7 w-7", icon: 16 },
    sm: { list: "space-y-3", item: "gap-3 text-sm", circle: "h-5 w-5", icon: 12 },
};

export default function CheckList({ items, size = "md" }: CheckListProps) {
    const s = sizes[size];

    return (
        <ul className={s.list}>
            {items.map((item) => (
                <li key={item} className={`flex items-center text-gray-950 ${s.item}`}>
                    <span className={`flex shrink-0 items-center justify-center rounded-full bg-blue-800 text-gray-50 ${s.circle}`}>
                        <Check size={s.icon} aria-hidden="true" />
                    </span>
                    {item}
                </li>
            ))}
        </ul>
    );
}