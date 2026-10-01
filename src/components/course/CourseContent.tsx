import CourseSidebar from "@/components/course/CourseSidebar";
import CourseTabs from "@/components/course/CourseTabs";
import Container from "@/components/ui/Container";
import type { Course } from "@/data/courses";

type CourseContentProps = {
  course: Course;
};

export default function CourseContent({ course }: CourseContentProps) {
  return (
    <section className="bg-white px-4 pb-16 pt-4 sm:px-10 lg:px-20">
      <Container className="grid gap-8 lg:grid-cols-[1fr_380px]">
        <CourseTabs />

        <CourseSidebar
          course={course}
          className="order-first self-start lg:order-none lg:-mt-[468px]"
        />
      </Container>
    </section>
  );
}