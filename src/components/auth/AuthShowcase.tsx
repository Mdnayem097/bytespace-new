import AvatarGroup from "@/components/ui/AvatarGroup";
import CourseCard from "@/components/ui/CourseCard";
import Shape from "@/components/ui/Shape";
import { avatars } from "@/data/avatars";
import { courses } from "@/data/courses";

export default function AuthShowcase() {
    return (
        <div className="relative mt-8 hidden h-[420px] w-full md:block lg:mb-4 lg:mt-6 lg:min-h-[420px] lg:flex-1">
            {/* Back Course Card */}
            <div className="absolute left-[6%] top-[20%] z-0 w-[38%]">
                <CourseCard course={courses[1]} />
            </div>

            {/* Front Course Card */}
            <div className="absolute left-[25%] top-[5%] z-10 w-[45%]">
                <CourseCard course={courses[2]} />
            </div>

            {/* Ring */}
            <Shape
                type="ring"
                className="absolute left-[7%] top-[3%] z-20 w-26 rotate-[8deg] text-lime-400"
            />

            {/* Triangle */}
            <Shape
                type="triangle"
                className="absolute bottom-[0%] left-[10%] z-10 w-20 -rotate-[8deg] text-lime-400"
            />

            {/* Squiggle */}
            <Shape
                type="squiggle"
                className="absolute bottom-[19%] right-[25%] z-20 w-16 rotate-[8deg] text-gray-50"
            />

            {/* Happy Students */}
            <div className="absolute left-[34%] top-[75%] z-30 w-48 rounded-xl bg-lime-400 p-3 text-xs text-gray-950 shadow-lg">
                <p className="text-sm font-semibold">Happy Students</p>

                <p className="mt-0.5">
                    4.5-5/5 <span className="text-gray-950">★</span>
                </p>

                <div className="mt-3 flex items-center gap-2">
                    <AvatarGroup avatars={avatars} />

                    <span className="rounded-full bg-gray-50 px-2.5 py-1.5 text-xs font-bold">
                        2K+
                    </span>
                </div>
            </div>
        </div>
    );
}