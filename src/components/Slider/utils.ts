export const align = (vievSize: number, snapSize: number) => {
  const spaceForSlides = vievSize - snapSize / 2;

  const count = Math.floor(spaceForSlides / snapSize);
  const offsetFromCenter =
    count > 0 && count % 2 === 0 ? snapSize : snapSize / 2;
  const center = vievSize / 2;

  return center - offsetFromCenter;
};
