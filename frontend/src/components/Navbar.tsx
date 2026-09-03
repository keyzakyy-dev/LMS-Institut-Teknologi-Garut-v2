import * as React from "react"
import { Link } from "react-router-dom"
import { Menu, Megaphone, ExternalLink, Home, GraduationCap, HelpCircle } from "lucide-react"
import { useTranslation } from "react-i18next"

import { Logo } from "@/components/Logo"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { LanguageSwitcher } from "@/components/LanguageSwitcher"

function LogoLink() {
  return (
    <a href="#beranda" className="flex items-center gap-2" aria-label="Institut Teknologi Garut">
      <Logo />
      <span className="hidden text-base font-semibold leading-tight whitespace-nowrap sm:block">
        Institut Teknologi Garut
      </span>
    </a>
  )
}

function DesktopNav() {
  const { t } = useTranslation()

  return (
    <nav className="hidden items-center gap-1 md:flex" aria-label="Navigasi utama">
      <Button variant="ghost" className="gap-2 text-base" asChild>
        <a href="#beranda">
          <Home className="size-4 text-sky-500" />
          {t("nav.beranda")}
        </a>
      </Button>
      <Button variant="ghost" className="gap-2 text-base" asChild>
        <a href="#program-studi">
          <GraduationCap className="size-4 text-sky-500" />
          {t("nav.programStudi")}
        </a>
      </Button>
      <Button variant="ghost" className="gap-2 text-base" asChild>
        <a href="#faq">
          <HelpCircle className="size-4 text-sky-500" />
          {t("nav.faq")}
        </a>
      </Button>
      <AnnouncementDrawer />
    </nav>
  )
}

function LoginButton({ className }: { className?: string }) {
  const { t } = useTranslation()
  return (
    <Button size="sm" className={`bg-sky-500 hover:bg-sky-600 text-base ${className ?? ""}`} asChild>
      <Link to="/login">
        {t("nav.login")}
        <ExternalLink className="size-4" />
      </Link>
    </Button>
  )
}

export function Navbar() {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [announceOpen, setAnnounceOpen] = React.useState(false)

  const closeAndOpenAnnouncements = () => {
    setMenuOpen(false)
    setAnnounceOpen(true)
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-screen-2xl items-center justify-between gap-4 px-4 sm:px-6">
        <LogoLink />
        <DesktopNav />
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <div className="hidden md:block">
            <LoginButton />
          </div>
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Buka menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex w-[300px] flex-col p-0 sm:max-w-sm">
              <SheetHeader className="border-b px-4 py-3">
                <div className="flex items-center gap-2">
                  <Logo />
                  <SheetTitle className="text-base">Menu</SheetTitle>
                </div>
              </SheetHeader>
              <nav className="flex flex-col gap-1 p-3" aria-label="Navigasi mobile">
                <Button variant="ghost" className="h-11 w-full justify-start gap-3 text-base" asChild>
                  <a href="#beranda" onClick={() => setMenuOpen(false)}>
                    <Home className="size-5 text-sky-500" />
                    {t("nav.beranda")}
                  </a>
                </Button>
                <Button variant="ghost" className="h-11 w-full justify-start gap-3 text-base" asChild>
                  <a href="#program-studi" onClick={() => setMenuOpen(false)}>
                    <GraduationCap className="size-5 text-sky-500" />
                    {t("nav.programStudi")}
                  </a>
                </Button>
                <Button variant="ghost" className="h-11 w-full justify-start gap-3 text-base" asChild>
                  <a href="#faq" onClick={() => setMenuOpen(false)}>
                    <HelpCircle className="size-5 text-sky-500" />
                    {t("nav.faq")}
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  className="h-11 w-full justify-start gap-3 text-base"
                  onClick={closeAndOpenAnnouncements}
                >
                  <Megaphone className="size-5 text-sky-500" />
                  {t("nav.pengumuman")}
                </Button>
              </nav>
              <div className="mt-auto flex flex-col gap-3 border-t p-4">
                <LoginButton className="w-full" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <AnnouncementDrawer open={announceOpen} onOpenChange={setAnnounceOpen} trigger={false} />
    </header>
  )
}

export function AnnouncementDrawer({
  open,
  onOpenChange,
  trigger = true,
}: {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  trigger?: boolean
}) {
  const { t } = useTranslation()
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      {trigger && (
        <SheetTrigger asChild>
          <Button variant="ghost" size="sm" className="gap-2 text-base">
            <Megaphone className="size-4 text-sky-500" />
            {t("nav.pengumuman")}
          </Button>
        </SheetTrigger>
      )}
      <SheetContent side="right" className="flex w-[320px] flex-col p-0 sm:max-w-sm">
        <SheetHeader className="border-b px-4 py-3">
          <SheetTitle className="flex items-center gap-2 text-base">
            <Megaphone className="size-4 text-sky-500" />
            {t("announcement.judul")}
          </SheetTitle>
        </SheetHeader>
        <div className="flex-1 p-4">
          <p className="text-base text-muted-foreground">{t("announcement.kosong")}</p>
        </div>
      </SheetContent>
    </Sheet>
  )
}