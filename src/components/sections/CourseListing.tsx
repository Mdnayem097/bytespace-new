import CategoryTabs from "@/components/ui/CategoryTabs";
import Container from "@/components/ui/Container";
import CourseCard from "@/components/ui/CourseCard";
import FilterBar from "@/components/ui/FilterBar";
import Pagination from "@/components/ui/Pagination";
import { courseListing } from "@/data/courses";
import { listingCategories } from "@/data/courseFilters";

export default function CourseListing() {
  return (
    <section className="bg-white px-4 py-10 sm:px-10 md:py-12 lg:px-20">
      <Container>
        <FilterBar />
        <CategoryTabs categories={listingCategories} scroll />

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courseListing.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <Pagination totalPages={5} />
      </Container>
    </section>
  );
}