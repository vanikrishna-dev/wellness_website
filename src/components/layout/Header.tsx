import { useRef, useState } from "react";
import AnnouncementBar from "./AnnouncementBar";
import ShopMegaMenu from "./ShopMegaMenu";

export default function Header() {
  const [shopOpen, setShopOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileShopOpen, setMobileShopOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);

  const openMenu = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setShopOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setShopOpen(false), 150);
  };

  return (
    <header className="relative w-full bg-white" onMouseLeave={scheduleClose}>
      <AnnouncementBar />
      <div className="border-b border-neutral-100">
        <div className="mx-auto flex h-[64px] max-w-container items-center justify-between px-4 md:h-[90px] md:pl-[40px] md:pr-6">
          {/* Mobile hamburger */}
          <button
            aria-label="Menu"
            className="text-brand-green md:hidden"
            onClick={() => setMobileOpen(true)}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" />
            </svg>
          </button>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex">
            <div onMouseEnter={openMenu} onMouseLeave={scheduleClose}>
              <a href="#" className="text-sm font-bold tracking-wider text-brand-green hover:underline underline-offset-8">
                SHOP
              </a>
              <ShopMegaMenu open={shopOpen} />
            </div>
            <a href="#" className="text-sm font-bold tracking-wider text-brand-green">
              LEARN
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-brand-green px-3 py-2.5 text-sm font-bold uppercase tracking-wider text-white hover:bg-brand-green-2"
            >
              Get Started <span aria-hidden>&rarr;</span>
            </a>
          </nav>

          {/* Mobile logo center */}
          <span className="font-serif text-[22px] font-medium text-brand-green md:hidden">Bovi</span>

          <div className="flex items-center gap-4 md:gap-6">
            <div className="relative hidden md:block">
              <input
                type="search"
                placeholder="SEARCH"
                className="h-11 w-[420px] rounded-full bg-brand-bg pl-6 pr-12 text-sm font-extrabold tracking-normal text-brand-green placeholder:font-extrabold placeholder:text-brand-green focus:outline-none"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-green" aria-hidden>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="2" />
                  <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </div>
            <button className="hidden items-center gap-1.5 text-sm font-extrabold tracking-normal text-brand-green md:flex" aria-label="Language">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.25" />
                <path d="M3 12h18M12 3a13 13 0 010 18M12 3a13 13 0 000 18" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" />
              </svg>
              EN
            </button>
            <button aria-label="Account" className="hidden text-brand-green md:block">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2.25" />
                <path d="M4 21c0-4 3.5-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" />
              </svg>
            </button>
            <button aria-label="Cart" className="text-brand-green">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M3 4h2l2.5 12h11L21 7H6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="9" cy="20" r="1.5" stroke="currentColor" strokeWidth="1.75" />
                <circle cx="17" cy="20" r="1.5" stroke="currentColor" strokeWidth="1.75" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-[85%] max-w-[360px] overflow-y-auto bg-white p-6">
            <div className="mb-8 flex items-center justify-between">
              <span className="font-serif text-[22px] font-medium text-brand-green">Bovi</span>
              <button aria-label="Close" onClick={() => setMobileOpen(false)} className="text-brand-green">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <div className="relative mb-6">
              <input
                type="search"
                placeholder="SEARCH"
                className="h-11 w-full rounded-full bg-brand-bg pl-5 pr-10 text-sm font-bold text-brand-green placeholder:font-bold placeholder:text-brand-green focus:outline-none"
              />
            </div>
            <nav className="space-y-1">
              <button
                onClick={() => setMobileShopOpen((v) => !v)}
                className="flex w-full items-center justify-between py-3 text-[15px] font-bold uppercase tracking-wider text-brand-green"
              >
                SHOP
                <span aria-hidden>{mobileShopOpen ? "−" : "+"}</span>
              </button>
              {mobileShopOpen && (
                <ul className="mb-2 space-y-2 pb-2 pl-2">
                  {["Hydration", "Beauty", "Immunity", "Mobility", "Health", "Sleep", "Vitality", "Stress", "Shop All"].map((l) => (
                    <li key={l}>
                      <a href="#" className="block py-1.5 text-[14px] font-semibold uppercase tracking-wider text-brand-green">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              <a href="#" className="block py-3 text-[15px] font-bold uppercase tracking-wider text-brand-green">
                LEARN
              </a>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-green px-4 py-2.5 text-sm font-bold uppercase tracking-wider text-white"
              >
                Get Started <span aria-hidden>&rarr;</span>
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
