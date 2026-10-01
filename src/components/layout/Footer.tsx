import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import NewsletterForm from "@/components/ui/NewsletterForm";
import { footerColumns, legalLinks } from "@/data/footer";

export default function Footer() {
  return (
    <footer className="bg-white px-4 py-12 text-gray-950 sm:px-10 lg:px-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 text-sm">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>
            <div className="mt-6">
              <NewsletterForm />
            </div>
            <p className="mt-4 max-w-md text-xs text-gray-400">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerColumns.map((column, index) => (
              <ul key={index} className="space-y-3 text-sm">
                {column.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-blue-800">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-gray-100 pt-6 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2023 ByteSpace. All rights reserved.</p>
          <ul className="flex gap-6">
            {legalLinks.map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-blue-800">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}