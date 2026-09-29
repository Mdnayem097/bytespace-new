import Image from "next/image";
import { Signal, Star } from "lucide-react";
import AvatarGroup from "@/components/ui/AvatarGroup";
import { avatars } from "@/data/avatars";
import type { Course } from "@/data/courses";

type CourseCardProps = {
    course: Course;
};

export default function CourseCard({ course }: CourseCardProps) {
    const badges = [
        `${course.lessons} Lessons`,
        course.duration,
        `${course.comments} Comments`,
    ];

    return (
        <article className="rounded-2xl bg-white border-gray-200 border-2 border-solid p-3">
            <div className="relative aspect-[8/5] overflow-hidden rounded-xl">
                <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                />
                <div className="absolute inset-x-2 bottom-2 flex flex-wrap gap-1.5">
                    {badges.map((badge) => (
                        <span
                            key={badge}
                            className="rounded-full bg-gray-100/80 px-2 py-1 text-[10px] text-gray-950 backdrop-blur"
                        >
                            {badge}
                        </span>
                    ))}
                </div>
            </div>

            <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                    <h3 className="line-clamp-1 text-base font-semibold text-gray-950">
                        {course.title}
                    </h3>
                    <p className="mt-1 text-xs text-gray-400">
                        by <span className="text-blue-800">{course.instructor}</span>
                    </p>
                </div>
                <p className="flex items-center gap-1 text-sm text-gray-950">
                    {course.rating}
                    <Star size={14} className="text-gray-400" aria-hidden="true" />
                </p>
            </div>

            <div className="mt-4 flex items-center justify-between">
                <span className="flex items-center gap-1.5 rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-950">
                    <Signal size={12} aria-hidden="true" />
                    {course.level}
                </span>
                <AvatarGroup avatars={avatars.slice(0, 4)} countLabel="20+" />
            </div>

            <p className="mt-4 text-lg font-bold text-blue-800">
                ${course.price}
                <span className="ml-1 text-xs font-normal text-gray-400">/lifetime</span>
            </p>
        </article>
    );
}