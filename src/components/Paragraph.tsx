import { ReactNode } from "react"

interface Props extends React.HTMLProps<HTMLParagraphElement>{
    children?: ReactNode
    className?: string
    // any props that come into the component
}

export default function Paragraph({ children, className, ...props }: Props) {
    return <p className={`text-gray-600 dark:text-gray-400 mb-4 ${className}`} {...props}>{children}</p>
}