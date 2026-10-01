import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Shape from "@/components/ui/Shape";
import { ctaShapes } from "@/data/cta";

export default function CreatorCta() {
    return (
        <section className="relative overflow-hidden bg-blue-800 bg-grid px-4 py-20 sm:px-10 lg:flex lg:min-h-[488px] lg:items-center lg:px-20 lg:py-0">
            {ctaShapes.map((shape) => (
                <Shape
                    key={shape.className}
                    type={shape.type}
                    className={`absolute hidden md:block ${shape.className}`}
                />
            ))}

            <Container className="relative flex flex-col items-center text-center">
                <SectionHeading
                    light
                    size="cta"
                    title={"Unlock Your Potential as a\nCreator with ByteSpace"}
                    subtitle="Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library."
                />
                <Button className="mt-8 text-xl">Join as Creator</Button>
            </Container>
        </section>
    );
}