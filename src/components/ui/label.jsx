import { cn } from "@/lib/utils"

function Label({ className, ...props }) {
  return (
    <label
      className={cn(
        "text-sm font-medium leading-none text-gray-700",
        className
      )}
      {...props}
    />
  )
}

export { Label }

