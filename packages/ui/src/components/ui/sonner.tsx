import { useTheme } from "next-themes"
import { Toaster as Sonner, ToasterProps,toast } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {


  return (
    <Sonner
      theme="system"
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster,toast }
