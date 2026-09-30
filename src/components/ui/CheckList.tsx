import { Check } from "lucide-react";

type CheckListProps = {
    items: string[];
};

export default function CheckList({ items }: CheckListProps) {
    return (
        <ul className="space-y-3">
            {items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-950">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-800 text-gray-50">
                        <Check size={12} aria-hidden="true" />
                    </span>
                    {item}
                </li>
            ))}
        </ul>
    );
}