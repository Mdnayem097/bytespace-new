import Image from "next/image";
import Container from "@/components/ui/Container";
import FloatingCard from "@/components/ui/FloatingCard";
import SearchBar from "@/components/ui/SearchBar";
import { heroShapes } from "@/data/hero";
import Shape from "../ui/Shape";

export default function Hero() {
    return (
        <section className="relative overflow-hidden pt-10 text-center text-gray-50 md:pt-16">
            {heroShapes.map((shape) => (
                <Shape
                    key={shape.className}
                    type={shape.type}
                    className={`absolute hidden lg:block ${shape.className}`}
                />
            ))}

            <Container className="relative">
                <h1 className="mx-auto max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
                    Get Access to Hundreds Courses Available
                </h1>
                <p className="mx-auto mt-8 max-w-2.5xl text-sm text-gray-100/80">
                    Unlock your creativity, gain valuable knowledge, and grow your business
                    with our wide range of courses.
                </p>
                <SearchBar />
            </Container>

            <div className="relative mx-auto mt-[68px] h-[486px] w-full max-w-3xl">
                <div className="absolute left-1/2 top-0 h-[1149px] w-[1149px] -translate-x-1/2 rounded-full bg-lime-400" />

                <Image
                    src="/images/hero-person.png"
                    alt="Student learning online with a laptop"
                    width={541}
                    height={578}
                    priority
                    className="absolute bottom-0 left-1/2 h-[113%] w-auto -translate-x-1/2 object-contain"
                />

                <FloatingCard className="left-[6%] top-[10%] text-left py-5">
                    <p className="font-semibold">UI/UX Design</p>
                    <p className="text-gray-400">100+ Courses • 1000+ Students</p>
                </FloatingCard>

                <FloatingCard className="right-[6%] top-[15%] w-50 h-30 text-left">
                    <p className="text-gray-400">Learning Progress</p>
                    <p className="text-5xl font-bold py-2">55%</p>
                    <div className="mt-2 h-1.5 w-full rounded-full bg-white">
                        <div className="h-full w-[55%] rounded-full bg-lime-400" />
                    </div>
                </FloatingCard>

                <FloatingCard className="bottom-[15%] left-[2%] w-56 text-left">
                    <p className="text-sm font-semibold">Happy Students</p>
                    <p className="mt-0.5 text-xs text-gray-400">
                        4.5-5/5 <span className="text-yellow-400">★</span>
                    </p>

                    <div className="mt-3 flex items-center">
                        <Image
                            src="/images/profile/avatars1.png"
                            alt="Happy students"
                            width={120}
                            height={28}
                            className="h-7 w-auto rounded-4xl"
                        />
                        <Image
                            src="/images/profile/avatars2.png"
                            alt="Happy students"
                            width={120}
                            height={28}
                            className="-ml-2 h-7 w-auto rounded-4xl"
                        />
                        <Image
                            src="/images/profile/avatars3.png"
                            alt="Happy students"
                            width={120}
                            height={28}
                            className="-ml-2 h-7 w-auto rounded-4xl"
                        />
                        <Image
                            src="/images/profile/avatars4.png"
                            alt="Happy students"
                            width={120}
                            height={28}
                            className="-ml-2 h-7 w-auto rounded-4xl"
                        />
                        <Image
                            src="/images/profile/avatars5.png"
                            alt="Happy students"
                            width={120}
                            height={28}
                            className="-ml-2 h-7 w-auto rounded-4xl"
                        />
                        <span className="-ml-2 rounded-full bg-lime-400 px-2 py-1 text-[10px] font-bold text-gray-950">
                            2K+
                        </span>
                    </div>
                </FloatingCard>
            </div>
        </section>
    );
}