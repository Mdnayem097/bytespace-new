import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";

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
    </>
  );
}