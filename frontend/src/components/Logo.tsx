import logoItg from "@/assets/logo-itg.png"
import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white",
        className
      )}
    >
      <img src={logoItg} alt="Logo Institut Teknologi Garut" className="size-full object-contain" />
    </span>
  )
}