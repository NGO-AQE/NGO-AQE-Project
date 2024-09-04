import { useEffect } from 'react';
import './App.scss';
import AboutUs from './components/AboutUs/AboutUs';
import { BasicCard } from './components/Slider/SliderExample';
import { FaqSection } from './components/FaqSection/FaqSection.tsx';
import Footer from './components/Footer/Footer.tsx';
import Form from './components/Form/Form.tsx';
import Gallery from './components/GallerySection/Gallery';
import Header from './components/Header/Header';
import { HomePage } from './components/HomePage/HomePage';
import PartnersSection from './components/PartnersSection/PartnersSection';
import { Slider } from './components/Slider';
import TrainingsSection from './components/TrainingsSection/TrainingsSection';
import WhyAQE from './components/WhyAQE/WhyAQE';
import { useSanity } from './hooks/useSanity';
import ContactUs from './components/ContactUs/ContactUs';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const sanity = useSanity();

  useEffect(() => {
    sanity.changeLanguage(window.location.pathname.split('/').slice(-1)[0]);

    const sections = document.querySelectorAll('.section');

    sections.forEach((section) => {
      if (section.id === 'trainings') return;

      gsap.fromTo(
        section,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 90%',
            end: 'bottom 90%',
            scrub: true,
            markers: false,
          },
        }
      );

      const sectionElements = section.children;

      gsap.fromTo(
        sectionElements,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: section,
            start: 'top 90%',
            end: 'bottom 80%',
            scrub: true,
            markers: false,
          },
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
      <ContactUs language={''} />
      <Footer />
    </>
  );
}

export default App;