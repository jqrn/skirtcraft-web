import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React from 'react';
import styled from 'styled-components';
import { TemporaryPrice } from '../util/TemporaryPrice';

interface Props {
  name: string;
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
        <OutboundLink href="https://www.kickstarter.com/projects/skirtcraft/unisex-skirts-3">
          {linkContent}
        </OutboundLink>
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
    text-transform: uppercase;
  }
`;

const ProductTitle = styled.p`
  margin-top: 0.5em;
`;

const ProductPrice = styled.span`
  margin-top: 0.3em;
  font-size: 85%;
`;

const TemporaryPriceText = styled.span`
  color: red;
`;
