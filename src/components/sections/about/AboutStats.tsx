"use client";

import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Counter component for animation
function Counter({ value, label }: { value: number; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const incrementTime = Math.max(16, duration / end);
      
      const timer = setInterval(() => {
        start += Math.ceil(end / (duration / 16));
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center p-4 rounded-2xl bg-foreground/5 hover:bg-brand-gold/5 transition-colors border border-foreground/5">
      <div className="font-serif text-4xl md:text-5xl font-bold text-brand-gold mb-2">
        {count.toLocaleString()}+
      </div>
      <div className="text-foreground/80 font-medium">
        {label}
      </div>
    </div>
  );
}

export default function AboutStats() {
  return (
    <section className="pb-24 bg-background relative z-20">
      <div className="max-w-7xl mx-auto px-6 -mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-3xl p-6 md:p-10 shadow-2xl shadow-foreground/5 border border-foreground/5">
          <Counter value={500} label="Visa Diproses" />
          <Counter value={300} label="Klien Puas" />
          <Counter value={15} label="Negara Tujuan" />
          <Counter value={5} label="Tahun Pengalaman" />
        </div>
      </div>
    </section>
  );
}
