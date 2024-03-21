import style from "./Button.module.css";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "warning";
  click: () => void;
}
function Button({ children, color, click }: Props) {
  return (
    <div
      className={[style.btn, style["btn-" + color]].join(" ")}
      onClick={click}
    >
      {children}
    </div>
  );
}

export default Button;
