import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { TemporaryPrice } from '../util/TemporaryPrice';

interface Props {
  name: string;
  description: string;
  pagePath?: string;
  externalUrl?: string;
  imageSource: string;
  price: string;
  temporaryPrice?: TemporaryPrice;
}

export const ProductTile = (props: Props) => {
  const linkContent = (
    <>
      <img src={props.imageSource} alt="" />
      <ProductTitle>{props.name}</ProductTitle>
      <ProductDescription>{props.description}</ProductDescription>
      {props.temporaryPrice ? (
        <ProductPrice>
          <del>${props.price}</del>&nbsp;
          <TemporaryPriceText>
            ${props.temporaryPrice!.price} (USD) until{' '}
            {props.temporaryPrice!.untilDate}!
          </TemporaryPriceText>
        </ProductPrice>
      ) : (
        <ProductPrice>${props.price} (USD)</ProductPrice>
      )}
    </>
  );

  return (
    <Container>
      {props.externalUrl ? (
        <a href="https://www.kickstarter.com/projects/skirtcraft/unisex-skirts-3">
          {linkContent}
        </a>
      ) : (
        <Link to={props.pagePath!}>{linkContent}</Link>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 18em;
  text-align: center;
  a {
    text-decoration: none;
    color: black;
  }
  img {
    width: 100%;
    border-radius: 0.3em;
  }
  p {
    margin-bottom: 0;
  }
`;

const ProductTitle = styled.p`
  margin-top: 0.5em;
  text-transform: uppercase;
`;

const ProductDescription = styled.p`
  margin-top: 0.3em;
  font-size: 85%;
  text-tranform: lowercase;
`;

const ProductPrice = styled.span`
  margin-top: 0.3em;
  font-size: 85%;
  text-transform: uppercase;
`;

const TemporaryPriceText = styled.span`
  color: red;
`;
