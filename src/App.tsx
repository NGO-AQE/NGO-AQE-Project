import './App.scss';
import Header from './components/Header/Header';
import AboutUs from './components/AboutUs/AboutUs';
import { BasicCard } from './components/Slider/SliderExample';
import { ContactUs } from './components/ContactUs/ContactUs';
import { FaqSection } from './components/FaqSection/FaqSection.tsx';
import Footer from './components/Footer/Footer.tsx';
import Form from './components/Form/Form.tsx';
import PartnersSection from './components/PartnersSection/PartnersSection';
import { Slider } from './components/Slider';
import TrainingsSection from './components/TrainingsSection/TrainingsSection';
import WhyAQE from './components/WhyAQE/WhyAQE';
import { useEffect } from 'react';
import { useSanity } from './hooks/useSanity';
import { HomePage } from './components/HomePage/HomePage';

function App() {
  const sanity = useSanity();

  useEffect(() => {
    sanity.changeLanguage(window.location.pathname.split('/').slice(-1)[0]);
  }, [sanity]);

  return (
    <>
      <Header />
      <HomePage />
      <AboutUs />
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
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
