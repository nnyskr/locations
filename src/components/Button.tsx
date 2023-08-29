import '../styles/button.css';
import { ButtonHTMLAttributes } from 'react';

export default function Button({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`button typography-s${className ? ` ${className}` : ''}`}
    />
  );
}
