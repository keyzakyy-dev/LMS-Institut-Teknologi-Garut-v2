import { useTranslation } from "react-i18next"
import { Mail, Phone, Clock, MessageCircle, ExternalLink, HelpCircle } from "lucide-react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { useInView } from "@/hooks/use-in-view"

const FAQ_ITEMS = ["q1", "q2", "q3", "q4"]

export function Faq() {
  const { t } = useTranslation()
  const { ref, inView } = useInView(0.2)

  return (
    <section id="faq" className="w-full bg-muted/30 py-16 md:py-24">
      <div ref={ref} className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6">
        <div className={`mb-10 text-center transition-all duration-700 ${inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("faq.judul")}</h2>
          <p className="mt-2 text-muted-foreground">{t("faq.deskripsi")}</p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-3">
            {FAQ_ITEMS.map((q, i) => (
              <div
                key={q}
                className={`transition-all duration-700 ${inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value={q}>
                    <AccordionTrigger>{t(`faq.${q}`)}</AccordionTrigger>
                    <AccordionContent>{t(`faq.a${q.slice(1)}`)}</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}
          </div>

          <div
            className={`h-fit transition-all duration-700 lg:sticky lg:top-24 ${inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
            style={{ transitionDelay: "300ms" }}
          >
            <Card className="gap-0 overflow-hidden border-sky-200 bg-card p-0">
              <CardHeader className="p-6">
                <div className="flex items-start gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-sky-200 bg-sky-50 text-sky-600">
                    <HelpCircle className="size-6" />
                  </span>
                  <div>
                    <CardTitle className="text-xl font-bold">{t("faq.bantuanJudul")}</CardTitle>
                    <CardDescription className="mt-1 text-sm">
                      {t("faq.bantuanDeskripsi")}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-4 p-6">
                <ul className="flex flex-col gap-3 text-base">
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <Mail className="size-5 shrink-0 text-sky-600" />
                    <a href="mailto:info@itg.ac.id" className="hover:text-foreground">
                      {t("faq.bantuanEmail")}
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <Phone className="size-5 shrink-0 text-sky-600" />
                    <a href="tel:+62262232773" className="hover:text-foreground">
                      {t("faq.bantuanTelp")}
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <Clock className="size-5 shrink-0 text-sky-600" />
                    {t("faq.bantuanJam")}
                  </li>
                </ul>
                <div className="flex flex-col gap-3 sm:flex-row sm:pt-1">
                  <Button className="h-12 w-full bg-sky-600 hover:bg-sky-700 sm:flex-1 sm:h-10" asChild>
                    <a
                      href="https://api.whatsapp.com/send?phone=085222884007"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="size-5" />
                      {t("faq.bantuanWhatsapp")}
                    </a>
                  </Button>
                  <Button variant="outline" className="h-12 w-full sm:flex-1 sm:h-10" asChild>
                    <a href="#">
                      {t("faq.bantuanLogin")}
                      <ExternalLink className="size-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}