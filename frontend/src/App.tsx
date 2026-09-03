import { Routes, Route } from "react-router-dom"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { ProgramStudi } from "@/components/ProgramStudi"
import { Faq } from "@/components/Faq"
import { Footer } from "@/components/Footer"
import { LoginPage } from "@/pages/LoginPage"

function LandingPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProgramStudi />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}

export default App