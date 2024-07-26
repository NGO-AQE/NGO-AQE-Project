import './App.scss';

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
    </>
  );
}

export default App;
