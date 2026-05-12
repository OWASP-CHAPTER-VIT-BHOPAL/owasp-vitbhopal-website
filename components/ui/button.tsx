import React from "react";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export const Button = ({
  children,
  href,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) => {
  const baseClassName =
    "inline-flex h-10 w-auto px-7 justify-center items-center rounded-2xl bg-gradient-to-b from-[#ffffff] to-[#e0e0e0] font-bold text-[var(--text-colour)] text-sm shadow-[0_1px_1px_#ffffff_inset,0_2px_4px_#00000040,0_4px_8px_-2px_#00000050] transition-transform active:scale-[0.97] hover:from-[#f0f0f0] hover:to-[#d0d0d0]";
  const mergedClassName = `${baseClassName} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={mergedClassName} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={mergedClassName} onClick={onClick} type={type}>
      {children}
    </button>
  );
};
