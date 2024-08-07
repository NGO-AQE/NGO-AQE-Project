import './App.scss';

import sendMail from './sendMail';
import { useEffect } from 'react';
import { useSanity } from './hooks/useSanity';

function App() {
  const sanity = useSanity();

  //quick showcase, will revert app on merge
  sendMail(
    prompt('Give email:') as string,
    prompt('Give name:') as string,
    prompt('Give country:') as string,
  );

  useEffect(() => {
    sanity.changeLanguage(window.location.pathname.split('/').slice(-1)[0]);
  }, [sanity]);

  return <></>;
}

export default App;
