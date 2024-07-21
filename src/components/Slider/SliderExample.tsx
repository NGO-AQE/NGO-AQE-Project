import { FC } from 'react';
import { Slide, Slider } from './Slider';
import classNames from 'classnames';

interface BasicCardProps {
  isStaticWidth?: boolean;
  index: number;
}

const BasicCard: FC<BasicCardProps> = ({ isStaticWidth = false, index }) => (
  <div className={classNames('flex', 'flex-col', { 'w-40': isStaticWidth })}>
    <img src="https://placehold.co/160x160.png" />
    <div>
      <h1 className="text-xl">{`Slide: ${index}`}</h1>
      <p className="text-base">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim sequi
        quos, aperiam atque recusandae excepturi
      </p>
    </div>
  </div>
);

const array = new Array(10).fill(null).map((_, i) => i);

// automatic number of slides in view depending on passed elements
export const SliderExample: FC = () => (
  <Slider title="Slider">
    {array.map(key => (
      <Slide key={key}>
        <BasicCard index={key} isStaticWidth />
      </Slide>
    ))}
  </Slider>
);

// setting number of visible slides
export const SliderExampleWithSlidesToShow: FC = () => (
  <Slider title="Slider" slidesToShow={2}>
    {array.map(key => (
      <Slide key={key}>
        <BasicCard index={key} />
      </Slide>
    ))}
  </Slider>
);
