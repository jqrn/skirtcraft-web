import React from 'react';
import styled from 'styled-components';
import { Page } from '../components/Page';
import { ProductTile } from '../components/ProductTile';
import { NavTabDef } from '../enums/NavTabDef';
import ImgAqueous21s from '../images/aqueous21s.jpg';
import ImgShirt01 from '../images/shirt01.png';
import ImgTellurianComingSoon from '../images/tellurian-coming-soon.jpg';
import ImgUnaligned01 from '../images/unaligned01.png';

const ProductsPage = () => (
  <Page title={NavTabDef.PRODUCTS} currentTab={NavTabDef.PRODUCTS}>
    <Container>
      <ProductTile
        name="Tellurian Skirt"
        pagePath="/blog"
        imageSource={ImgTellurianComingSoon}
        price="TBD"
      />

      <ProductTile
        name="Unaligned Skirt"
        pagePath="/products/unaligned"
        imageSource={ImgUnaligned01}
        price={process.env.PRICE_UNALIGNED!}
      />

      <ProductTile
        name="Aqueous Skirt"
        pagePath="/products/aqueous"
        imageSource={ImgAqueous21s}
        price={process.env.PRICE_AQUEOUS!}
      />

      <ProductTile
        name="T-Shirts"
        pagePath="/products/tshirts"
        imageSource={ImgShirt01}
        price="26-31"
      />
    </Container>
  </Page>
);

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default ProductsPage;
