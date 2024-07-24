import React from 'react';
import s from './Button.module.scss';

interface ButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  onClick = () => {},
  className,
}) => {
  return (
    <button
      className={`${s.button} ${s.default} ${className || ''}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
