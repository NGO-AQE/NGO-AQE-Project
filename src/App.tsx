import './App.scss';

import { useEffect, useState } from 'react';

import AboutUs from './components/AboutUs/AboutUs';
import { BasicCard } from './components/Slider/SliderExample';
import { ContactUs } from './components/ContactUs/ContactUs';
import { FaqSection } from './components/FaqSection/FaqSection.tsx';
import Footer from './components/Footer/Footer.tsx';
import Form from './components/Form/Form.tsx';
import Gallery from './components/GallerySection/Gallery';
import Header from './components/Header/Header';
import { HomePage } from './components/HomePage/HomePage';
import Modal from './components/Modal/Modal.tsx';
import PartnersSection from './components/PartnersSection/PartnersSection';
import { Slider } from './components/Slider';
import TrainingsSection from './components/TrainingsSection/TrainingsSection';
import WhyAQE from './components/WhyAQE/WhyAQE';
import randomIcon from './assets/icons/Logo.png';
import { useSanity } from './hooks/useSanity';

function App() {
  const sanity = useSanity();

  useEffect(() => {
    sanity.changeLanguage(window.location.pathname.split('/').slice(-1)[0]);
  }, [sanity]);

  //example use start

  const [successIsOpen, setSuccessIsOpen] = useState(false);
  const [errorIsOpen, setErrorIsOpen] = useState(false);
  const [customIsOpen, setCustomIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setSuccessIsOpen(true);
        }}
      >
        Open Success
      </button>
      <br />
      <button
        onClick={() => {
          setErrorIsOpen(true);
        }}
      >
        Open Error
      </button>
      <br />
      <button
        onClick={() => {
          setCustomIsOpen(true);
        }}
      >
        Open Custom
      </button>
      <Modal
        modalType="success"
        email="thegoodmail@gmail.com"
        isOpen={successIsOpen}
        closer={() => {
          setSuccessIsOpen(false);
        }}
      />
      <Modal
        modalType="error"
        email="verybadmail2@gmail.com"
        isOpen={errorIsOpen}
        closer={() => {
          setErrorIsOpen(false);
        }}
      />
      <Modal
        modalType="custom"
        title={'NO WAY LOOK AT THIS AWESOME LOGO!'}
        description={'Yeah its pretty cool right?'}
        iconSrc={randomIcon}
        isOpen={customIsOpen}
        closer={() => {
          setCustomIsOpen(false);
        }}
      />
      {/* example use end */}
      <Header />
      <HomePage />
      <AboutUs />
      <WhyAQE />
      <TrainingsSection />
      <Gallery />
      <Form />
      <Slider
        id="stories"
        title="Succes stories"
        buttonsPlacment="title"
        slidesOtside
      >
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
