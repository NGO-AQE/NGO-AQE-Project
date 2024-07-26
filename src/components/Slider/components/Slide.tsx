import { FC, PropsWithChildren, useContext } from 'react';
import { SliderContext } from '../SliderContext';

// wrapper for each slide provides neccesary styles for correct display of slide
export const Slide: FC<PropsWithChildren> = ({ children }) => {
  const { flexBasis } = useContext(SliderContext);

  return (
    <div className="flex-none min-w-0 px-3 max-w-full" style={{ flexBasis }}>
      {children}
    </div>
  );
};
