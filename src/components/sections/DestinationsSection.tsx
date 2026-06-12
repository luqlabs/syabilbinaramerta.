"use client";


const destinations = [
  { name: "Jepang" },
  { name: "Amerika Serikat" },
  { name: "Schengen" },
  { name: "Australia" },
  { name: "Inggris (UK)" },
  { name: "China" },
  { name: "Korea Selatan" },
  { name: "Kanada" },
];

export default function DestinationsSection() {
  return (
    <section className="py-24 bg-[#0A1128]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-medium text-white mb-4">
          Destinasi Populer
        </h2>
        <p className="text-white/80 text-lg md:text-xl font-light mb-16">
          Kami melayani pengurusan visa ke lebih dari 50+ negara.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {destinations.map((dest, i) => (
            <div
              key={i}
              className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl py-6 px-4 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-white/5"
            >
              <h3 className="text-white font-medium text-sm md:text-base">
                {dest.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
