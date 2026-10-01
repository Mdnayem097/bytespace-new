import Image from "next/image";
import type { Testimonial } from "@/data/testimonials";

type TestimonialCardProps = {
  testimonial: Testimonial;
  className?: string;
};

export default function TestimonialCard({
  testimonial,
  className = "",
}: TestimonialCardProps) {
  return (
    <figure className={`rounded-2xl bg-white p-6 shadow-sm ${className}`}>
      <Image
        src={testimonial.avatar}
        alt={testimonial.name}
        width={48}
        height={48}
        className="h-12 w-12 rounded-full object-cover"
      />
      <figcaption className="mt-4">
        <p className="text-xl font-bold text-gray-950">{testimonial.name}</p>
        <p className="text-sm text-blue-800">{testimonial.role}</p>
      </figcaption>
      <blockquote className="mt-4 text-sm leading-relaxed text-gray-400">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
    </figure>
  );
}