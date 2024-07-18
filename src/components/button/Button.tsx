import React from 'react';
import s from './Button.module.scss';

interface ButtonProps {
  children?: React.ReactNode;
  title?: string | number;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  title,
  disabled = false,
  onClick = () => {},
}) => {
  return (
    <button
      className={`${s.button} ${s.default}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children || title}
    </button>
  );
};

export default Button;
