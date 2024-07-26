/*
  function for alinging current slide
  for uneven number of slide place it in center
  for even number of slides place it to the left of center
  there is also space for visible parts of slides 
*/
export const align = (vievSize: number, snapSize: number) => {
  const spaceForSlides = vievSize - snapSize / 2;

  const count = Math.floor(spaceForSlides / snapSize);
  const offsetFromCenter =
    count > 0 && count % 2 === 0 ? snapSize : snapSize / 2;
  const center = vievSize / 2;

  return center - offsetFromCenter;
};
