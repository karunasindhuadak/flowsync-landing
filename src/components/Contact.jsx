import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { toast } from "sonner"
import { Send, Mail, User, MessageSquare } from "lucide-react"
import FadeIn from "@/components/ui/fade-in"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState({})
  const [dialogOpen, setDialogOpen] = useState(false)

  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required."
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address."
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required."
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters."
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validate()) return

    // Success — show toast + dialog
    toast.success("Message sent successfully!", {
      description: "We'll get back to you within 24 hours.",
    })

    setDialogOpen(true)

    // Reset form
    setFormData({ name: "", email: "", message: "" })
    setErrors({})
  }

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Info */}
          <FadeIn direction="left">
            <div>
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
                Contact Us
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Ready to get started?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Have a question or want to request a demo? Drop us a message and
                our team will get back to you within 24 hours.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Email</p>
                    <p className="text-sm text-gray-500">hello@flowsync.io</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Live Chat
                    </p>
                    <p className="text-sm text-gray-500">
                      Available Mon–Fri, 9 AM – 6 PM IST
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right: Form */}
          <FadeIn direction="right" delay={0.15}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Request a Demo
              </h3>

              <div className="space-y-5">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">
                    <User className="inline h-4 w-4 mr-1 -mt-0.5" />
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">
                    <Mail className="inline h-4 w-4 mr-1 -mt-0.5" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">
                    <MessageSquare className="inline h-4 w-4 mr-1 -mt-0.5" />
                    Message
                  </Label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your team and what you're looking for..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className={`flex w-full rounded-lg border bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500 transition-colors resize-none ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500">{errors.message}</p>
                  )}
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </div>
            </form>
          </FadeIn>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent onClose={() => setDialogOpen(false)}>
          <DialogHeader>
            <DialogTitle>🎉 Message Sent!</DialogTitle>
            <DialogDescription>
              Thank you for reaching out! Our team will review your message and
              get back to you within 24 hours.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
            <p className="text-sm text-green-700">
              <strong>What happens next?</strong>
              <br />
              A member of our team will reach out to schedule a personalized demo
              of FlowSync tailored to your team's needs.
            </p>
          </div>
          <div className="mt-6 flex justify-end">
            <Button onClick={() => setDialogOpen(false)}>Got it!</Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
