type SectionHeadingProps = {
    title: string;
    subtitle?: string;
};

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
    return (
        <div className="mx-auto text-center">
            <h2 className="mx-auto max-w-xl text-4xl font-semibold leading-tight text-gray-950 md:text-5xl lg:text-5xl">
                {title}
            </h2>
            {subtitle && (
                <p className="mx-auto mt-4 max-w-3xl text-gray-400">{subtitle}</p>
            )}
        </div>
    );
}