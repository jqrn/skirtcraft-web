import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

interface Props {
    name: string;
    pagePath: string;
    imageSource: string;
    priceUsDollars: string;
}

export const ProductTile = React.memo<Props>((props: Props) => (

    <Container>
        <Link to={`/products/${props.pagePath}`}>
            <img src={props.imageSource} alt='' />
            <ProductTitle>{props.name}</ProductTitle>
            <ProductPrice>${props.priceUsDollars} (USD)</ProductPrice>
        </Link>
    </Container>
));

const Container = styled.div`
    width: 100%;
    max-width: 27em;
    padding: 2em 3em 1em 3em;
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

const ProductPrice = styled.p`
    margin-top: 0.3em;
    font-size: 85%;
`;
