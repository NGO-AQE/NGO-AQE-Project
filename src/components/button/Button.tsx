import React from 'react';
import s from './Button.module.scss';

interface ButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  onClick = () => {},
}) => {
  return (
    <button
      className={`${s.button} ${s.default}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
