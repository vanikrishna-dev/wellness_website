import { useState } from "react";

const faqs = Array.from({ length: 6 }, () => ({
  q: "Are your products tested for quality and safety?",
  a: "Protein is a vital macronutrient, essential for building and repairing tissues, supporting...",
}));

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-brand-bg">
      <div className="mx-auto grid max-w-container grid-cols-1 gap-8 px-6 pt-14 pb-8 md:gap-12 md:pt-20 md:pb-1 md:grid-cols-[1fr_1.6fr]">
        <div>
          <p className="mb-6 text-[13px] font-bold uppercase tracking-wider text-brand-green">
            Wellness Support &rarr;
          </p>
          <h2 className="mb-5 font-serif text-[36px] leading-[1] text-neutral-900 md:text-[56px]">
            Ask <em className="italic text-brand-lime">away</em>
          </h2>
          <p className="mb-8 max-w-[360px] text-[15px] font-medium leading-[1.4] text-neutral-800">
            We've got the FAQs covered. But if you're still stuck, we're only a message
            away.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-brand-green px-3 py-1.5 text-[14px] font-bold uppercase tracking-wider text-white"
          >
            Contact us <span aria-hidden>&rarr;</span>
          </a>
        </div>
        <div className="space-y-3 md:min-h-[422px]">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-2xl bg-white px-5 py-1">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 text-left"
              >
                <span className="font-serif text-[16px] font-medium text-neutral-900 md:text-[20px]">{f.q}</span>
                <span className="text-[26px] font-medium text-brand-green" aria-hidden>
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <p className="mt-3 ml-0 max-w-[280px] text-[14px] font-medium leading-[1.5] text-[#9E9E9E] md:ml-24 md:text-[15px]">
                  {f.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
