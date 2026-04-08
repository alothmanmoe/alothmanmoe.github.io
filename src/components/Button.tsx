import * as React from "react"

const buttonClassName =
    "inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground text-sm font-medium h-9 px-4 py-2 transition-colors hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"

type ButtonProps = React.ComponentProps<"button">

function Button({ className, ...props }: ButtonProps) {
    return <button className={`${buttonClassName} ${className}`} {...props} />
}

export { Button }
