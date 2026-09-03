import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { ArrowRight, HelpCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import heroImg from "@/assets/hero.png"
import { useInView } from "@/hooks/use-in-view"

export function Hero() {
  const { t } = useTranslation()
  const { ref, inView } = useInView(0.3)

  return (
    <section id="beranda" className="relative w-full overflow-hidden bg-gradient-to-b from-sky-50/50 to-background">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 58px, oklch(0.556 0.016 285.938 / 0.07) 58px, oklch(0.556 0.016 285.938 / 0.07) 60px),
            repeating-linear-gradient(90deg, transparent, transparent 58px, oklch(0.556 0.016 285.938 / 0.07) 58px, oklch(0.556 0.016 285.938 / 0.07) 60px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
        }}
      />
      <div ref={ref} className="relative mx-auto flex w-full max-w-screen-2xl flex-col items-center gap-8 px-4 py-16 sm:px-6 md:flex-row md:py-24">
        <div className={`flex flex-1 flex-col items-center gap-6 text-center transition-all duration-700 md:items-start md:pl-28 md:text-left ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {t("hero.headline")}
          </h1>
          <p className="max-w-lg text-lg text-muted-foreground sm:text-xl">
            {t("hero.deskripsi")}
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:justify-start">
            <Button size="lg" className="bg-sky-500 hover:bg-sky-600" asChild>
              <Link to="/login">
                {t("hero.ctaMulai")}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#faq">
                <HelpCircle className="size-4" />
                {t("hero.ctaBantuan")}
              </a>
            </Button>
          </div>
        </div>
        <div className={`hidden flex-1 transition-all delay-300 duration-700 md:block ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <div className="mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-2xl sm:max-w-sm md:max-w-md">
            <img
              src={heroImg}
              alt="Ilustrasi pembelajaran LMS Institut Teknologi Garut"
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}