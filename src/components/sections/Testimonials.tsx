import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-testimonials px-4 py-16 sm:px-10 md:py-24 lg:px-20">
      <Container>
        <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            align="left"
            size="cta"
            title={"Discover What Our\nCommunity Is Saying"}
          />
          <p className="text-md text-gray-400">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <TestimonialCard
              key={item.id}
              testimonial={item}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}