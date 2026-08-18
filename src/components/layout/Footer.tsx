const XIcon = () => (
  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.016 3.016 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136C4.495 20.455 12 20.455 12 20.455s7.505 0 9.377-.505a3.016 3.016 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const cols = [
  {
    title: "Health Goals",
    links: ["Hydration", "Beauty", "Immunity", "Mobility", "Health", "Sleep", "Vitality", "Stress"],
  },
  {
    title: "Get Involved",
    links: ["Reward programme", "Affiliate programme", "Events", "Careers"],
  },
  {
    title: "Learn More",
    links: ["Our story", "Community", "Reward programme", "About us", "Ingredient policy"],
  },
  {
    title: "Wellness Support",
    links: ["Get started", "Contact us", "Shipping & returns", "FAQ"],
  },
];

const socials = [
  { Icon: XIcon, label: "X" },
  { Icon: InstagramIcon, label: "Instagram" },
  { Icon: YoutubeIcon, label: "YouTube" },
  { Icon: LinkedinIcon, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="rounded-t-[24px] bg-brand-green text-white">
      <div className="mx-auto max-w-container px-6 pt-12 pb-8 md:px-10 md:pt-20 md:pb-10">
        <div className="mb-10 grid grid-cols-1 items-center gap-6 md:mb-14 md:gap-8 md:grid-cols-[1.4fr_1fr]">
          <h2 className="font-serif text-[30px] leading-[1.1] md:text-[46px] md:leading-[1.05]">
            Expert wellness tips and exclusive offers delivered to{" "}
            <em className="italic text-white">your inbox.</em>
          </h2>
          <form className="flex">
            <input
              type="email"
              placeholder="EMAIL"
              className="h-12 w-full rounded-full bg-white px-5 text-[14px] font-bold uppercase tracking-wider text-brand-green placeholder:text-brand-green focus:outline-none"
            />
          </form>
        </div>
        <div className="grid grid-cols-2 gap-8 border-t border-white/20 pt-4 md:grid-cols-5">
          {cols.map((col) => (
            <div key={col.title}>
              <h3 className="mb-2 font-serif text-[22px]">{col.title}</h3>
              <ul className="space-y-2 text-[14px] font-medium text-white/90">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="mb-2 font-serif text-[22px]">Contact</h3>
            <ul className="space-y-2 text-[14px] font-medium text-white/90">
              <li>email@help.com</li>
              <li>+91 9856 567 443</li>
            </ul>
          </div>
        </div>
        <div className="mt-0 flex justify-end gap-3">
          {socials.map(({ Icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-green"
            >
              <Icon />
            </a>
          ))}
        </div>
        <div className="mt-4 flex flex-col justify-between gap-4 border-t border-white/20 pt-6 text-[13px] font-semibold text-white/90 md:flex-row">
          <div className="flex flex-wrap gap-4 md:gap-10">
            <span>Terms &amp; Conditions</span>
            <span>Privacy Policy</span>
            <span>Cookie Policy</span>
          </div>
          <p>©2025 Bovi, All Rights Reserved.</p>
        </div>
        <p className="mt-4 max-w-[1400px] pr-16 text-[12px] font-semibold leading-[1.3] text-white/80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </footer>
  );
}
