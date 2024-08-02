import './App.scss';
import Footer from './components/Footer/Footer';
import { Slider } from './components/Slider';
import Header from './components/Header/Header';
import { BasicCard } from './components/Slider/SliderExample';
import PartnersSection from './components/PartnersSection/PartnersSection';
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
      <PartnersSection />
      <Footer />
    </>
  );
}

export default App;
