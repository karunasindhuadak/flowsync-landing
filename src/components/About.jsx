import { ClipboardList, Settings, Rocket } from "lucide-react"
import FadeIn from "@/components/ui/fade-in"

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Create Your Workspace",
    description:
      "Sign up in seconds, name your workspace, and invite your team. No setup or installation required — everything runs in your browser.",
  },
  {
    icon: Settings,
    step: "02",
    title: "Customize Your Workflow",
    description:
      "Set up boards, lists, and automation rules that fit your process. Choose from templates or build from scratch — FlowSync adapts to you.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Ship Faster Together",
    description:
      "Track progress in real time, unblock teammates instantly, and celebrate wins. FlowSync keeps everyone aligned and moving forward.",
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
              How It Works
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Get started in three simple steps
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              FlowSync is designed to get out of your way so your team can focus
              on what matters — building great products.
            </p>
          </div>
        </FadeIn>

        {/* Steps — staggered animation */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((item, i) => (
            <FadeIn key={item.step} delay={i * 0.15}>
              <div className="relative text-center">
                {/* Connector line (hidden on mobile, shown on md+) */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] border-t-2 border-dashed border-gray-200" />
                )}

                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg mb-6">
                    <item.icon className="h-10 w-10 text-white" />
                  </div>

                  <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
                    Step {item.step}
                  </span>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed max-w-xs">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
