import * as React from "react"
import { useTranslation } from "react-i18next"
import { Link, useNavigate } from "react-router-dom"
import { ArrowLeft, Eye, EyeOff, Lock, User } from "lucide-react"

import { Logo } from "@/components/Logo"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginPage() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = React.useState(false)
  const [error, setError] = React.useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const username = String(data.get("username") ?? "").trim()
    const password = String(data.get("password") ?? "")

    if (!username || !password) {
      setError(t("login.error"))
      return
    }
    setError("")
    navigate("/")
  }

  return (
    <div className="relative flex min-h-svh flex-col overflow-hidden bg-gradient-to-b from-sky-50/50 to-background">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 63px, oklch(0.556 0.016 285.938 / 0.06) 63px, oklch(0.556 0.016 285.938 / 0.06) 65px),
            repeating-linear-gradient(90deg, transparent, transparent 63px, oklch(0.556 0.016 285.938 / 0.06) 63px, oklch(0.556 0.016 285.938 / 0.06) 65px)
          `,
          backgroundSize: "65px 65px",
        }}
      />

      <main className="relative flex flex-1 flex-col items-center justify-center gap-8 px-4 py-12">
        <Card className="w-full max-w-md gap-0 border-sky-200 bg-card">
          <CardHeader className="flex flex-col items-center gap-3 p-8 pb-4 text-center">
            <Logo className="size-20 rounded-2xl" />
            <div>
              <CardTitle className="text-2xl">{t("login.selamatDatang")}</CardTitle>
              <CardDescription className="mt-1">{t("login.deskripsi")}</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="p-8 pt-4">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="username">{t("login.username")}</Label>
                <div className="relative">
                  <User className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="username"
                    name="username"
                    autoComplete="username"
                    placeholder={t("login.usernamePlaceholder")}
                    className="pl-9"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">{t("login.password")}</Label>
                  <button
                    type="button"
                    className="cursor-pointer text-sm text-sky-600 hover:text-sky-700 hover:underline"
                  >
                    {t("login.lupaPassword")}
                  </button>
                </div>
                <div className="relative">
                  <Lock className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder={t("login.passwordPlaceholder")}
                    className="px-9"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                  </button>
                </div>
              </div>

              {error && <p className="text-sm text-destructive">{error}</p>}

              <label className="flex cursor-pointer items-center gap-2 text-sm text-muted-foreground">
                <input type="checkbox" className="size-4 rounded border-input accent-sky-600" />
                {t("login.ingatSaya")}
              </label>

              <Button type="submit" size="lg" className="w-full bg-sky-600 hover:bg-sky-700">
                {t("login.masuk")}
              </Button>
            </form>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              {t("login.noAkun")}{" "}
              <span className="cursor-pointer text-sky-600 hover:text-sky-700 hover:underline">
                {t("login.hubungiAdmin")}
              </span>
            </p>
          </CardContent>
        </Card>

        <Button variant="ghost" className="gap-2 text-base" asChild>
          <Link to="/">
            <ArrowLeft className="size-4 text-sky-500" />
            {t("login.kembali")}
          </Link>
        </Button>
      </main>

      <footer className="relative py-4 text-center text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} Institut Teknologi Garut
      </footer>
    </div>
  )
}