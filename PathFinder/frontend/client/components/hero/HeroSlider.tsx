import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Discover Your Stream",
    desc: "AI-powered assessment to pick Arts, Science or Commerce with confidence.",
    cta: { label: "Start Test", to: "/test" },
    image:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1800&auto=format&fit=crop",
  },
  {
    title: "Explore Colleges Near You",
    desc: "Find government degree colleges across Jammu & Kashmir.",
    cta: { label: "Find Colleges", to: "/colleges" },
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1800&auto=format&fit=crop",
  },
  {
    title: "Compare Courses Easily",
    desc: "See duration, fees, and career scope side by side.",
    cta: { label: "Compare Now", to: "/compare" },
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1800&auto=format&fit=crop",
  },
];

export default function HeroSlider() {
  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    const id = setInterval(() => api?.scrollNext(), 5000);
    return () => clearInterval(id);
  }, [api]);

  return (
    <section className="relative">
      <Carousel setApi={setApi} opts={{ loop: true, align: "start", dragFree: true }}>
        <CarouselContent>
          {slides.map((s, i) => (
            <CarouselItem key={i}>
              <div className="relative h-[46vh] w-full overflow-hidden rounded-2xl border border-border">
                <img src={s.image} alt={s.title} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/20 to-transparent" />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative z-10 flex h-full flex-col justify-end p-8 text-white"
                >
                  <h2 className="text-2xl font-bold md:text-3xl">{s.title}</h2>
                  <p className="mt-2 max-w-2xl text-sm md:text-base opacity-90">{s.desc}</p>
                  <div className="mt-4">
                    <Link to={s.cta.to} className="inline-flex items-center gap-2 rounded-md bg-white/90 px-4 py-2 text-sm font-semibold text-blue-700 shadow hover:bg-white">
                      {s.cta.label}
                    </Link>
                  </div>
                </motion.div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
