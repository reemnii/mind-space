import Link from "next/link";
import Container from "@/Components/Container";

const sitemapLinks = [
  ["home", "/"],
  ["our work", "/#work"],
  ["our story", "/about-us"],
  ["news", "https://hanzofilms.com/blogs"],
  ["contact", "/#contact"],
];

const locations = ["Dubai, UAE", "Mumbai, India", "Singapore"];

export default function Footer() {
  return (
    <footer>
      <div className="relative h-20 bg-black" aria-hidden="true">
        <span className="absolute left-[53.7%] top-3 h-1 w-1 rounded-full bg-[#00d9ff] shadow-[0_0_4px_rgba(0,217,255,0.65)]" />
      </div>

      <div className="bg-[#ff414d] text-white">
        <Container>
        <div className="mx-auto max-w-[760px] pb-9 pt-10">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-[110px_1fr_190px] md:gap-8">
            <div>
              <h4 className="mb-5 text-xs font-normal leading-none">explore</h4>
              <ul className="text-[10px] font-bold leading-4">
                {sitemapLinks.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="hover:underline">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-5 text-xs font-normal leading-none">locations</h4>
              <ul className="text-[10px] font-bold leading-4">
                {locations.map((location) => (
                  <li key={location}>{location}</li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="mb-5 text-xs font-normal leading-none">contact</h4>
              <div className="flex flex-col text-[10px] font-bold leading-4">
                <a href="tel:+971529360566" className="hover:underline">
                  +971 52 936 0566
                </a>
                <a
                  href="mailto:nasneen@hanzofilms.com"
                  className="hover:underline"
                >
                  nasneen@hanzofilms.com
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="flex items-center gap-3">
              <span className="flex items-start text-2xl font-extrabold leading-none tracking-[-0.055em]">
                Hanzo<span className="text-cyan-300">Films</span>
              </span>
              <span className="h-5 w-px bg-white" />
              <a
                href="https://www.instagram.com/hanzofilms/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition-opacity hover:opacity-70"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/hanzo-films/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[17px] font-bold leading-none transition-opacity hover:opacity-70"
              >
                in
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-[10px] leading-none md:w-[190px] md:flex-nowrap">
              <Link href="/privacy-policy" className="hover:underline">
                privacy policy
              </Link>
              <span aria-hidden="true">|</span>
              <Link href="/terms-and-conditions" className="hover:underline">
                terms &amp; conditions
              </Link>
            </div>
          </div>
        </div>
        </Container>
      </div>
    </footer>
  );
}
