import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const toggleLang = () => {
    const next = i18n.language === "id" ? "en" : "id"
    i18n.changeLanguage(next)
  }

  return (
    <Button variant="ghost" size="sm" className="text-base" onClick={toggleLang} aria-label="Ganti bahasa">
      {i18n.language === "id" ? "EN" : "ID"}
    </Button>
  )
}