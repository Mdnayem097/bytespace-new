import FloatingCard from "@/components/ui/FloatingCard";

type ProgressCardProps = {
    className?: string;
};

export default function ProgressCard({ className = "" }: ProgressCardProps) {
    return (
        <FloatingCard className={`h-32 w-50 bg-white text-left ${className}`}>
            <div className="flex h-full flex-col justify-center gap-y-2">
                <p className="text-gray-900">Learning Progress</p>
                <p className="text-3xl font-bold">55%</p>
                <div className="mt-2 h-1.5 rounded-full bg-gray-100">
                    <div className="h-full w-[55%] rounded-full bg-lime-400" />
                </div>
            </div>
        </FloatingCard>
    );
}