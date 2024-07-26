import './App.scss';

import { BasicCard } from './components/Slider/SliderExample';
import { Slider } from './components/Slider';
import { useEffect } from 'react';
import { useSanity } from './hooks/useSanity';

function App() {
  const sanity = useSanity();

  useEffect(() => {
    sanity.changeLanguage(window.location.pathname.split('/').slice(-1)[0]);
  }, [sanity]);

  //only the above will be merged

  const bts = ['en', 'pl', 'de'].map(l => (
    <>
      <br />
      <button
        type="button"
        onClick={() => {
          sanity.changeLanguage(l);
        }}
      >
        Button for {l}
      </button>
    </>
  ));

  return (
    <>
      {bts}
      <br />
      selected lang:{' '}
      {
        sanity.documents?.language?.find(
          l => l?.code === sanity.selectedLanguage,
        )?.title
      }
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
