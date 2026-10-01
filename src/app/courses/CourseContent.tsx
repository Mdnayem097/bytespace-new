import CategoryTabs from "@/components/ui/CategoryTabs";
import Container from "@/components/ui/Container";
import CourseAbout from "@/app/courses/CourseAbout";
import CourseSidebar from "@/app/courses/CourseSidebar";
import { courseDetail } from "@/data/courseDetail";
import type { Course } from "@/data/courses";

type CourseContentProps = {
  course: Course;
};

export default function CourseContent({ course }: CourseContentProps) {
  return (
    <section className="bg-white px-4 pb-16 pt-4 sm:px-10 lg:px-20">
      <Container className="grid gap-8 lg:grid-cols-[1fr_380px]">
        <div>
          <CategoryTabs categories={courseDetail.tabs} scroll />
          <CourseAbout />
        </div>

        <CourseSidebar
          course={course}
          className="order-first self-start lg:order-none lg:-mt-[468px]"
        />
      </Container>
    </section>
  );
}