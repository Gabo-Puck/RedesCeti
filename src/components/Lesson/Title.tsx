interface Title extends React.HTMLProps<HTMLHeadingElement> {
  content: string;
  props?: React.HTMLProps<HTMLHeadingElement>;
}
export default function Title({ content, ...props }: Title) {
  return (
    <h1
      style={{ fontWeight: "bold", textAlign: "center", fontSize: "30px" }}
      {...props}
    >
      {content}
    </h1>
  );
}
