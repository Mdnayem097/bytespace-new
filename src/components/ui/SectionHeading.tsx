type SectionHeadingProps = {
    title: string;
    subtitle?: string;
    size?: "lg" | "md" | "half" | "cta";
    align?: "center" | "left";
    light?: boolean;
};

const sizes = {
    lg: {
        title: "max-w-2xl text-4xl md:text-5xl lg:text-6xl",
        subtitle: "max-w-3xl",
    },
    md: {
        title: "max-w-5xl text-2xl md:text-3xl lg:text-4xl",
        subtitle: "max-w-4xl text-sm",
    },
    half: {
        title: "text-3xl font-bold md:text-4xl xl:text-[40px]",
        subtitle: "max-w-xl text-base lg:text-lg",
    },
    cta: {
        title: "text-3xl font-semibold md:text-4xl lg:text-5xl",
        subtitle: "max-w-4xl text-base lg:text-md",
    },
};

export default function SectionHeading({
    title,
    subtitle,
    size = "lg",
    align = "center",
    light = false,
}: SectionHeadingProps) {
    const centered = align === "center";

    return (
        <div className={centered ? "text-center" : "text-left"}>
            <h2
                className={`whitespace-pre-line leading-tight ${light ? "text-gray-50" : "text-gray-950"} ${centered ? "mx-auto" : ""} ${sizes[size].title}`}
            >
                {title}
            </h2>
            {subtitle && (
                <p className={`mt-4 ${light ? "text-gray-50/80" : "text-gray-400"} ${centered ? "mx-auto" : ""} ${sizes[size].subtitle}`}>
                    {subtitle}
                </p>
            )}
        </div>
    );
}