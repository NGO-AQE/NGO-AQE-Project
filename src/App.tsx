import React, { useEffect } from 'react';
import './App.scss';
import AboutUs from './components/AboutUs/AboutUs';
import { BasicCard } from './components/Slider/SliderExample';
import { ContactUs } from './components/ContactUs/ContactUs';
import { FaqSection } from './components/FaqSection/FaqSection';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import Gallery from './components/GallerySection/Gallery';
import Header from './components/Header/Header';
import { HomePage } from './components/HomePage/HomePage';
import PartnersSection from './components/PartnersSection/PartnersSection';
import { Slider } from './components/Slider';
import TrainingsSection from './components/TrainingsSection/TrainingsSection';
import WhyAQE from './components/WhyAQE/WhyAQE';
import { useSanity } from './hooks/useSanity';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const sanity = useSanity();

  useEffect(() => {
    sanity.changeLanguage(window.location.pathname.split('/').slice(-1)[0]);

    // Скролл анімація
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
      gsap.fromTo(section,
        { opacity: 0 },
        {
          opacity: 1,
          
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 100%',
            end: 'top 0',
            scrub: true,
            markers: false,
          }
        }
      );
    });

  }, [sanity]);

  return (
    <>
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