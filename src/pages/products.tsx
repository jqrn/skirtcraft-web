import React from 'react';
import styled from 'styled-components';
import { Page } from '../components/Page';
import { ProductTile } from '../components/ProductTile';
import { NavTabDef } from '../enums/NavTabDef';
import ImgAqueous21s from '../images/aqueous21s.jpg';
import ImgTellurian01 from '../images/tellurian01.jpg';
import ImgUnaligned01 from '../images/unaligned01.png';

const ProductsPage = () => (
  <Page title={NavTabDef.PRODUCTS} currentTab={NavTabDef.PRODUCTS}>
    <Container>
      <ProductTile
        name="Tellurian Skirt"
        description="wrap skirt | organic cotton"
        pagePath="/products/tellurian"
        imageSource={ImgTellurian01}
        price={process.env.PRICE_TELLURIAN!}
      />

      <ProductTile
        name="Aqueous Skirt"
        description="two-layered | fluid drape"
        pagePath="/products/aqueous"
        imageSource={ImgAqueous21s}
        price={process.env.PRICE_AQUEOUS!}
      />

      <ProductTile
        name="Unaligned Skirt"
        description="denim | zippered pockets"
        pagePath="/products/unaligned"
        imageSource={ImgUnaligned01}
        price={process.env.PRICE_UNALIGNED!}
      />
    </Container>
  </Page>
);

const Container = styled.div`
  margin-top: 2em;
  display: flex;
  flex-wrap: wrap;
  gap: 4em;
`;

export default ProductsPage;
