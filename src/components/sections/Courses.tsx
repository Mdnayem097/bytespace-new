import Container from "@/components/ui/Container";
import CategoryTabs from "@/components/ui/CategoryTabs";
import CourseCard from "@/components/ui/CourseCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { categories, courses } from "@/data/courses";

export default function Courses() {
    return (
        <section id="courses" className="bg-white py-16 md:py-24">
            <Container>
                <SectionHeading
                    title="Discover Your Passion, Build Your Skills"
                    subtitle="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
                />
                <CategoryTabs categories={categories} />

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {courses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </Container>
        </section>
    );
}