import AvatarGroup from "@/components/ui/AvatarGroup";
import FloatingCard from "@/components/ui/FloatingCard";
import { avatars } from "@/data/avatars";

type HappyStudentsCardProps = {
    className?: string;
};

export default function HappyStudentsCard({ className = "" }: HappyStudentsCardProps) {
    return (
        <FloatingCard className={`w-60 bg-white text-left ${className}`}>
            <p className="text-sm font-semibold">Happy Students</p>
            <p className="mt-0.5 text-xs text-gray-400">
                4.5-5/5 <span className="text-yellow-400">★</span>
            </p>
            <div className="mt-3">
                <AvatarGroup avatars={avatars} countLabel="2K+" />
            </div>
        </FloatingCard>
    );
}