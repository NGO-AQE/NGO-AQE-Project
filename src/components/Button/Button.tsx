import React from 'react';
import s from './Button.module.scss';

interface ButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  onClick = () => {},
  className,
  type = 'button',
}) => {
  return (
    <button
      type={type}
      className={`${s.button} ${s.default} ${className || ''}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
