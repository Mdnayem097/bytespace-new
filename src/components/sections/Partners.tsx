import Container from "@/components/ui/Container";
import PartnerLogo from "@/components/ui/PartnerLogo";
import { partners } from "@/data/partners";

export default function Partners() {
    return (
        <section className="bg-gray-100 px-4 py-12 sm:px-10 lg:flex lg:h-[202px] lg:items-center lg:px-20 lg:py-0">
            <Container className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 lg:justify-between">
                {partners.map((partner, index) => (
                    <PartnerLogo key={index} name={partner.name} icon={partner.icon} />
                ))}
            </Container>
        </section>
    );
}