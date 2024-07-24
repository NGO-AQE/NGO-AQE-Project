import './App.scss';
import {
  SliderExample,
  SliderExampleSlidesOutside,
  SliderExampleWithSlidesToShow,
} from './components/Slider/SliderExample';

function App() {
  return (
    <>
      <SliderExample slideWidth={160} />
      <SliderExample slideWidth={200} />
      <SliderExampleSlidesOutside slideWidth={160} />
      <SliderExampleSlidesOutside slideWidth={200} />
      <SliderExampleWithSlidesToShow slidesToShow={2} />
      <SliderExampleWithSlidesToShow slidesToShow={3} />
    </>
  );
}

export default App;
