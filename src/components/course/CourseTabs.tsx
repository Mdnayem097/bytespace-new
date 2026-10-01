"use client";

import { useState } from "react";
import CourseAbout from "@/components/course/CourseAbout";
import CourseLessons from "@/components/course/CourseLessons";
import CourseReviews from "@/components/course/CourseReviews";
import CategoryTabs from "@/components/ui/CategoryTabs";
import { courseDetail } from "@/data/courseDetail";

const panels: Record<string, React.ReactNode> = {
    About: <CourseAbout />,
    Lesson: <CourseLessons />,
    Reviews: <CourseReviews />,
};

export default function CourseTabs() {
    const [tab, setTab] = useState(courseDetail.tabs[0]);

    return (
        <div>
            <CategoryTabs
                categories={courseDetail.tabs}
                scroll
                onChange={setTab}
            />

            {panels[tab]}
        </div>
    );
}