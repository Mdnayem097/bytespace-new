import { Award, FolderOpen, MessageSquare, Video } from "lucide-react";

export const courseDetail = {
  tagline: "Unlock the Power of Digital Creation with Expert Guidance",
  level: "Intermediate",
  rating: 4.8,
  reviews: 172,
  students: 199,
  preview: "/images/course-detail/preview.jpg",

  totalLessons: 112,
  totalHours: 24,
  moreVideos: 99,
  lessons: [
    { number: "01", title: "Introduction to Digital Assets", duration: "12 mins" },
    { number: "02", title: "Design Principles for Impacts", duration: "21 mins" },
    { number: "03", title: "Advanced Techniques in Digital Creation", duration: "16 mins" },
  ],
  cta: "Ready to Dive In? Enroll Now and Start Building Your Digital Future!",
  includes: [
    { label: "Learning Resources", icon: FolderOpen },
    { label: "Quality Lesson Videos", icon: Video },
    { label: "Certificate of Completion", icon: Award },
    { label: "Private Consultation", icon: MessageSquare },
  ],
  creator: {
    name: "PurePearl Studio",
    role: "Professional Creator",
    avatar: "/images/course-detail/creator.jpg",
  },

  tabs: ["About", "Lessons", "Reviews"],
  description: [
    'Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.',
    "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
    "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
  ],
  sneakPeek: [1, 2, 3, 4].map((n) => `/images/course-detail/sneak-${n}.jpg`),
  keyPoints: [
    "Foundational Concepts",
    "Design Principles Mastery",
    "Advanced Techniques in Digital Creation",
    "Project Showcase and Critique",
    "Optimizing for Various Platforms",
    "Digital Asset Management Best Practices",
    "Monetization Strategies",
    "Capstone Project: Building Your Portfolio",
  ],
};