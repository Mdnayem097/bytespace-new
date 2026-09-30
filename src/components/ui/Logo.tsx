type LogoProps = {
    className?: string;
    showText?: boolean;
};

export default function Logo({ className = "", showText = true }: LogoProps) {
    return (
        <span className={`inline-flex items-center gap-2 ${className}`}>
            <svg viewBox="0 0 32 32" aria-hidden="true" className="h-7 w-7 text-lime-400">
                <rect x="3" y="2" width="9" height="28" rx="3" fill="currentColor" />
                <circle
                    cx="19"
                    cy="20"
                    r="7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="6"
                />
            </svg>

            {showText && (
                <span className="font-display text-xl font-semibold tracking-tight">
                    ByteSpace
                </span>
            )}
        </span>
    );
}