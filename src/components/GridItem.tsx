export default function GridItem({ ...props }) {
    return <div {...props}>
        {props.children}
    </div>
}