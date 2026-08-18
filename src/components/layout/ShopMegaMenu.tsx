import {
  Droplet,
  Sparkles,
  Shield,
  Bone,
  Soup,
  Moon,
  Zap,
  Flower2,
  Dumbbell,
} from "lucide-react";

const products = [
  { label: "HYDRATION" },
  { label: "BEAUTY", badge: "Trending" },
  { label: "IMMUNITY" },
  { label: "MOBILITY" },
  { label: "HEALTH" },
  { label: "SLEEP" },
  { label: "VITALITY" },
  { label: "STRESS" },
];

const goals = [
  { label: "Optimal Hydration", Icon: Droplet },
  { label: "Elevated Beauty", Icon: Sparkles },
  { label: "Immunity", Icon: Shield },
  { label: "Joints & Bones", Icon: Bone },
  { label: "Health & Digestion", Icon: Soup },
  { label: "Sleep & Relaxation", Icon: Moon },
  { label: "Energy Rise", Icon: Zap },
  { label: "Stress Relief", Icon: Flower2 },
  { label: "Lean Muscle", Icon: Dumbbell },
];

const highlights = [
  { text: "New bundles to help you get started easily and confidently.", cta: "EXPLORE" },
  { text: "More wellness with feelgood savings", cta: "GETMORE" },
  { text: "Earn exciting rewards simply by choosing to live a healthier lifestyle.", cta: "START" },
];

export default function ShopMegaMenu({ open }: { open: boolean }) {
  return (
    <div
      className={`absolute left-0 right-0 top-full z-40 bg-white shadow-lg transition-opacity ${
        open ? "block opacity-100" : "pointer-events-none hidden opacity-0"
      }`}
    >
      <div className="mx-auto grid max-w-container grid-cols-[240px_1fr] gap-10 px-10 py-10">
        <div>
          <p className="mb-6 font-serif text-[20px] text-neutral-800">Shop by products</p>
          <ul className="space-y-5">
            {products.map((p) => (
              <li key={p.label} className="flex items-center gap-2">
                <a
                  href="#"
                  className="text-[15px] font-bold uppercase tracking-wider text-brand-green"
                >
                  {p.label}
                </a>
                {p.badge && (
                  <span className="rounded-full bg-brand-lime px-2.5 py-0.5 text-[11px] font-bold text-white">
                    {p.badge}
                  </span>
                )}
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-[15px] font-bold uppercase tracking-wider text-brand-green"
              >
                Shop All <span aria-hidden>&rarr;</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-4 font-serif text-[20px] text-neutral-800">Shop by health golas</p>
          <div className="mb-8 grid grid-cols-3 gap-3">
            {goals.map(({ label, Icon }) => (
              <a
                key={label}
                href="#"
                className="flex items-center gap-3 rounded-2xl bg-brand-bg px-3 py-2"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-lime">
                  <Icon className="h-5 w-5 fill-white text-white" strokeWidth={2} />
                </span>
                <span className="text-[15px] font-bold text-brand-green">{label}</span>
              </a>
            ))}
          </div>
          <p className="mb-4 font-serif text-[20px] text-neutral-800">Highlights</p>
          <div className="grid grid-cols-3 gap-4">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="relative flex h-[150px] flex-col justify-between overflow-hidden rounded-2xl bg-brand-green p-5 text-white"
              >
                <p className="text-[15px] font-medium leading-[1.2]">{h.text}</p>
                <a
                  href="#"
                  className="relative z-10 inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-wider"
                >
                  {h.cta} <span aria-hidden>&rarr;</span>
                </a>
                <span
                  className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full border-[14px] border-white/10"
                  aria-hidden
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
