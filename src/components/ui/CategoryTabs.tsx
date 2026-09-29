"use client";

import { useState } from "react";

type CategoryTabsProps = {
    categories: string[];
};

export default function CategoryTabs({ categories }: CategoryTabsProps) {
    const [active, setActive] = useState(categories[0]);

    return (
        <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => setActive(category)}
                    className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${active === category
                            ? "bg-lime-400 text-gray-950"
                            : "bg-gray-100 text-gray-950 hover:bg-gray-100/60"
                        }`}
                >
                    {category}
                </button>
            ))}
            <button className="px-2 text-xs font-medium text-blue-800">+ More</button>
        </div>
    );
}