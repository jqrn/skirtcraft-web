import styled from 'styled-components';

export const ColorSquare = styled.div<{ width: string }>`
  width: ${props => props.width};
  height: ${props => props.width};
  background-color: ${props =>
    props.color === 'Khaki' ? '#C2B584' : props.color};
  flex-shrink: 0;
`;
