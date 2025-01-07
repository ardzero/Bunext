"use client";

import { createContext, useRef, useEffect } from "react";

type IntersectionContextType = {
  observe: (
    element: HTMLElement,
    callback: (isIntersecting: boolean) => void
  ) => void;
  unobserve: (element: HTMLElement) => void;
};

const IntersectionContext = createContext<IntersectionContextType | null>(null);

// Only use this provider around sections that need intersection observers
export function IntersectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const observers = useRef(new Map());
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const callback = observers.current.get(entry.target);
        if (callback) {
          callback(entry.isIntersecting);
        }
      });
    });

    return () => observer.current?.disconnect();
  }, []);

  const observe = (
    element: HTMLElement,
    callback: (isIntersecting: boolean) => void
  ) => {
    observers.current.set(element, callback);
    observer.current?.observe(element);
  };

  const unobserve = (element: HTMLElement) => {
    observers.current.delete(element);
    observer.current?.unobserve(element);
  };

  return (
    <IntersectionContext.Provider value={{ observe, unobserve }}>
      {children}
    </IntersectionContext.Provider>
  );
}
