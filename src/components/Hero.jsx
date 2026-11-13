import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play } from "lucide-react"
import FadeIn from "@/components/ui/fade-in"

export default function Hero() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 -z-10" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <FadeIn direction="up">
            <div className="text-center lg:text-left">
              <Badge className="mb-4">✨ Now in Public Beta</Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
                Manage Projects{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Effortlessly
                </span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                FlowSync brings your team together with intuitive task management,
                real-time collaboration, and smart automation — all in one
                beautiful workspace.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" onClick={() => scrollTo("#contact")}>
                  Start Free Trial
                  <ArrowRight className="ml-1 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollTo("#about")}
                >
                  <Play className="mr-1 h-5 w-5" />
                  See How It Works
                </Button>
              </div>

              <p className="mt-4 text-sm text-gray-400">
                No credit card required · 14-day free trial
              </p>
            </div>
          </FadeIn>

          {/* Dashboard mockup */}
          <FadeIn direction="right" delay={0.2}>
            <div className="relative hidden lg:block">
              <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="ml-4 flex-1 bg-gray-100 rounded-md h-6" />
                </div>
                <div className="flex gap-3">
                  <div className="w-1/3 bg-blue-50 rounded-lg p-4 space-y-2">
                    <div className="text-xs font-semibold text-blue-600 mb-2">To Do</div>
                    <div className="bg-white rounded-md p-2 shadow-sm text-xs text-gray-600">Design landing page</div>
                    <div className="bg-white rounded-md p-2 shadow-sm text-xs text-gray-600">Set up CI/CD</div>
                  </div>
                  <div className="w-1/3 bg-yellow-50 rounded-lg p-4 space-y-2">
                    <div className="text-xs font-semibold text-yellow-600 mb-2">In Progress</div>
                    <div className="bg-white rounded-md p-2 shadow-sm text-xs text-gray-600">Build API endpoints</div>
                  </div>
                  <div className="w-1/3 bg-green-50 rounded-lg p-4 space-y-2">
                    <div className="text-xs font-semibold text-green-600 mb-2">Done</div>
                    <div className="bg-white rounded-md p-2 shadow-sm text-xs text-gray-600">User research ✓</div>
                    <div className="bg-white rounded-md p-2 shadow-sm text-xs text-gray-600">Wireframes ✓</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-blue-600 text-white rounded-xl px-4 py-2 shadow-lg text-sm font-medium">
                🚀 3 tasks completed!
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-500 text-white rounded-xl px-4 py-2 shadow-lg text-sm font-medium">
                ✅ Sprint on track
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
