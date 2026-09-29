type SectionHeadingProps = {
    title: string;
    subtitle?: string;
};

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
    return (
        <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-gray-950 md:text-4xl">{title}</h2>
            {subtitle && <p className="mt-3 text-gray-400">{subtitle}</p>}
        </div>
    );
}