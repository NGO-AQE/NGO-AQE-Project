import { FC } from 'react';
import { Slider } from './Slider';
import styles from './BasicCard.module.scss';

interface BasicCardProps {
  width?: number;
  index: number;
  withText?: true;
}

export const BasicCard: FC<BasicCardProps> = ({ width, index, withText }) => (
  <div className={`${styles.basicCard}`} style={{ width }}>
    <img
      src={`https://placehold.co/${width || 160}x${width || 160}.png`}
      className="flex-none"
    />
    <div className="p-5">
      <h1 className="text-xl">{`Slide: ${index}`}</h1>
      {withText && (
        <p className="text-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim sequi
          quos, aperiam atque recusandae excepturi
        </p>
      )}
    </div>
  </div>
);

const array = new Array(10).fill(null).map((_, i) => i);
const text =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo suscipit est praesentium enim, nihil deserunt magnam aperiam at, temporibus dolores harum in magni laboriosam quasi, atque voluptatum quia delectus.';

// automatic number of slides in view depending on passed elements
export const SliderExample: FC<{ slideWidth: number }> = ({ slideWidth }) => (
  <Slider
    buttonsPlacment="slider"
    title={`slides inside slide width ${slideWidth}`}
    description={text}
  >
    {array.map(key => (
      <Slider.Slide key={key}>
        <BasicCard index={key} width={slideWidth} />
      </Slider.Slide>
    ))}
  </Slider>
);

// example with slides outside container
export const SliderExampleSlidesOutside: FC<{ slideWidth: number }> = ({
  slideWidth,
}) => (
  <Slider
    buttonsPlacment="title"
    title={`slides outside slide width ${slideWidth}`}
    slidesOtside
  >
    {array.map(key => (
      <Slider.Slide key={key}>
        <BasicCard index={key} width={slideWidth} />
      </Slider.Slide>
    ))}
  </Slider>
);

// setting number of visible slides
export const SliderExampleWithSlidesToShow: FC<{ slidesToShow: number }> = ({
  slidesToShow,
}) => (
  <Slider
    buttonsPlacment="title"
    title={`${slidesToShow} slides in view`}
    slidesToShow={slidesToShow}
  >
    {array.map(key => (
      <Slider.Slide key={key}>
        <BasicCard index={key} />
      </Slider.Slide>
    ))}
  </Slider>
);
