import Image from "next/image";
import { Play } from "lucide-react";

type CoursePreviewProps = {
  image: string;
  title: string;
};

export default function CoursePreview({ image, title }: CoursePreviewProps) {
  return (
    <div className="relative h-[240px] overflow-hidden rounded-2xl bg-gray-100 sm:h-[340px] lg:h-[420px]">
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="(min-width: 1024px) 60vw, 100vw"
        className="object-cover"
      />
      <button
        aria-label="Play course preview"
        className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gray-950/60 text-gray-50 backdrop-blur transition hover:bg-gray-950/80"
      >
        <Play size={22} fill="currentColor" aria-hidden="true" />
      </button>
    </div>
  );
}