type FloatingCardProps = {
    children: React.ReactNode;
    className?: string;
};

export default function FloatingCard({ children, className = "" }: FloatingCardProps) {
    return (
        <div
            className={`absolute hidden rounded-xl bg-gray-100/90 p-3 text-xs text-gray-950 shadow-lg backdrop-blur md:block ${className}`}
        >
            {children}
        </div>
    );
}