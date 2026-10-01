import { Star } from "lucide-react";
import ProgressBar from "@/components/ui/ProgressBar";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { courseDetail } from "@/data/courseDetail";

export default function CourseReviews() {
    return (
        <section className="space-y-8">
            <div className="mt-10">
                <h2 className="text-xl font-semibold text-gray-950">
                    What Learners Are Saying
                </h2>
                <p className="mt-2 text-sm text-gray-950/80">
                    Discover what our learners have to say about their experience with 'Build Digital Assets: A Comprehensive Guide.' Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
                </p>
            </div>
            {/* Review Summary */}
            <div className="rounded-2xl bg-gray-50 p-6">
                <div className="grid gap-8 md:grid-cols-[180px_1fr] md:items-center">
                    {/* Overall Rating */}
                    <div className="text-center md:border-r md:border-gray-200">
                        <p className="text-5xl font-bold text-gray-950">
                            {courseDetail.rating}
                        </p>

                        <div className="mt-2 flex justify-center gap-1">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <Star
                                    key={index}
                                    size={16}
                                    className="fill-yellow-400 text-yellow-400"
                                />
                            ))}
                        </div>

                        <p className="mt-2 text-sm text-gray-400">
                            {courseDetail.reviews} reviews
                        </p>
                    </div>

                    {/* Rating Breakdown */}
                    <div className="space-y-3">
                        {courseDetail.ratingBreakdown.map((item) => (
                            <div
                                key={item.stars}
                                className="flex items-center gap-3"
                            >
                                <span className="w-8 text-sm font-medium text-gray-600">
                                    {item.stars}
                                </span>

                                <Star
                                    size={14}
                                    className="fill-yellow-400 text-yellow-400"
                                />

                                <div className="flex-1">
                                    <ProgressBar value={item.percentage} />
                                </div>

                                <span className="w-10 text-right text-xs text-gray-400">
                                    {item.percentage}%
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Individual Reviews */}
            <div>
                <div className="mb-5 flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-950">
                        Individual Reviews
                    </h3>

                    <button
                        type="button"
                        className="text-sm font-medium text-gray-500 hover:text-gray-950"
                    >
                        All Reviews
                    </button>
                </div>

                <div className="space-y-4">
                    {courseDetail.reviewsData.map((review) => (
                        <TestimonialCard
                            key={review.id}
                            testimonial={{
                                id: review.id,
                                name: review.name,
                                role: review.role,
                                avatar: review.avatar,
                                quote: review.quote,
                            }}
                            rating={review.rating}
                            date={review.date}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}