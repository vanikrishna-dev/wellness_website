import bottleImg from "../../assets/img1.png";

const items = [
  { label: "OPTIMIZE", title: "Hydration" },
  { label: "ELEVATE", title: "Beauty" },
  { label: "STRENGTHEN", title: "Immunity" },
  { label: "ENHANCE", title: "Mobility" },
  { label: "IMPROVE", title: "Health" },
  { label: "ENHANCE", title: "Sleep" },
  { label: "INCREASE", title: "Vitality" },
  { label: "REMOVE", title: "Stress" },
];

export default function SupportGrid() {
  return (
    <section className="mx-auto max-w-container px-6 pb-16 md:pb-24">
      <div className="mb-8 flex flex-col items-start gap-4 md:mb-11 md:flex-row md:items-center md:justify-between">
        <h2 className="font-serif text-[32px] leading-tight text-neutral-900 md:text-5xl">
          Support where <em className="italic text-brand-lime">you need it</em>
        </h2>
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-full bg-brand-bg px-4 py-2 font-sans text-[13px] font-bold uppercase tracking-wider text-brand-green md:px-5 md:py-3 md:text-sm"
        >
          Explore all products <span aria-hidden>&rarr;</span>
        </a>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-7">
        {items.map((it) => (
          <div
            key={it.title}
            className="flex h-[240px] flex-col items-center gap-3 rounded-2xl bg-brand-bg px-4 pt-6 pb-4 text-center md:h-[280px] md:px-6 md:pt-7"
          >
            <p className="text-[13px] font-bold uppercase tracking-widest text-brand-green">
              {it.label}
            </p>
            <p className="-mt-3 font-serif text-[22px] text-brand-green md:text-[27px]">{it.title}</p>
            <img src={bottleImg} alt={it.title} className="-mt-3 mb-2 h-32 w-28 object-contain md:-mt-5 md:mb-4 md:h-44 md:w-36" />
          </div>
        ))}
      </div>
    </section>
  );
}
