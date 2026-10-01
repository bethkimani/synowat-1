import React, { useEffect, useRef } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';

type CounterProps = {value: number;decimals?: number;};

export function Counter({ value, decimals = 0 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!inView || !node) return;
    if (reduceMotion) {
      node.textContent = value.toFixed(decimals);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.1,
      ease: [0.23, 1, 0.32, 1],
      onUpdate: (v) => {
        node.textContent = v.toFixed(decimals);
      }
    });
    return () => controls.stop();
  }, [inView, reduceMotion, value, decimals]);

  return (
    <span ref={ref} className="tabular-nums">
      {0 .toFixed(decimals)}
    </span>);

}