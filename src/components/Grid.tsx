export default function GridTwo({ ...props }) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-5 ${props.className}`}>
        {props.children}
    </div>
  );
}
