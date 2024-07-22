import { FC } from 'react';
import { Slider } from './Slider';
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
const text =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo suscipit est praesentium enim, nihil deserunt magnam aperiam at, temporibus dolores harum in magni laboriosam quasi, atque voluptatum quia delectus.';

// automatic number of slides in view depending on passed elements
export const SliderExample: FC = () => (
  <Slider buttonsPlacment="slider" title="Slider" text={text}>
    {array.map(key => (
      <Slider.Slide key={key}>
        <BasicCard index={key} isStaticWidth />
      </Slider.Slide>
    ))}
  </Slider>
);

export const SliderExampleSlidesOutside: FC = () => (
  <Slider buttonsPlacment="title" title="Slider" slidesOtside>
    {array.map(key => (
      <Slider.Slide key={key}>
        <BasicCard index={key} isStaticWidth />
      </Slider.Slide>
    ))}
  </Slider>
);

// setting number of visible slides
export const SliderExampleWithSlidesToShow: FC = () => (
  <Slider buttonsPlacment="title" title="Slider" slidesToShow={2}>
    {array.map(key => (
      <Slider.Slide key={key}>
        <BasicCard index={key} />
      </Slider.Slide>
    ))}
  </Slider>
);
