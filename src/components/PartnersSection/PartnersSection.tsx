import { Slider } from '../Slider';
import { getImageUrl } from '../../SanityUrlBuilder';
import styles from './PartnersSection.module.scss';
import { useSanity } from '../../hooks/useSanity';

const PartnersSection = () => {
  const sanity = useSanity();
  const languageId = sanity.selectedLanguage;
  const document = sanity.documents?.partnersSection[0];

  if (!document) {
    return;
  }

  return (
    <Slider
      title={
        document.titleSet.find(set => set.language._ref === languageId)
          ?.title as unknown as string
      }
      buttonsPlacment="title"
      slidesOtside
    >
      {/* im displaying the array twice to fill up wider screens */}
      {[...document.partnersArray, ...document.partnersArray].map(
        (partner, i) => {
          return (
            <Slider.Slide key={i}>
              <div className={styles.container}>
                <img
                  src={getImageUrl(partner.image) as unknown as string}
                  alt={'partnerImg'}
                />
                <p className={styles.description}>
                  {
                    partner.descriptionSet.find(
                      set => set.language._ref === languageId,
                    )?.description as unknown as string
                  }
                </p>
              </div>
            </Slider.Slide>
          );
        },
      )}
    </Slider>
  );
};

export default PartnersSection;
