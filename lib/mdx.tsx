import React from "react"

export const components = {
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
}
