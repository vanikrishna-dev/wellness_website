export default function Marquee() {
  const items = Array.from({ length: 12 });
  return (
    <div className="w-full overflow-hidden bg-brand-green py-4">
      <div className="flex items-center gap-11 whitespace-nowrap">
        {items.map((_, i) => (
          <div key={i} className="flex items-center gap-11 text-white">
            <span className="font-sans text-base font-medium">Wellness</span>
            <span className="text-brand-lime">&#10003;</span>
          </div>
        ))}
      </div>
    </div>
  );
}
