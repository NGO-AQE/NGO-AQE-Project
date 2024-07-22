import { FC, useContext } from 'react';
import leftArrow from '../../assets/icons/left-arrow.svg';
import rightArrow from '../../assets/icons/right-arrow.svg';
import classNames from 'classnames';
import { SliderContext } from './SliderContext';

export const ButtonGroup: FC = () => {
  const { scrollNext, scrollPrev, buttonsPlacment } = useContext(SliderContext);

  return (
    <div
      className={classNames('items-center', {
        'hidden lg:flex lg:gap-10': buttonsPlacment === 'title',
        'flex justify-between absolute left-0 right-0 top-0 bottom-0':
          buttonsPlacment === 'slider',
      })}
    >
      <button className="p-0 w-12 h-12">
        <img
          className="w-12 h-12"
          src={leftArrow}
          alt="prev"
          onClick={scrollPrev}
        />
      </button>
      <button className="p-0 h-12 w-12">
        <img
          className="h-12 w-12"
          src={rightArrow}
          alt="next"
          onClick={scrollNext}
        />
      </button>
    </div>
  );
};
