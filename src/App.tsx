import './App.scss';
import Header from './components/Header/Header';
import { BasicCard } from './components/Slider/SliderExample';
import { Slider } from './components/Slider';
import WhyAQE from './components/WhyAQE/WhyAQE.tsx';
import Form from './components/Form/Form.tsx';
import { useEffect } from 'react';
import { useSanity } from './hooks/useSanity';

function App() {
  const sanity = useSanity();

  useEffect(() => {
    sanity.changeLanguage(window.location.pathname.split('/').slice(-1)[0]);
  }, [sanity]);

  return (
    <>
      <WhyAQE />
      <Form />
      <Header />
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
}

export default App;
