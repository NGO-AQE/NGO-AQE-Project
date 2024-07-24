import { FC, PropsWithChildren, useContext } from 'react';
import { SliderContext } from '../SliderContext';
import { ButtonGroup } from './ButtonsGroup';

// place for slides it should be only one at given moment isnside slider
// extracted here to avoid code repetition
export const Slides: FC<PropsWithChildren> = ({ children }) => {
  const { buttonsPlacment, emblaRef } = useContext(SliderContext);
  return (
    <div className="overflow-hidden relative mt-8 lg:mt-16" ref={emblaRef}>
      <div className="flex">{children}</div>
      {buttonsPlacment === 'slider' && <ButtonGroup />}
    </div>
  );
};
