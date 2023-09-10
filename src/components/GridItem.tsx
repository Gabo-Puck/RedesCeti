export default function GridItem({ ...props }:React.HTMLProps<HTMLDivElement>) {
    return <div {...props}>
        {props.children}
    </div>
}