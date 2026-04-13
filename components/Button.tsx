import { ReactNode } from "react";

export default function Button({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      className="w-50 px-6 py-3 bg-blue-500 text-white rounded-lg"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
