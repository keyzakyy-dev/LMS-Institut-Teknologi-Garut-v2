import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "overflow-hidden rounded-xl border bg-card transition-all",
        "data-[state=open]:border-sky-300",
        className
      )}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 rounded-xl px-4 py-4 text-left text-base font-medium transition-colors outline-none hover:bg-muted/50 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 sm:px-5",
          "data-[state=open]:bg-sky-50 data-[state=open]:text-sky-700",
          className
        )}
        {...props}
      >
        {children}
        <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-muted transition-colors group-data-[state=open]:bg-sky-500 group-data-[state=open]:text-white">
          <ChevronDownIcon className="size-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-base"
      {...props}
    >
      <div className={cn("px-4 pb-5 pt-2 text-muted-foreground sm:px-5", className)}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }