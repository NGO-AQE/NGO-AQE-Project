import './App.scss';
import Header from './components/Header/Header';
import { BasicCard } from './components/Slider/SliderExample';
import PartnersSection from './components/PartnersSection/PartnersSection';
import { Slider } from './components/Slider';
import Form from './components/Form/Form.tsx';
import { useEffect } from 'react';
import { useSanity } from './hooks/useSanity';
import { HomePage } from './components/HomePage/HomePage';
import WhyAQE from './components/WhyAQE/WhyAQE';

function App() {
  const sanity = useSanity();

  useEffect(() => {
    sanity.changeLanguage(window.location.pathname.split('/').slice(-1)[0]);
  }, [sanity]);

  return (
    <>
      <Header />
      <HomePage />
      <WhyAQE />
      <Form />
      <Slider title="Succes stories" buttonsPlacment="title" slidesOtside>
        {[...Array(10)].map((_, i) => (
          <Slider.Slide key={i}>
            <BasicCard width={262} index={i} withText />
          </Slider.Slide>
        ))}
      </Slider>
      <PartnersSection />
    </>
  );
  return (
    <>
      <HomePage />
    </>
  );
}

export default App;
