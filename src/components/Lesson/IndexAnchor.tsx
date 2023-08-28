interface IndexAnchorProps {
    content: string,
    props?: React.HTMLProps<HTMLAnchorElement>
}
export default function IndexAnchor({ content, ...props }: IndexAnchorProps) {
    return <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href={`#${content}`}>{
        content}</a>
}