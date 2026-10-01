import { ChevronDown, Search } from "lucide-react";
import Button from "@/components/ui/Button";

type SearchBarProps = {
    variant?: "default" | "courses";
};

export default function SearchBar({ variant = "default" }: SearchBarProps) {
    const isCourses = variant === "courses";

    return (
        <form className="mx-auto mt-14 flex max-w-lg items-center gap-3">
            <div
                className={`flex flex-1 items-center gap-2 rounded-full px-4 py-3.5 ${isCourses ? "bg-gray-50" : "bg-gray-100"}`}
            >
                <Search size={16} className="text-gray-400" aria-hidden="true" />
                <input
                    type="text"
                    placeholder={isCourses ? "Search" : "Course, topic, creator"}
                    aria-label="Search courses"
                    className="w-full bg-transparent text-sm text-gray-950 outline-none placeholder:text-gray-400"
                />
            </div>
            <Button type="submit" className="flex items-center gap-2 py-3">
                {isCourses ? "Courses" : "Search"}
                {isCourses && <ChevronDown size={14} aria-hidden="true" />}
            </Button>
        </form>
    );
}