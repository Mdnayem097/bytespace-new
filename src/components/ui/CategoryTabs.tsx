"use client";

import { useState } from "react";

type CategoryTabsProps = {
    categories: string[];
    scroll?: boolean;
    onChange?: (category: string) => void;
};

const layouts = {
    wrap: "mx-auto mt-8 max-w-4xl flex-wrap justify-center",
    scroll: "mt-6 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
};

export default function CategoryTabs({ categories, scroll = false, onChange }: CategoryTabsProps) {
    const [active, setActive] = useState(categories[0]);

    const handleSelect = (category: string) => {
        setActive(category);
        onChange?.(category);
    };

    return (
        <div className={`flex gap-3 ${scroll ? layouts.scroll : layouts.wrap}`}>
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => handleSelect(category)}
                    className={`shrink-0 whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-medium transition ${active === category
                        ? "bg-lime-400 text-gray-950"
                        : "bg-gray-100 text-gray-950 hover:bg-gray-100/60"
                        }`}
                >
                    {category}
                </button>
            ))}
            {!scroll && (
                <button className="px-2 text-xs font-medium text-blue-800">+ More</button>
            )}
        </div>
    );
}