import { useTranslation } from "react-i18next"
import { MapPin, Mail, Phone } from "lucide-react"

import { Logo } from "@/components/Logo"
import { Separator } from "@/components/ui/separator"

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/official.itg",
    fill: false,
    path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
  },
  {
    label: "X",
    href: "https://twitter.com/itg_campus",
    fill: false,
    path: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@InstitutTeknologiGarut",
    fill: false,
    path: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33zM9.75 15.02l5.75-3.27-5.75-3.27v6.54z",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/itg_official",
    fill: false,
    path: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
  },
  {
    label: "WhatsApp",
    href: "https://api.whatsapp.com/send?phone=085222884007",
    fill: true,
    path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z",
  },
]

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="w-full border-t bg-background">
      <div className="mx-auto w-full max-w-screen-2xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Logo />
              <span className="text-base font-semibold">Institut Teknologi Garut</span>
            </div>
            <p className="text-base text-muted-foreground">{t("footer.deskripsi")}</p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-base font-semibold">{t("footer.navigasi")}</h3>
            <nav className="flex flex-col gap-2 text-base text-muted-foreground">
              <a href="#beranda" className="hover:text-foreground">{t("nav.beranda")}</a>
              <a href="#program-studi" className="hover:text-foreground">{t("nav.programStudi")}</a>
              <a href="#faq" className="hover:text-foreground">{t("nav.faq")}</a>
              <a href="#" className="hover:text-foreground">{t("footer.tentang")}</a>
            </nav>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-base font-semibold">{t("footer.kontak")}</h3>
            <ul className="flex flex-col gap-2 text-base text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-1 size-4 shrink-0" />
                Jl. Mayor Syamsu No.1, Jayaraga, Kec. Tarogong Kidul, Kab. Garut, Jawa Barat, Indonesia 44151
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0" />
                <a href="mailto:info@itg.ac.id" className="hover:text-foreground">
                  info@itg.ac.id
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 shrink-0" />
                <a href="tel:+62262232773" className="hover:text-foreground">
                  0262-232773
                </a>
              </li>
            </ul>
            <div className="flex gap-3 pt-2">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-sky-100 hover:text-sky-600"
                >
                  <svg viewBox="0 0 24 24" fill={social.fill ? "currentColor" : "none"} stroke={social.fill ? "none" : "currentColor"} strokeWidth={social.fill ? "0" : "1.5"} strokeLinecap="round" strokeLinejoin="round" className="size-5">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
        <Separator className="my-6" />
        <p className="text-center text-sm text-muted-foreground">
          &copy; {year} {t("footer.copyright")} Institut Teknologi Garut. {t("footer.allRights")}
        </p>
      </div>
    </footer>
  )
}