import React from 'react'


type ButtonProps = {
  children: React.ReactNode;
  href?: string;
};

export const Button = ({ children, href }: ButtonProps) => {
  const className = 'flex h-10 w-auto px-7 justify-center items-center rounded-full bg-white font-bold text-[var(--text-colour)] text-sm ';
  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  return (
    <div className={className}>
      {children}
    </div>
  );
}