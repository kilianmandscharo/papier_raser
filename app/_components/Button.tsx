import { PropsWithChildren } from "react";

interface Props {
  onClick?: () => any;
  disabled?: boolean;
}

export default function Button({
  children,
  onClick,
  disabled,
}: PropsWithChildren<Props>) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${
        disabled ? "bg-indigo-600/50" : "bg-indigo-600"
      } p-2 rounded-md`}
    >
      {children}
    </button>
  );
}
