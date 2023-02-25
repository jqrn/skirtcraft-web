import React from 'react';
import styled from 'styled-components';
import { Page } from '../../components/Page';
import { TshirtTile } from '../../components/TshirtTile';
import ImgShirtColorsBlack from '../../images/shirt_colors_black.png';
import ImgShirtColorsWhite from '../../images/shirt_colors_white.png';

export default class TshirtsProductPage extends React.PureComponent {
  public render(): JSX.Element {
    return (
      <Page title="T-Shirts">
        <h1>T-Shirts</h1>

        <ul>
          <li>
            These shirts are our design, but they're sold, printed, and shipped
            by Zazzle. We receive 10% of the sales price.
          </li>

          <li>Made in the USA.</li>

          <li>Men's-style and women's-style cuts.</li>

          <li>
            Many colors! Be sure to select the product below with the white
            graphics if you'd like a darker-colored shirt, or the black graphics
            for a lighter-colored shirt.
          </li>

          <li>
            Once you're at the Zazzle product page you can select the shirt's
            color and size. Some of the lighter colors have lower prices. You
            can also apply the design to another style, like a long-sleeved
            shirt or a tank top.
          </li>
        </ul>

        <TshirtType>
          <H2>Dark with white graphics</H2>

          <TshirtTileSet>
            <TshirtTile
              imageUrl={
                'https://rlv.zcache.com/skirts_pockets_are_for_everybody_graphics_white_shirts-r6e509ed23d0746da958600130c330a56_jf4s8_325.jpg'
              }
              imageAltText={
                "Skirts and Pockets Are for Everybody T-Shirt - women's style with white graphics"
              }
              linkUrl={
                'https://www.zazzle.com/skirts_pockets_are_for_everybody_graphics_white_shirts-235489991463282034'
              }
            />
            <TshirtTile
              imageUrl={
                'https://rlv.zcache.com/skirts_pockets_are_for_everybody_graphics_white_tshirt-r20d78bf7c07947828fd089d752eeb299_jyrs6_325.jpg'
              }
              imageAltText={
                "Skirts and Pockets Are for Everybody T-Shirt - men's style with white graphics"
              }
              linkUrl={
                'https://www.zazzle.com/skirts_pockets_are_for_everybody_graphics_white_tshirt-235820562877183405'
              }
            />
            <TshirtTile
              imageUrl={ImgShirtColorsWhite}
              imageAltText={"men's-style t-shirt colors"}
            />
          </TshirtTileSet>
        </TshirtType>

        <TshirtType>
          <H2>Light with black graphics</H2>

          <TshirtTileSet>
            <TshirtTile
              imageUrl={
                'https://rlv.zcache.com/skirts_pockets_are_for_everybody_graphics_black_t_shirts-r35f8d38a68c5461e86d75636e0bedb7f_jf3uw_325.jpg'
              }
              imageAltText={
                "Skirts and Pockets Are for Everybody T-Shirt - women's style with black graphics"
              }
              linkUrl={
                'https://www.zazzle.com/skirts_pockets_are_for_everybody_graphics_black_t_shirts-235765986265029204'
              }
            />
            <TshirtTile
              imageUrl={
                'https://rlv.zcache.com/skirts_pockets_are_for_everybody_graphics_black_shirt-rd75d8c02975142e18e04ee5a57f93d65_jynro_325.jpg'
              }
              imageAltText={
                "Skirts and Pockets Are for Everybody T-Shirt - men's style with black graphics"
              }
              linkUrl={
                'https://www.zazzle.com/skirts_pockets_are_for_everybody_graphics_black_shirt-235462054751040388'
              }
            />
            <TshirtTile
              imageUrl={ImgShirtColorsBlack}
              imageAltText={"women's-style t-shirt colors"}
            />
          </TshirtTileSet>
        </TshirtType>
      </Page>
    );
  }
}

const TshirtType = styled.div`
  margin-top: 2em;
  display: flex;
  flex-direction: column;
`;

const TshirtTileSet = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const H2 = styled.h2`
  font-size: 18px;
`;
