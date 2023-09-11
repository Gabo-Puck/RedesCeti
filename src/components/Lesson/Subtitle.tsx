interface SubtitleProps {
  content: string;
  props?: React.HTMLProps<HTMLHeadingElement>;
}
export default function Subtitle({ content, ...props }: SubtitleProps) {
  return (
    <h2
      id={content}
      style={{ fontWeight: "bold", textAlign: "left", fontSize: "20px" }}
      {...props}
    >
      {content}
    </h2>
  );
}
