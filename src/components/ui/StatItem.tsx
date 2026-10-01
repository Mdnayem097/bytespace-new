type StatItemProps = {
    value: string;
    label: string;
};

export default function StatItem({ value, label }: StatItemProps) {
    return (
        <div>
            <p className="text-3xl font-semibold text-blue-800 md:text-4xl">{value}</p>
            <p className="mt-2 text-md text-gray-400 md:text-lg">{label}</p>
        </div>
    );
}