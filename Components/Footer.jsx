import Link from "next/link";

const sitemapLinks = [
  ["about us", "/about-us"],
  ["our work", "/our-work"],
  ["our clients", "/our-clients"],
  ["our team", "/our-team"],
  ["contact us", "/contact-us"],
];

const offices = [
  "dubai, UAE",
  "beirut, LEBANON",
  "paris, FRANCE",
  "cairo, EGYPT",
  "riyadh, KSA",
];

export default function Footer() {
  return (
    <footer>
      <div className="relative h-20 bg-black" aria-hidden="true">
        <span className="absolute left-[53.7%] top-3 h-1 w-1 rounded-full bg-[#00d9ff] shadow-[0_0_4px_rgba(0,217,255,0.65)]" />
      </div>

      <div className="bg-[#ff414d] text-white">
        <div className="mx-auto max-w-[760px] px-5 pb-9 pt-10 lg:px-0">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-[110px_1fr_190px] md:gap-8">
            <div>
              <h4 className="mb-5 text-xs font-normal leading-none">sitemap</h4>
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
              <h4 className="mb-5 text-xs font-normal leading-none">offices</h4>
              <ul className="text-[10px] font-bold leading-4">
                {offices.map((office) => (
                  <li key={office}>{office}</li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="mb-5 text-xs font-normal leading-none">inquiries</h4>
              <a
                href="mailto:briefme@mindspace-me.com"
                className="text-[10px] font-bold leading-4 hover:underline"
              >
                briefme@mindspace-me.com
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="flex items-center gap-3">
              <span className="flex items-start text-2xl font-extrabold leading-none tracking-[-0.055em]">
                mindspace<sup className="ml-0.5 text-[9px] font-bold leading-none">°</sup>
              </span>
              <span className="h-5 w-px bg-white" />
              <a
                href="https://instagram.com"
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
                href="https://linkedin.com"
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
      </div>
    </footer>
  );
}
