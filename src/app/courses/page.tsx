import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import CourseListing from "@/components/sections/CourseListing";
import CoursesHero from "@/components/sections/CoursesHero";

export const metadata: Metadata = {
  title: "Courses | ByteSpace",
};

export default function CoursesPage() {
  return (
    <>
      <div className="bg-blue-800 bg-grid">
        <Navbar />
        <CoursesHero />
      </div>
      <CourseListing />
      <Footer />
    </>
  );
}