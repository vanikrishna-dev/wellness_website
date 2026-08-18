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
  BatteryCharging,
  Brain,
  RefreshCw,
  Heart,
  Scale,
} from "lucide-react";
import goalsImg from "../../assets/img4.png";

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
  { label: "Workout Recovery", Icon: BatteryCharging },
  { label: "Brain Health", Icon: Brain },
  { label: "Detoxification", Icon: RefreshCw },
  { label: "Heart Health", Icon: Heart },
  { label: "Weight Loss", Icon: Scale },
];

export default function GoalsCard() {
  return (
    <section className="mx-auto max-w-container px-6 pt-12 pb-14 md:px-9 md:pt-16 md:pb-[75px]">
      <div className="grid grid-cols-1 gap-8 rounded-2xl bg-brand-green p-6 md:gap-12 md:grid-cols-2 md:p-[47px]">
        <div className="flex flex-col">
          <p className="mb-8 text-[13px] font-bold uppercase tracking-wider text-white">
            Your guide to feeling good &rarr;
          </p>
          <h2 className="mb-4 font-serif text-4xl leading-[1.1] text-white md:text-5xl">
            No guessing, just <em className="italic text-brand-lime">excellence.</em>
          </h2>
          <p className="mb-8 max-w-[440px] text-[15px] leading-[1.5] text-white/90">
            Your wellness isn't one-size-fits-all. Neither is our approach. Take our quiz
            and find the products that make sense for you.
          </p>
          <img
            src={goalsImg}
            alt="Product bottles"
            draggable={false}
            className="pointer-events-none mx-auto mt-6 block w-[180px] select-none md:mx-0 md:ml-20 md:mt-auto md:w-[220px]"
          />
        </div>
        <div className="md:-ml-6">
          <p className="mb-6 text-[13px] font-bold uppercase tracking-wider text-white">
            Your guide to feeling good &rarr;
          </p>
          <div className="grid grid-cols-2 gap-3">
            {goals.map(({ label, Icon }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-2xl bg-white px-3 py-2"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-lime">
                  <Icon className="h-5 w-5 fill-white text-white" strokeWidth={2} />
                </span>
                <span className="text-[15px] font-bold text-brand-green">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
