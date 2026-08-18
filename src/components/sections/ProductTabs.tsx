import { useState } from "react";
import bottleImg from "../../assets/img1.png";

const tabs = [
  "Immunity-boosting essentials",
  "Protein for every lifestyle, goal & routine",
  "Vitamin D the sunshine vitamin",
  "Natural support to help you unwind",
];

const products = [
  { badge: "New" },
  { badge: "Best Seller" },
  { badge: "Top Pick" },
  { badge: "Exclusive" },
];

export default function ProductTabs() {
  const [active, setActive] = useState(1);
  return (
    <section className="mx-auto max-w-container px-6 pt-16 pb-4 md:pt-24">
      <h2 className="mb-8 text-center font-serif text-[32px] leading-[1.1] text-neutral-900 md:mb-10 md:text-5xl">
        Embrace the fall season with{" "}
        <em className="italic text-brand-lime">daily</em>
        <br />
        wellness &amp; immune <em className="italic text-brand-lime">support</em>
      </h2>
      <div className="mx-auto mb-12 flex max-w-[1100px] flex-wrap justify-center gap-2">
        {tabs.map((t, i) => (
          <button
            key={t}
            onClick={() => setActive(i)}
            className={`rounded-full px-5 py-1.5 text-[14px] font-bold uppercase tracking-normal transition ${
              active === i
                ? "bg-brand-green text-white"
                : "border border-brand-green/30 text-brand-green"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-7">
        {products.map((p, i) => (
          <div key={i} className="flex flex-col">
            <div className="relative flex h-[200px] items-center justify-center overflow-hidden rounded-2xl bg-brand-bg md:h-[275px]">
              <span className="absolute left-4 top-4 rounded-full bg-brand-lime px-3 py-1 text-[11px] font-bold text-white">
                {p.badge}
              </span>
              <img
                src={bottleImg}
                alt="Product"
                draggable={false}
                className="pointer-events-none h-32 w-auto object-contain select-none md:h-44"
              />
            </div>
            <h3 className="mt-4 font-serif text-[20px] font-medium leading-[1.2] text-neutral-900">
              Whey-Based Daily Nutrition All-In-One Protein - Vanilla
            </h3>
            <p className="mt-2 text-[14px] font-medium leading-[1.4] text-[#9E9E9E]">
              An all-in-one protein blend that supportsdaily nutrition, muscle recovery
              and overall health
            </p>
            <p className="mt-2 text-[15px] font-bold text-brand-green">₹799.00</p>
          </div>
        ))}
      </div>
    </section>
  );
}
