import { Search } from "lucide-react";
import Button from "@/components/ui/Button";

export default function SearchBar() {
    return (
        <form className="mx-auto mt-14 flex max-w-lg items-center gap-3">
            <div className="flex flex-1 items-center gap-2 rounded-full bg-gray-100 px-4 py-3.5">
                <Search size={16} className="text-gray-400" />
                <input
                    type="text"
                    placeholder="Course, topic, creator"
                    className="w-full bg-transparent text-sm text-gray-950 outline-none placeholder:text-gray-400"
                />
            </div>
            <Button type="submit" className="py-3">
                Search
            </Button>
        </form>
    );
}