
import styled from 'styled-components';

export const ColorSquare = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${props => props.color};
  flex-shrink: 0;
`;
