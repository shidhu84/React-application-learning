interface Props {
  children: string;
  color?: "primary" | "secondary" | "warning";
  click: () => void;
}
function Button({ children, color, click }: Props) {
  return (
    <div className={`btn btn-${color}`} onClick={click}>
      {children}
    </div>
  );
}

export default Button;
