type RevenueCardProps = {
    title: string;
    note: string;
    value: string;
    className?: string;
    children?: React.ReactNode;
};

export default function RevenueCard({ title, note, value, className = "", children }: RevenueCardProps) {
    return (
        <div className={`absolute w-40 rounded-xl bg-blue-800 p-4 text-gray-50 shadow-lg ${className}`}>
            <p className="text-xs">{title}</p>
            <p className="text-[10px] text-gray-50/60">{note}</p>
            <p className="mt-1 text-xl font-bold">{value}</p>
            {children}
        </div>
    );
}