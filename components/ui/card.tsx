import { type HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

type CardProps = HTMLAttributes<HTMLDivElement>

export function Card({ className, ...props }: CardProps) {
  return <div className={cn("rounded-lg border border-border bg-background shadow-sm", className)} {...props} />
}

export function CardHeader({ className, ...props }: CardProps) {
  return <div className={cn("flex flex-col gap-1 border-b border-border px-6 py-4", className)} {...props} />
}

export function CardTitle({ className, ...props }: CardProps) {
  return <h3 className={cn("text-sm font-semibold leading-none tracking-tight", className)} {...props} />
}

export function CardDescription({ className, ...props }: CardProps) {
  return <p className={cn("text-xs text-muted-foreground", className)} {...props} />
}

export function CardContent({ className, ...props }: CardProps) {
  return <div className={cn("px-6 py-4", className)} {...props} />
}

export function CardFooter({ className, ...props }: CardProps) {
  return <div className={cn("flex items-center border-t border-border px-6 py-4", className)} {...props} />
}

