"use client";

import { useRef, createContext, useContext, useCallback } from "react";
import { useInView } from "motion/react";

interface InViewProps {
  ref: (node: Element | null) => void;
  inView: boolean;
}

const InViewContext = createContext<InViewProps | null>(null);

export const useInViewContext = () => {
  const inViewContext = useContext(InViewContext);
  if (!inViewContext) {
    throw new Error("Context is not wrapped.");
  }

  return inViewContext;
};

export const UseInViewProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const mutableRef = useRef<Element | null>(null);
  const inView = useInView(mutableRef, { once: false, amount: 0.8 });

  const ref = useCallback((node: Element | null) => {
    // Capture the rendered DOM element for `useInView` to track.
    mutableRef.current = node;
  }, []);

  return (
    <InViewContext.Provider value={{ ref, inView }}>
      {children}
    </InViewContext.Provider>
  );
};
