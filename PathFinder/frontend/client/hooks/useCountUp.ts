import { useEffect, useRef, useState } from "react";

export function useCountUp(target: number, durationMs = 1200) {
  const [value, setValue] = useState(0);
  const start = useRef<number | null>(null);

  useEffect(() => {
    let raf = 0;
    const step = (t: number) => {
      if (start.current === null) start.current = t;
      const p = Math.min(1, (t - start.current) / durationMs);
      setValue(Math.floor(p * target));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs]);

  return value;
}
