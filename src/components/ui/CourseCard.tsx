import Image from "next/image";
import Link from "next/link";
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
        <Link
            href={`/courses/${course.id}`}
            className="block rounded-2xl transition hover:-translate-y-1 hover:shadow-md"
        >
            <article className="rounded-2xl border-2 border-gray-100 bg-white p-4">
                <div className="relative aspect-[8/5] overflow-hidden rounded-xl">
                    <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                    />
                    <div className="absolute inset-x-3 bottom-3 flex flex-wrap gap-2">
                        {badges.map((badge) => (
                            <span
                                key={badge}
                                className="rounded-full bg-gray-100/80 px-3 py-1.5 text-sm text-gray-950 backdrop-blur"
                            >
                                {badge}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-5 flex items-start justify-between gap-3">
                    <div>
                        <h3 className="line-clamp-1 text-2xl font-semibold text-gray-950">
                            {course.title}
                        </h3>
                        <p className="mt-1.5 text-base text-gray-400">
                            by <span className="text-blue-800">{course.instructor}</span>
                        </p>
                    </div>
                    <p className="flex items-center gap-1.5 text-xl text-gray-950">
                        {course.rating}
                        <Star size={26} className="text-gray-400" aria-hidden="true" />
                    </p>
                </div>

                <div className="mt-5 flex items-center justify-between">
                    <span className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-base text-gray-950">
                        <Signal size={20} aria-hidden="true" />
                        {course.level}
                    </span>
                    <AvatarGroup avatars={avatars.slice(0, 4)} countLabel="20+" size={44} />
                </div>

                <p className="mt-5 text-3xl font-bold text-blue-800">
                    ${course.price}
                    <span className="ml-1 text-base font-normal text-gray-400">/lifetime</span>
                </p>
            </article>
        </Link>
    );
}