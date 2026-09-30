import CategoryCard from "@/components/ui/CategoryCard";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { learningPaths } from "@/data/learningPaths";

export default function LearningPaths() {
    return (
        <section className="bg-white px-4 pb-12 sm:px-10 md:pb-20 lg:px-20">
            <Container>
                <SectionHeading
                    size="md"
                    title="Explore Diverse Learning Paths at Bytespace"
                    subtitle="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
                />

                <div className="mt-15 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                    {learningPaths.map((path) => (
                        <CategoryCard key={path.name} name={path.name} icon={path.icon} />
                    ))}
                </div>
            </Container>
        </section>
    );
}