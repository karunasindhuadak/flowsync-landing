import { Zap } from "lucide-react"
import FadeIn from "@/components/ui/fade-in"

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: "smooth" })
  }

  const links = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#about" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FadeIn>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Brand */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
              className="flex items-center gap-2 text-white font-bold text-xl"
            >
              <Zap className="h-6 w-6 text-blue-400" />
              FlowSync
            </a>

            {/* Nav links */}
            <div className="flex flex-wrap justify-center gap-6">
              {links.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} FlowSync. All rights reserved.
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}
