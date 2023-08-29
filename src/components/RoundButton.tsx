import { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import '../styles/round-button.css';

export default function RoundButton({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={classNames('round-button', className)} {...props} />
  );
}
