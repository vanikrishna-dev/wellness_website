import bottleImg from "../../assets/img3.png";

export default function ProductFeature() {
  return (
    <section className="overflow-hidden bg-brand-bg">
      <div className="mx-auto grid max-w-container grid-cols-1 items-start gap-8 px-6 py-10 md:h-[600px] md:py-12 md:grid-cols-[1fr_1.1fr_1fr]">
        <div className="md:mt-8">
          <p className="mb-4 inline-flex text-[13px] font-extrabold uppercase tracking-wider text-brand-green md:mb-8">
            Fresh from our lab to your life &rarr;
          </p>
          <h2 className="font-serif text-[32px] font-medium leading-[1.05] text-neutral-900 md:text-5xl">
            Meet the latest member of your{" "}
            <em className="italic text-brand-lime">wellness lineup.</em>
          </h2>
        </div>
        <div className="flex items-center justify-center md:relative md:block md:self-stretch">
          <img
            src={bottleImg}
            alt="Product bottle"
            draggable={false}
            className="pointer-events-none w-[260px] max-w-none select-none md:absolute md:left-1/2 md:top-[70px] md:w-[700px] md:-translate-x-1/2"
          />
        </div>
        <div className="rounded-3xl bg-white p-6 md:mt-8">
          <h3 className="mb-3 font-serif text-[32px] font-medium leading-[1.08] text-neutral-900 md:text-[44px]">
            Chocolate flavoured bone broth{" "}
            <em className="italic text-brand-lime">beef protein</em>
          </h3>
          <p className="mb-4 text-[15px] font-medium leading-[1.5] text-neutral-800">
            We put care into every step - selectin raw material with intention, refin in
            our craft, and keepin strict checks to ensure purity.
          </p>
          <p className="mb-3 text-[15px] font-medium text-neutral-800">
            Save 30% with code 25NEWNOV30
          </p>
          <button
            type="button"
            onClick={() => navigator.clipboard?.writeText("25NEWNOV30")}
            className="mb-4 inline-flex items-center gap-2 rounded-lg bg-brand-lime px-4 py-2 text-[13px] font-bold tracking-wider text-white"
          >
            25NEWNOV30
            <svg
              aria-hidden
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          </button>
          <div>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-brand-green px-3 py-1.5 text-[13px] font-extrabold uppercase tracking-wider text-white"
            >
              Shop Now <span aria-hidden>&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
