import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export interface RowItem {
  title: string;
  image: string;
  subtitle?: string;
  href?: string;
}

export default function RowCarousel({ heading, items }: { heading: string; items: RowItem[] }) {
  return (
    <div className="relative">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-semibold">{heading}</h3>
      </div>
      <div className="relative">
        <Carousel opts={{ align: "start", dragFree: true }}>
          <CarouselContent>
            {items.map((it) => {
              const Card = (
                <motion.div whileHover={{ y: -4 }} className="group overflow-hidden rounded-xl border border-border bg-card">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={it.image} alt={it.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <div className="p-3">
                    <div className="line-clamp-1 text-sm font-medium">{it.title}</div>
                    {it.subtitle && <div className="line-clamp-1 text-xs text-muted-foreground">{it.subtitle}</div>}
                  </div>
                </motion.div>
              );
              return (
                <CarouselItem key={it.title} className="basis-3/4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                  {it.href ? <Link to={it.href} className="block">{Card}</Link> : Card}
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious variant="default" className="-left-3 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground shadow" />
          <CarouselNext variant="default" className="-right-3 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground shadow" />
        </Carousel>
      </div>
    </div>
  );
}
