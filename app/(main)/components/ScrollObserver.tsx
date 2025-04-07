"use client";

import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
}

export function ScrollObserver({ children }: Props) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const target = document.querySelector("#scroll-trigger");
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <>
      <div
        className={twMerge(
          "fixed top-0 left-0 right-0 z-50 transition-transform duration-300",
          isVisible ? "translate-y-0" : "-translate-y-full"
        )}
      >
        {children}
      </div>
      <div id="scroll-trigger" className="h-1 w-full" />
    </>
  );
}
