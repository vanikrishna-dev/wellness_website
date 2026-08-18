import bottleImg from "../../assets/img1.png";

export default function Testimonial() {
  return (
    <section className="bg-brand-bg">
      <div className="mx-auto grid max-w-container grid-cols-1 items-center gap-8 px-6 pt-10 pb-12 md:pt-[26px] md:grid-cols-2">
        <div className="flex justify-center md:items-center md:justify-start md:pl-[18px]">
          <div className="relative flex h-[380px] w-[280px] items-center justify-center rounded-full bg-white md:h-[540px] md:w-[420px]">
            <img
              src={bottleImg}
              alt="Product"
              draggable={false}
              className="pointer-events-none h-[320px] w-auto -translate-y-4 select-none md:h-[480px] md:-translate-y-6"
            />
            <a
              href="#"
              className="absolute bottom-[72px] inline-flex items-center gap-2 rounded-full bg-brand-green px-3 py-1.5 text-[14px] font-bold uppercase tracking-wider text-white"
            >
              Shop Now <span aria-hidden>&rarr;</span>
            </a>
          </div>
        </div>
        <div className="mx-auto max-w-[680px] text-center md:mr-auto md:ml-[-32px] md:mt-8 md:pr-8">
          <p className="font-serif text-[26px] font-medium leading-[1.2] text-neutral-900 md:text-[47px] md:leading-[1.15]">
            Amazing experience from{" "}
            <em className="italic text-brand-lime">start to finish.</em> The service was
            quick, the team was helpful, and the results were exactly{" "}
            <em className="italic text-brand-lime">what I needed.</em> Highly recommended!
          </p>
          <p className="mt-6 text-[17px] font-bold uppercase tracking-wider text-brand-green">
            Rahul Menon
          </p>
        </div>
      </div>
    </section>
  );
}
