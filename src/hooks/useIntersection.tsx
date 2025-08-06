import { useEffect, useState, useRef } from "react";

type UseIntersectionOptions = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
};

function useIntersection<T extends Element>(
  options?: UseIntersectionOptions
): [React.RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const [isIntersecting, setIsIntersecting] = useState(true);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return [ref, isIntersecting];
}

export default useIntersection;
