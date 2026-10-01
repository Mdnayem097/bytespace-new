import { Share2, Signal, Star, Users } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import InfoPill from "@/components/ui/InfoPill";
import CoursePreview from "@/components/course/CoursePreview";
import { courseDetail } from "@/data/courseDetail";
import type { Course } from "@/data/courses";

type CourseHeroProps = {
  course: Course;
};

export default function CourseHero({ course }: CourseHeroProps) {
  const pills = [
    { icon: Signal, label: courseDetail.level },
    { icon: Star, label: `${courseDetail.rating} (${courseDetail.reviews} reviews)` },
    { icon: Users, label: `${courseDetail.students} Students` },
  ];

  return (
    <section className="px-4 pb-8 pt-8 text-gray-50 sm:px-10 lg:px-20">
      <Container>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">
              {course.title}: A Comprehensive Guide
            </h1>
            <p className="mt-2 font-medium">{courseDetail.tagline}</p>
            <p className="mt-4 text-sm">
              by <span className="text-lime-400">{course.instructor}</span>
            </p>
          </div>

          <Button className="flex items-center gap-2">
            <Share2 size={14} aria-hidden="true" />
            Share
          </Button>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {pills.map((pill) => (
            <InfoPill key={pill.label} icon={pill.icon} label={pill.label} />
          ))}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_380px]">
          <CoursePreview image={courseDetail.preview} title={course.title} />
        </div>
      </Container>
    </section>
  );
}