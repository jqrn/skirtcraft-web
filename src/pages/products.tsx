import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { Page } from '../components/Page';
import { NavTabDef } from '../enums/NavTabDef';
import ImgAqueous21s from '../images/aqueous21s.jpg';
import ImgShirt01 from '../images/shirt01.png';
import ImgUnaligned01 from '../images/unaligned01.png';

export default class ProductsPage extends React.PureComponent {

    public render(): JSX.Element {

        return (

            <Page title={NavTabDef.PRODUCTS} currentTab={NavTabDef.PRODUCTS}>

                <Container>

                    <ProductListing>
                        <Link to='/products/unaligned'>
                            <img src={ImgUnaligned01} />
                            <ProductTitle>Unaligned Skirt</ProductTitle>
                            <ProductPrice>$75 (USD)</ProductPrice>
                        </Link>
                    </ProductListing>

                    <ProductListing>
                        <Link to='/products/aqueous'>
                            <img src={ImgAqueous21s} />
                            <ProductTitle>Aqueous Skirt</ProductTitle>
                            <ProductPrice>$75 (USD)</ProductPrice>
                        </Link>
                    </ProductListing>

                    <ProductListing>
                        <Link to={'/products/tshirts'}>
                            <img src={ImgShirt01} />
                            <ProductTitle>T-Shirts</ProductTitle>
                            <ProductPrice>$26-31 (USD)</ProductPrice>
                        </Link>
                    </ProductListing>

                </Container>

            </Page>
        );
    }
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const ProductListing = styled.div`
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
