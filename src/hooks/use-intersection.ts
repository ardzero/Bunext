'use client'
// best for
// - Individual components
// - When you need fine - grained control
// - Simple implementations
//   const { ref, isInView } = useIntersection({ threshold: 0.2, once: true });
import { useEffect, useRef, useState } from 'react'

interface UseIntersectionOptions {
    threshold?: number;
    root?: Element | null;
    rootMargin?: string;
    once?: boolean;
}

export function useIntersection({ threshold = 0, root = null, rootMargin = "0px", once = false }: UseIntersectionOptions = {}) {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    if (once && element) {
                        observer.unobserve(element);
                    }
                } else if (!once) {
                    setIsInView(false);
                }
            },
            { threshold, root, rootMargin }
        );

        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [threshold, root, rootMargin, once]);

    return { ref, isInView };
}  