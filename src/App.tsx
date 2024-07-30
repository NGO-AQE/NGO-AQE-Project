import './App.scss';
import { Slider } from './components/Slider';
import { BasicCard } from './components/Slider/SliderExample';
import { HomePage } from './components/HomePage/HomePage';

function App() {
  return (
    <>
      <HomePage />
      <Slider title="Succes stories" buttonsPlacment="title" slidesOtside>
        {[...Array(10)].map((_, i) => (
          <Slider.Slide key={i}>
            <BasicCard width={262} index={i} withText />
          </Slider.Slide>
        ))}
      </Slider>
      <Slider title="Our partners" buttonsPlacment="title" slidesOtside>
        {[...Array(10)].map((_, i) => (
          <Slider.Slide key={i}>
            <BasicCard width={262} index={i} />
          </Slider.Slide>
        ))}
      </Slider>
    </>
  );
  return (
    <>
      <HomePage />
    </>
  );
}

export default App;
