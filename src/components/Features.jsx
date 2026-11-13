import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { LayoutDashboard, Users, Zap, BarChart3 } from "lucide-react"
import FadeIn from "@/components/ui/fade-in"

const features = [
  {
    icon: LayoutDashboard,
    title: "Kanban Boards",
    description:
      "Organize tasks visually with customizable boards. Drag and drop cards between columns to track progress at a glance.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Work together with comments, @mentions, and file sharing. Everyone stays on the same page without switching tools.",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description:
      "Set up rules to automate repetitive work — move cards, assign tasks, and send reminders without lifting a finger.",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description:
      "See how your team is performing with simple charts. Track what's done, what's in progress, and what's blocked.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
              Features
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Everything your team needs
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Simple but powerful tools to help your team stay organized and ship faster.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 0.1}>
              <Card className="hover:shadow-md transition-shadow group h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-2 group-hover:bg-blue-600 transition-colors">
                    <feature.icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
