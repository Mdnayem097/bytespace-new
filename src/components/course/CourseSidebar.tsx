import Image from "next/image";
import Button from "@/components/ui/Button";
import { courseDetail } from "@/data/courseDetail";
import type { Course } from "@/data/courses";

type CourseSidebarProps = {
  course: Course;
  className?: string;
};

export default function CourseSidebar({ course, className = "" }: CourseSidebarProps) {
  const d = courseDetail;

  return (
    <aside
      className={`relative z-10 rounded-2xl border border-gray-100 bg-white p-6 text-gray-950 shadow-xl ${className}`}
    >
      <h2 className="font-semibold">
        {d.totalLessons} Lessons ({d.totalHours} hours)
      </h2>

      <ul className="mt-4 space-y-3 text-sm">
        {d.lessons.map((lesson) => (
          <li key={lesson.number} className="flex items-start justify-between gap-4">
            <span>
              <span className="mr-3">{lesson.number}</span>
              {lesson.title}
            </span>
            <span className="shrink-0 text-xs text-blue-800">{lesson.duration}</span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-sm text-gray-400">{d.moreVideos} more videos</p>

      <p className="mt-5 text-sm text-gray-400">{d.cta}</p>
      <p className="mt-5 text-3xl font-bold">
        ${course.price}
        <span className="ml-1 text-sm font-normal text-gray-400">/lifetime</span>
      </p>
      <Button className="mt-4 w-full">Enroll Now</Button>

      <h3 className="mt-6 font-semibold">This course include</h3>
      <ul className="mt-3 space-y-3 text-sm">
        {d.includes.map(({ label, icon: Icon }) => (
          <li key={label} className="flex items-center gap-3">
            <Icon size={16} className="text-blue-800" aria-hidden="true" />
            {label}
          </li>
        ))}
      </ul>

      <div className="mt-6 border-t border-gray-100 pt-6">
        <div className="flex items-center gap-3">
          <Image
            src={d.creator.avatar}
            alt={d.creator.name}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold">{d.creator.name}</p>
            <p className="text-xs text-gray-400">{d.creator.role}</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-400">{d.cta}</p>
        <Button variant="outline" className="mt-4">
          See Full Profile
        </Button>
      </div>
    </aside>
  );
}