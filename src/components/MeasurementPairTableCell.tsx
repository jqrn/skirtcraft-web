import React from 'react';
import styled from 'styled-components';

interface Props {
  in: string;
  cm: string;
}

export const MeasurementPairTableCell = (props: Props) => (
  <td>
    <MeasurementPair>
      <span>{`${props.in}"`}</span>
      <span>|</span>
      <span>{`${props.cm} cm`}</span>
    </MeasurementPair>
  </td>
);

const MeasurementPair = styled.div`
  display: flex;
  gap: 0.5em;
  flex-wrap: wrap;
`;
