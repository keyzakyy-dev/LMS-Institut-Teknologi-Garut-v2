import { useTranslation } from "react-i18next"
import { Monitor, Building2, Database, HardHat, Factory, ArrowRight, ChevronRight } from "lucide-react"

import { useInView } from "@/hooks/use-in-view"
import imgInformatika from "@/assets/prodi/informatika.jpg"
import imgArsitektur from "@/assets/prodi/arsitektur.jpg"
import imgSistemInformasi from "@/assets/prodi/sistem-informasi.jpg"
import imgSipil from "@/assets/prodi/sipil.jpg"
import imgIndustri from "@/assets/prodi/industri.jpg"

const PRODI = [
  { key: "informatika", icon: Monitor, img: imgInformatika, span: "col-span-2" },
  { key: "arsitektur", icon: Building2, img: imgArsitektur, span: "" },
  { key: "sistemInformasi", icon: Database, img: imgSistemInformasi, span: "" },
  { key: "sipil", icon: HardHat, img: imgSipil, span: "" },
  { key: "industri", icon: Factory, img: imgIndustri, span: "" },
]

export function ProgramStudi() {
  const { t } = useTranslation()
  const { ref, inView } = useInView(0.15)

  return (
    <section id="program-studi" className="w-full bg-background py-14 md:py-20">
      <div ref={ref} className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6">
        <div className={`mb-8 text-center transition-all duration-700 ${inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("programStudi.judul")}</h2>
          <p className="mt-2 text-muted-foreground">{t("programStudi.deskripsi")}</p>
        </div>
        <div className="grid grid-cols-2 gap-3 lg:auto-rows-[16rem] lg:grid-cols-3 lg:gap-4">
          {PRODI.map((prodi, i) => {
            const Icon = prodi.icon
            const isFeatured = prodi.key === "informatika"
            const animCls = inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"

            return (
              <div
                key={prodi.key}
                style={isFeatured ? undefined : { transitionDelay: `${i * 100}ms` }}
                className={`group relative overflow-hidden rounded-xl transition-all duration-700 ${prodi.span} ${animCls}`}
              >
                <img
                  src={prodi.img}
                  alt=""
                  className="pointer-events-none absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className={`pointer-events-none absolute inset-0 ${
                    isFeatured
                      ? "bg-gradient-to-t from-sky-950/95 via-sky-900/70 to-sky-800/40 group-hover:from-sky-950/90"
                      : "bg-gradient-to-t from-sky-950/95 via-sky-900/65 to-sky-700/30 group-hover:from-sky-950/85"
                  } transition-colors duration-300`}
                />

                {isFeatured ? (
                  <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
                    <div className="flex items-start gap-4">
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-sm sm:size-14">
                        <Icon className="size-6 sm:size-7" />
                      </span>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white sm:text-2xl">{t(`programStudi.${prodi.key}`)}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-white/85 sm:text-base">
                          {t(`programStudi.${prodi.key}_desc`)}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-1 text-sm font-medium text-white/80 transition-colors group-hover:text-white sm:mt-6">
                      {t("programStudi.jelajahi")}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                ) : (
                  <div className="relative flex h-full flex-col justify-between p-4 sm:p-5">
                    <div className="flex items-center gap-3">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/15 text-white backdrop-blur-sm sm:size-10">
                        <Icon className="size-4 sm:size-5" />
                      </span>
                      <h3 className="text-base font-semibold text-white sm:text-lg">{t(`programStudi.${prodi.key}`)}</h3>
                    </div>
                    <div>
                      <p className="mb-3 text-xs leading-relaxed text-white/80 sm:text-sm">
                        {t(`programStudi.${prodi.key}_desc`)}
                      </p>
                      <div className="flex items-center gap-1 text-xs font-medium text-white/70 transition-colors group-hover:text-white sm:text-sm">
                        {t("programStudi.jelajahi")}
                        <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}