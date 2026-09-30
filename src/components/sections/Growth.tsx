import Image from "next/image";
import CourseCard from "@/components/ui/CourseCard";
import Container from "@/components/ui/Container";
import ProgressCard from "@/components/ui/ProgressCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Shape from "@/components/ui/Shape";
import StatItem from "@/components/ui/StatItem";
import { courses } from "@/data/courses";
import { stats } from "@/data/growth";

export default function Growth() {
  return (
    <section className="px-4 py-16 sm:px-10 md:py-24 lg:px-20">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <SectionHeading
            align="left"
            size="half"
            title="Your Path to Professional Growth Starts Here!"
            subtitle="Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need."
          />
          <div className="mt-8 flex gap-20">
            {stats.map((stat) => (
              <StatItem key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>

        <div className="relative mx-auto h-[420px] w-full max-w-xl sm:h-[540px] sm:max-w-2xl">
          <div className="absolute left-0 top-5 w-64 sm:w-[350px]">
            <CourseCard course={courses[0]} />
          </div>

          <Image
            src="/images/hero-person.png"
            alt="Student smiling with a laptop"
            width={440}
            height={500}
            className="absolute bottom-0 left-10 h-[360px] w-auto max-w-none sm:h-[520px] [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]"
          />

          <ProgressCard className="left-95 top-[39%]" />
          <Shape type="squiggle" className="absolute left-110 top-20 w-30 text-lime-400 sm:w-38" />
        </div>
      </Container>
    </section>
  );
}