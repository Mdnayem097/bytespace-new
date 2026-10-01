import { LayoutGrid, Signal, SlidersHorizontal } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type CourseFilter = {
  label: string;
  icon: LucideIcon;
};

export const courseFilters: CourseFilter[] = [
  { label: "Filter", icon: SlidersHorizontal },
  { label: "Level", icon: Signal },
  { label: "Category", icon: LayoutGrid },
];

export const sortLabel = "Most relevant";

export const listingCategories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];