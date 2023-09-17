interface Align {
  ia: "items-start"
  ie: "items-end"
  ic: "items-center"
  ib: "items-baseline"
  is: "items-stretch"
}

interface props extends React.HTMLProps<HTMLDivElement> {
  align?:
  "items-start" |
  "items-end" |
  "items-center" |
  "items-baseline" |
  "items-stretch" |
  undefined;
}
export default function GridTwo({ align, ...props }: props) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-5 ${align} ${props.className}`}>
      {props.children}
    </div>
  );
}
