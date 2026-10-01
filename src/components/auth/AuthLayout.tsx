import Link from "next/link";
import AuthShowcase from "@/components/auth/AuthShowcase";
import Logo from "@/components/ui/Logo";

type AuthLayoutProps = {
    title: string;
    description: string;
    children: React.ReactNode;
};

export default function AuthLayout({ title, description, children }: AuthLayoutProps) {
    return (
        <main className="min-h-dvh bg-blue-800 bg-grid px-4 py-8 text-gray-50 sm:px-10 lg:h-dvh lg:overflow-y-auto lg:px-16 lg:py-8">
            <div className="mx-auto grid max-w-6xl gap-10 lg:min-h-full lg:grid-cols-[1fr_520px] lg:gap-16">
                <div className="flex flex-col">
                    <Link href="/" aria-label="ByteSpace home" className="w-fit">
                        <Logo showText={false} />
                    </Link>

                    <h1 className="mt-8 text-xl font-semibold">{title}</h1>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-50/80">
                        {description}
                    </p>

                    <AuthShowcase />
                </div>

                <div className="w-full lg:self-center">{children}</div>
            </div>
        </main>
    );
}