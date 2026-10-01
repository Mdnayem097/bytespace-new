import { Video } from "lucide-react";
import ProgressBar from "@/components/ui/ProgressBar";
import { lessonTab } from "@/data/courseLessons";

const headingStyle = "text-lg font-semibold text-gray-950";
const textStyle = "mt-3 text-sm leading-relaxed text-gray-950/80";

export default function CourseLessons() {
    const t = lessonTab;

    return (
        <div className="mt-8">
            <h2 className={headingStyle}>{t.modulesTitle}</h2>
            <p className={textStyle}>{t.modulesIntro}</p>

            <h2 className={`${headingStyle} mt-8`}>{t.listTitle}</h2>
            <ul className="mt-4 space-y-5">
                {t.modules.map((module) => (
                    <li key={module.title} className="flex gap-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-lime-400 text-gray-950">
                            <Video size={18} aria-hidden="true" />
                        </span>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-950">{module.title}</h3>
                            <p className="mt-1 text-sm leading-relaxed text-gray-950/80">
                                {module.description}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>

            <h2 className={`${headingStyle} mt-8`}>{t.contentTitle}</h2>
            <p className={textStyle}>{t.contentText}</p>

            <h2 className={`${headingStyle} mt-8`}>{t.progressTitle}</h2>
            <p className={textStyle}>{t.progressText}</p>

            <div className="mt-5 rounded-xl border-2 border-gray-100 p-5">
                <p className="text-xs text-gray-400">{t.progressLabel}</p>
                <p className="mt-1 text-3xl font-bold text-gray-950">{t.progressValue}%</p>
                <div className="mt-3">
                    <ProgressBar value={t.progressValue} />
                </div>
            </div>
        </div>
    );
}