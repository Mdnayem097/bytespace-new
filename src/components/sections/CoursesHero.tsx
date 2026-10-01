import Container from "@/components/ui/Container";
import SearchBar from "@/components/ui/SearchBar";

export default function CoursesHero() {
    return (
        <section className="px-4 pb-14 pt-10 text-center text-gray-50 sm:px-10 md:pb-16 md:pt-14 lg:px-20">
            <Container>
                <h1 className="text-3xl font-semibold md:text-4xl">
                    Find Your Next Course
                </h1>
                <SearchBar variant="courses" />
            </Container>
        </section>
    );
}