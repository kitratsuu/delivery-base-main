import { RefObject, useEffect, useState } from "react";

export function useElement(ref: RefObject<Element>) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [directiondown, setDirectiondown] = useState<boolean>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        setDirectiondown(entry.boundingClientRect.y < 0);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return { isIntersecting, directiondown };
}
