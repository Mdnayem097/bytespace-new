import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <main className="relative flex min-h-screen flex-col overflow-hidden bg-[#1C2AEE] text-white">
        {/* grid background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #6675FF 1px, transparent 1px), linear-gradient(to bottom, #6675FF 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        {/* nav */}
        <header className="relative z-10 grid grid-cols-3 items-center px-8 py-6 sm:px-12">
          <Link href="/" className="flex items-center gap-2 justify-self-start">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#D4FF3F] text-xs font-extrabold text-[#1C2AEE]">
              b
            </span>
            <span className="text-base font-semibold tracking-tight">ByteSpace</span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-white/85 justify-self-center md:flex">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <Link href="/courses" className="transition-colors hover:text-white">
              Courses
            </Link>
            <Link href="/creators" className="transition-colors hover:text-white">
              Creators
            </Link>
          </nav>

          <div className="flex items-center gap-5 text-sm justify-self-end">
            <Link href="/sign-in" className="hidden text-white/85 transition-colors hover:text-white sm:inline">
              Sign In
            </Link>
            <Link
              href="/join"
              className="rounded-full bg-[#D4FF3F] px-4 py-1.5 font-medium text-[#1C2AEE] transition-opacity hover:opacity-90"
            >
              Join Up
            </Link>
            <button aria-label="Cart" className="text-white/85 transition-colors hover:text-white">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75">
                <path d="M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h7.2a2 2 0 0 0 2-1.6L21 7H6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="9.5" cy="20.5" r="1.3" />
                <circle cx="17" cy="20.5" r="1.3" />
              </svg>
            </button>
          </div>
        </header>

        {/* hero */}
        <section className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-20 text-center">
          <h1
            className="select-none text-[clamp(110px,24vw,280px)] font-extrabold leading-[0.85] tracking-tight"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #D4FF3F 0%, #8FE05C 35%, #3D8F8A 65%, #1C2AEE 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            404
          </h1>

          <h2 className="-mt-6 max-w-xl text-2xl font-bold sm:text-[28px]">
            The page you are looking for doesn&apos;t exist
          </h2>

          <p className="mt-5 max-w-sm text-xs text-white/55">
            Try to use a correct url or go back to homepage to start again.
          </p>

          <Link
            href="/"
            className="mt-5 rounded-full bg-[#D4FF3F] px-6 py-2 text-sm font-semibold text-[#1C2AEE] transition-opacity hover:opacity-90"
          >
            Back to Home
          </Link>
        </section>

      </main>
      <Footer />
    </>
  );
}
