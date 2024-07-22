import { FC, PropsWithChildren, useContext } from 'react';
import styled from 'styled-components';
import { SliderContext } from './SliderContext';

const StyledSlide = styled.div<{ $flexBasis?: string }>`
  ${({ $flexBasis }) => $flexBasis && `flex-basis: ${$flexBasis};`}
`;

export const Slide: FC<PropsWithChildren> = ({ children }) => {
  const { flexBasis } = useContext(SliderContext);

  return (
    <StyledSlide
      className="flex-none min-w-0 px-3 max-w-full"
      $flexBasis={flexBasis}
    >
      {children}
    </StyledSlide>
  );
};
