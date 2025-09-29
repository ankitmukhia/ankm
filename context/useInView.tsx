"use client";

import { useRef, createContext, useContext } from "react";
import { useInView } from "motion/react";

interface InViewProps {
  ref: React.RefObject<SVGSVGElement | null>;
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
  const ref = useRef<SVGSVGElement | null>(null);
  const inView = useInView(ref, { once: false, amount: 0.8 });

  return (
    <InViewContext.Provider value={{ ref, inView }}>
      {children}
    </InViewContext.Provider>
  );
};
