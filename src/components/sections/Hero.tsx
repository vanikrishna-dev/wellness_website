import heroImg from "../../assets/hero.jpg";

export default function Hero() {
  return (
    <section className="w-full">
      <img
        src={heroImg}
        alt="Couple in yellow field"
        className="block h-[420px] w-full object-cover md:h-[677px]"
      />
    </section>
  );
}
