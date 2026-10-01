import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import CourseContent from "@/components/course/CourseContent";
import CourseHero from "@/components/course/CourseHero";
import { courseListing } from "@/data/courses";

type PageProps = {
  params: Promise<{ id: string }>;
};

function findCourse(id: string) {
  return courseListing.find((course) => String(course.id) === id);
}

export function generateStaticParams() {
  return courseListing.map((course) => ({ id: String(course.id) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const course = findCourse(id);

  return { title: course ? `${course.title} | ByteSpace` : "Course | ByteSpace" };
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { id } = await params;
  const course = findCourse(id);

  if (!course) notFound();

  return (
    <>
      <div className="bg-blue-800 bg-grid">
        <Navbar />
        <CourseHero course={course} />
      </div>
      <CourseContent course={course} />
      <Footer />
    </>
  );
}