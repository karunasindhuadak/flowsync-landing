import { cn } from "@/lib/utils"

function Badge({ className, variant = "default", ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
        variant === "default" && "bg-blue-100 text-blue-700",
        variant === "secondary" && "bg-gray-100 text-gray-700",
        variant === "outline" && "border border-gray-300 text-gray-700",
        className
      )}
      {...props}
    />
  )
}

export { Badge }

