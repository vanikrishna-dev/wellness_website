import craftImg from "../../assets/img2.jpg";

export default function TrueCraft() {
  return (
    <section className="bg-brand-bg">
      <div className="mx-auto grid max-w-container grid-cols-1 gap-10 px-6 py-14 md:gap-16 md:py-20 md:grid-cols-[1fr_1.15fr]">
        <div className="flex max-w-[520px] flex-col">
          <p className="mb-6 text-[13px] font-extrabold uppercase tracking-wider text-brand-green">
            Why Trust Us?
          </p>
          <h2 className="mb-4 font-serif text-[32px] leading-[1.05] text-neutral-900 md:text-5xl">
            Years of <em className="italic text-brand-lime">true craft</em>
          </h2>
          <div className="mb-10 text-[15px] font-medium leading-[1.45] text-neutral-800">
            <p>
              Our distinct value comes from 3rd-party tests, eco-friendly source methods,
              and total focus on each item we use, all to offer you products that truly
              perform. We are proudly from Canada and built on the belief that all deserve
              to feel their best. Thus, we keep clear, steady test norms and a firm vow
              to clean, safe items at the core of all we do.
            </p>
            <p>
              We put care into every step—selectin raw material with intention, refin in
              our craft, and keepin strict checks to ensure purity. Our team stays driven
              by trust, honesty, and a wish to uplift your daily well-bein. With each new
              item, and each new step ahead, our aim is to stay true, reliable, and
              rooted in real wellness for all.
            </p>
          </div>
          <div className="space-y-3 text-[14px] font-bold uppercase tracking-wider text-brand-green">
            <a href="#" className="block">Explore all products &rarr;</a>
            <a href="#" className="block">See our story &rarr;</a>
          </div>
        </div>
        <div className="overflow-hidden rounded-[20px]">
          <img src={craftImg} alt="Couple cooking together" className="h-[320px] w-full object-cover md:h-[520px]" />
        </div>
      </div>
    </section>
  );
}
