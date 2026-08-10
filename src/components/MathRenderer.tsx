"use client";
import "katex/dist/katex.min.css";
import katex from "katex";
import { useEffect, useRef } from "react";

interface Props {
  math: string;
  block?: boolean;
  className?: string;
}

export default function MathRenderer({ math, block = false, className = "" }: Props) {
  const ref = useRef<HTMLSpanElement | HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      try {
        katex.render(math, ref.current, {
          throwOnError: false,
          displayMode: block,
          output: "html",
        });
      } catch {
        if (ref.current) ref.current.textContent = math;
      }
    }
  }, [math, block]);

  if (block) {
    return <div ref={ref as React.RefObject<HTMLDivElement>} className={`katex-block ${className}`} />;
  }
  return <span ref={ref as React.RefObject<HTMLSpanElement>} className={`katex-inline ${className}`} />;
}
