import Image from "next/image";
import CheckList from "@/components/ui/CheckList";
import Container from "@/components/ui/Container";
import HappyStudentsCard from "@/components/ui/HappyStudentsCard";
import RevenueCard from "@/components/ui/RevenueCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Shape from "@/components/ui/Shape";
import { creatorBenefits } from "@/data/growth";

export default function CreateCourses() {
  return (
    <section className="px-4 pb-16 sm:px-10 md:pb-24 lg:px-20">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
        <div className="relative mx-auto h-[420px] w-full max-w-xl sm:h-[540px] sm:max-w-2xl">
          <RevenueCard className="left-10 top-[9%] w-60" title="Total Revenue" note="avg 1.5K" value="$120.29">
            <div className="mt-2 h-1.5 rounded-full bg-gray-50/30">
              <div className="h-full w-3/5 rounded-full bg-lime-400" />
            </div>
          </RevenueCard>

          <RevenueCard className="left-10 top-[34%]" title="Year to Date" note="$120" value="$1,200.38">
            <span className="mt-2 inline-block rounded-full bg-lime-400 px-2 py-0.5 text-[10px] font-bold text-gray-950">
              +12%
            </span>
          </RevenueCard>

          <Image
            src="/images/hero-person2.png"
            alt="Creator holding a tablet"
            width={400}
            height={480}
            className="absolute top-0 left-1/2 h-[460px] w-auto max-w-none -translate-x-1/2 sm:h-[600px] [mask-image:linear-gradient(to_bottom,black_90%,transparent_100%)]"
          />

          <Shape type="squiggle" className="absolute right-3 top-[19%] w-20 text-lime-400 sm:w-28" />
          <HappyStudentsCard className="bottom-[6%] right-8" />
        </div>

        <div>
          <SectionHeading
            align="left"
            size="half"
            title={"Create & Manage\nCourses Easily."}
            subtitle="ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses."
          />
          <div className="mt-10">
            <CheckList items={creatorBenefits} />
          </div>
        </div>
      </Container>
    </section>
  );
}