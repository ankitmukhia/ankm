import React from "react"
import { Button } from '@/components/ui/button';
import { Sticker } from '@/components/ui/sticker';
import { NextImage } from '@/components/ui/image'
import type { ImageProps } from 'next/image'

export const components = {
  Button,
  Sticker,
  h1: (props: React.ComponentProps<"h1">) => (
    <h2
      className=""
      {...props}
    />
  ),
  h2: (props: React.ComponentProps<"h2">) => (
    <h3
      className=""
      {...props}
    />
  ),
  h3: (props: React.ComponentProps<"h3">) => (
    <h4 className="" {...props} />
  ),
  h4: (props: React.ComponentProps<"h4">) => (
    <h5 className="" {...props} />
  ),
  ul: (props: React.ComponentProps<"ul">) => (
    <ul
      className="space-y-3 [li>&]:mt-3 [&>li]:relative [&>li]:pl-7 before:[&>li]:absolute before:[&>li]:left-1 before:[&>li]:top-2 before:[&>li]:h-1.5 before:[&>li]:w-1.5 before:[&>li]:rounded-full before:[&>li]:bg-rose-200/20"
      {...props}
    />
  ),
  Img: ({ ...props}: {} & ImageProps) => (
   <div className="my-5">
     <NextImage
       {...props}
     />
  </div>
  ),
  a: ({ href = "", ...props }: React.ComponentProps<"a">) => (
    <a 
      className={"hover:underline text-blue-400/60"}
      href={href} 
      target="_blank" 
      {...props} 
    />
  ),
  ol: (props: React.ComponentProps<"ol">) => (
    <ol className="list-decimal" {...props} />
  )
}
