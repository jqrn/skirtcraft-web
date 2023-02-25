import React from 'react';
import styled from 'styled-components';

interface Props {
  destinationName: string;
  pricesUsDollars: number[];
}

export const DestinationPrices = (props: Props) => (
  <Container>
    <DestinationName>{props.destinationName}</DestinationName>

    {props.pricesUsDollars.map((priceUsd: number, index: number) => (
      <p key={index}>
        {` ${index + 1} skirt${index > 0 ? 's' : ''}: $${priceUsd}`}
      </p>
    ))}
  </Container>
);

const Container = styled.div`
  margin: 0 0.5em;
`;

const DestinationName = styled.p`
  font-weight: bold;
`;
