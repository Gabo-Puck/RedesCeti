export default function GridItemCenter({ className = "justify-self-center", ...props }) {
    return <div className={className} style={{
        justifySelf: "center"
    }}>
        {props.children}
    </div>
}