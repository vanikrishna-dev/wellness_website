export default function SocialGrid() {
  const tiles = Array.from({ length: 12 });
  return (
    <section className="pt-12 pb-14 md:pt-20 md:pb-20">
      <div className="mx-auto max-w-container px-6">
        <p className="mb-4 pl-0 text-[13px] font-bold uppercase tracking-wider text-brand-green md:mb-5 md:pl-4">
          Wellness Support &rarr;
        </p>
        <h2 className="mb-8 max-w-[900px] pl-0 font-serif text-[32px] leading-[1.1] text-neutral-900 md:mb-10 md:pl-4 md:text-[56px] md:leading-[1.05]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
          <em className="italic text-brand-lime">eiusmod tempor</em>
        </h2>
      </div>
      <div
        className="flex gap-5 overflow-x-auto [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {tiles.map((_, i) => (
          <div
            key={i}
            className="h-[150px] w-[150px] shrink-0 rounded-2xl bg-[#F2F7F5] md:h-[210px] md:w-[210px]"
            aria-hidden
          />
        ))}
      </div>
    </section>
  );
}
