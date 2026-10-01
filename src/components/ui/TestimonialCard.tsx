import Image from "next/image";
import { Star } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

type TestimonialCardProps = {
  testimonial: Testimonial;
  className?: string;
  rating?: number;
  date?: string;
};

export default function TestimonialCard({
  testimonial,
  className = "",
  rating,
  date,
}: TestimonialCardProps) {
  return (
    <figure
      className={`rounded-2xl bg-white p-5 shadow-sm ${className}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          />

          <figcaption>
            <p className="text-sm font-semibold text-gray-950">
              {testimonial.name}
            </p>

            <p className="text-xs text-gray-400">
              {testimonial.role}
            </p>
          </figcaption>
        </div>

        {date && (
          <span className="text-xs text-gray-400">
            {date}
          </span>
        )}
      </div>

      {rating && (
        <div className="mt-3 flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              size={14}
              className={
                index < rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-200"
              }
            />
          ))}
        </div>
      )}

      <blockquote className="mt-3 text-sm leading-relaxed text-gray-500">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
    </figure>
  );
}