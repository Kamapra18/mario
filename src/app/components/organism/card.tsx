import QualityCard from "../molecule/qualityCard";

const items = [
  { src: "/01.png", alt: "ya" },
  { src: "/02.png", alt: "Award" },
  { src: "/03.png", alt: "Rocket" },
  { src: "/04.png", alt: "Food Delivery" },
];

export default function QualityCards() {
  return (
    <section className="bg-gradient-to-b from-[#FFF7E5] to-white py-10">
      <main className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <QualityCard
              key={index}
              src={item.src}
              alt={item.alt}
              isPrimary={index === 0}
            />
          ))}
        </div>
      </main>
    </section>
  );
}
