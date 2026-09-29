export type ShapeType = "squiggle" | "cylinder" | "triangle" | "ring";

type ShapeProps = {
    type: ShapeType;
    className?: string;
};

export default function Shape({ type, className = "" }: ShapeProps) {
    return (
        <svg
            viewBox="0 0 160 160"
            aria-hidden="true"
            className={`pointer-events-none h-auto drop-shadow-lg ${className}`}
        >
            {type === "squiggle" && (
                <path
                    d="M25 35 C70 10, 110 20, 135 40 C110 60, 50 55, 25 80 C50 100, 110 95, 135 115 C110 140, 60 140, 30 150"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="22"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            )}

            {type === "cylinder" && (
                <g transform="rotate(-25 80 80)">
                    <path d="M35 45 L35 115 A45 18 0 0 0 125 115 L125 45 Z" fill="currentColor" />
                    <ellipse cx="80" cy="45" rx="45" ry="18" fill="currentColor" />
                    <ellipse cx="80" cy="45" rx="45" ry="18" fill="black" opacity="0.15" />
                </g>
            )}

            {type === "triangle" && (
                <polygon
                    points="80,25 140,130 20,130"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="14"
                    strokeLinejoin="round"
                />
            )}

            {type === "ring" && (
                <>
                    <defs>
                        <radialGradient id="ring-body" cx="40%" cy="35%" r="70%">
                            <stop offset="0%" stopColor="#ffffff" />
                            <stop offset="70%" stopColor="#ffffff" />
                            <stop offset="100%" stopColor="#dfe4f2" />
                        </radialGradient>
                        <mask id="ring-hole">
                            <rect width="160" height="160" fill="white" />
                            <ellipse
                                cx="88"
                                cy="76"
                                rx="30"
                                ry="19"
                                transform="rotate(88 76)"
                                fill="black"
                            />
                        </mask>
                    </defs>

                    <ellipse
                        cx="80"
                        cy="80"
                        rx="70"
                        ry="48"
                        transform="rotate(-35 80 82)"
                        fill="url(#ring-body)"
                        mask="url(#ring-hole)"
                    />
                </>
            )}
        </svg>
    );
}