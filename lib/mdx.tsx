import React from "react"
import { Button } from '@/components/animated-ui/button';

export const components = {
  Button,
  h1: (props: React.ComponentProps<"h1">) => (
    <h2
      className="relative mt-3 border-t-2 border-rose-200/5 pt-9 text-xl font-medium text-rose-200/95 sm:text-3xl"
      {...props}
    />
  ),
  h2: (props: React.ComponentProps<"h2">) => (
    <h3
      className="relative mt-3 border-t-2 border-rose-200/5 pt-9 text-xl font-medium text-rose-200/95 sm:text-2xl"
      {...props}
    />
  ),
  h3: (props: React.ComponentProps<"h3">) => (
    <h4 className="text-xl font-medium text-rose-200/95" {...props} />
  ),
  h4: (props: React.ComponentProps<"h4">) => (
    <h5 className="text-lg font-medium text-rose-200/95" {...props} />
  ),
  hr: (props: React.ComponentProps<"hr">) => (
    <hr className="border-t-2 border-rose-200/5" {...props} />
  ),
  ul: (props: React.ComponentProps<"ul">) => (
    <ul
      className="space-y-3 [li>&]:mt-3 [&>li]:relative [&>li]:pl-7 before:[&>li]:absolute before:[&>li]:left-1 before:[&>li]:top-2 before:[&>li]:h-1.5 before:[&>li]:w-1.5 before:[&>li]:rounded-full before:[&>li]:bg-rose-200/20"
      {...props}
    />
  ),

}
