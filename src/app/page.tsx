import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import Courses from "@/components/sections/Courses";
import LearningPaths from "@/components/sections/LearningPaths";
import Growth from "@/components/sections/Growth";
import CreateCourses from "@/components/sections/CreateCourses";
import CreatorCta from "@/components/sections/CreatorCta";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <div className="bg-blue-800 bg-grid">
        <Navbar />
        <main>
          <Hero />
        </main>
      </div>
      <Partners />
      <Courses />
      <LearningPaths />
      <div className="bg-soft">
        <Growth />
        <CreateCourses />
      </div>
      <CreatorCta />
      <Testimonials />
      <Footer />
    </>
  );
}