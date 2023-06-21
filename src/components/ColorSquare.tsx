import styled from 'styled-components';

export const ColorSquare = styled.div<{ width: string }>`
  width: ${props => props.width};
  height: ${props => props.width};
  background-color: ${props => htmlColorFromDescription(props.color)};
  border-radius: 4px;
  flex-shrink: 0;
`;

const htmlColorFromDescription = (colorName: string | undefined) => {
  switch (colorName) {
    case 'Khaki':
      return '#C2B584';
    case 'Natural':
      return '#E5DFD1';
    default:
      return colorName;
  }
};
