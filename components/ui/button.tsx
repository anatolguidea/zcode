import { type ButtonHTMLAttributes, type ReactElement, type HTMLAttributes, cloneElement, forwardRef } from "react"
import { cn } from "@/lib/utils"

type ButtonVariant = "default" | "outline" | "ghost" | "link"
type ButtonSize = "sm" | "md" | "lg" | "icon"

type ButtonProps = {
  asChild?: boolean
  variant?: ButtonVariant
  size?: ButtonSize
} & ButtonHTMLAttributes<HTMLButtonElement>

type SlotProps = {
  children: ReactElement
} & HTMLAttributes<HTMLElement>

const Slot = forwardRef<HTMLElement, SlotProps>(function Slot({ children, className, ...props }, ref) {
  return cloneElement(children, {
    ...props,
    ref,
    className: cn(children.props.className, className)
  })
})

const baseButton = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-background"

const variantClasses: Record<ButtonVariant, string> = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  outline: "border border-border bg-background hover:bg-accent hover:text-accent-foreground",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  link: "text-primary underline-offset-4 hover:underline"
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-xs",
  md: "h-9 px-4",
  lg: "h-10 px-6",
  icon: "h-9 w-9"
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = "default", size = "md", asChild, children, ...props },
  ref
) {
  const buttonClassName = cn(baseButton, variantClasses[variant], sizeClasses[size], className)

  if (asChild && typeof children === "object" && children !== null && "type" in children) {
    return (
      <Slot className={buttonClassName} {...(props as HTMLAttributes<HTMLElement>)}>
        {children as ReactElement}
      </Slot>
    )
  }

  return (
    <button ref={ref} className={buttonClassName} {...props}>
      {children}
    </button>
  )
})
