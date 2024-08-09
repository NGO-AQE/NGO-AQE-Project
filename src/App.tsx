import './App.scss';

import { BasicCard } from './components/Slider/SliderExample';
import { FaqSection } from './components/FaqSection/FaqSection';
import Header from './components/Header/Header';
import { HomePage } from './components/HomePage/HomePage';
import PartnersSection from './components/PartnersSection/PartnersSection';
import { Slider } from './components/Slider';
import WhyAQE from './components/WhyAQE/WhyAQE';
import Form from './components/Form/Form.tsx';
import TrainingsSection from './components/TrainingsSection/TrainingsSection';

import { useEffect } from 'react';
import { useSanity } from './hooks/useSanity';

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
      <TrainingsSection />
      <Form />
      <Slider title="Succes stories" buttonsPlacment="title" slidesOtside>
        {[...Array(10)].map((_, i) => (
          <Slider.Slide key={i}>
            <BasicCard width={262} index={i} withText />
          </Slider.Slide>
        ))}
      </Slider>
      <PartnersSection />
      <FaqSection />
    </>
  );
}

export default App;
