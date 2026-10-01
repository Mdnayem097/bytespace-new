import Image from "next/image";
import CheckList from "@/components/ui/CheckList";
import { courseDetail } from "@/data/courseDetail";

const headingStyle = "text-lg font-semibold text-gray-950";

export default function CourseAbout() {
  return (
    <div className="mt-8">
      <h2 className={headingStyle}>Description</h2>
      <div className="mt-4 space-y-5 text-sm leading-relaxed text-gray-950/80">
        {courseDetail.description.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>

      <h2 className={`${headingStyle} mt-10`}>Sneak Peak</h2>
      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {courseDetail.sneakPeek.map((src, index) => (
          <div key={src} className="relative aspect-[5/4] overflow-hidden rounded-xl bg-gray-100">
            <Image
              src={src}
              alt={`Course sneak peek ${index + 1}`}
              fill
              sizes="(min-width: 640px) 15vw, 45vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <h2 className={`${headingStyle} mt-10`}>Key Points</h2>
      <div className="mt-4">
        <CheckList items={courseDetail.keyPoints} size="sm" />
      </div>
    </div>
  );
}