interface SubtitleProps {
    content: string
    props?: React.HTMLProps<HTMLHeadingElement>
}
export default function Subtitle({ content, ...props }: SubtitleProps) {
    return <h2 id={content} className="text-4xl font-bold dark:text-white" {...props}>{content}</h2>
}