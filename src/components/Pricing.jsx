import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import FadeIn from "@/components/ui/fade-in"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/ month",
    description: "Great for trying out FlowSync with a small team.",
    features: [
      "Up to 5 team members",
      "3 project boards",
      "Basic task management",
      "1 GB storage",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "/ user / month",
    description: "For teams that need more boards, automation, and insights.",
    features: [
      "Unlimited members",
      "Unlimited boards",
      "Workflow automation",
      "Analytics dashboard",
      "Priority support",
      "50 GB storage",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
]

export default function Pricing() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
              Pricing
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Simple pricing, no surprises
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Start free and upgrade when you need more.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.15}>
              <Card
                className={`relative flex flex-col h-full ${
                  plan.popular
                    ? "border-blue-600 border-2 shadow-lg"
                    : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-3 py-1">
                      Recommended
                    </Badge>
                  </div>
                )}

                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-500 text-sm">{plan.period}</span>
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                    onClick={() => scrollTo("#contact")}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
