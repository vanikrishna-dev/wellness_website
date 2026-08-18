export default function BlogCards() {
  const cards = Array.from({ length: 4 });
  return (
    <section className="mx-auto max-w-container px-6 pt-14 pb-14 md:px-10 md:pt-20 md:pb-16">
      <div className="mb-8 flex flex-col items-start gap-4 md:mb-12 md:flex-row md:items-center md:justify-between">
        <h2 className="font-serif text-[32px] text-neutral-900 md:text-5xl">
          The <em className="italic text-brand-lime">dose</em>
        </h2>
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-full bg-brand-bg px-4 py-2 text-[14px] font-bold uppercase tracking-wider text-brand-green"
        >
          Discover more <span aria-hidden>&rarr;</span>
        </a>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
        {cards.map((_, i) => (
          <article key={i}>
            <div className="relative mb-4 aspect-[1/1.05] rounded-2xl bg-brand-bg">
              <span className="absolute left-4 top-4 rounded-full bg-brand-lime px-3 py-1 text-[11px] font-bold text-white">
                Health &amp; Wellness
              </span>
            </div>
            <h3 className="mb-2 font-serif text-[17px] leading-[1.15] text-neutral-900 md:text-[21px]">
              How Much Protein Do You Need Daily?
            </h3>
            <p className="mb-1 text-[13px] font-medium leading-[1.45] text-[#9E9E9E] md:text-[14px]">
              Protein is a vital macronutrient, essential for building and repairing
              tissues, supporting...
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-[14px] font-bold uppercase tracking-wider text-brand-green"
            >
              Read More <span aria-hidden>&rarr;</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
