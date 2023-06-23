import React from 'react';
import styled from 'styled-components';
import { ProductPage } from '../../components/ProductPage';
import ImgTellurianBlackFlatLay1Front from '../../images/tellurian_black_flat_lay_1_front.jpg';
import ImgTellurianBlackFlatLay2Back from '../../images/tellurian_black_flat_lay_2_back.jpg';
import ImgTellurianBlackFlatLay3Spread from '../../images/tellurian_black_flat_lay_3_spread.jpg';
import ImgTellurianBlackWorn1Front from '../../images/tellurian_black_worn_1_front.jpg';
import ImgTellurianBlackWorn2Back from '../../images/tellurian_black_worn_2_back.jpg';
import ImgTellurianBlackWorn3Left from '../../images/tellurian_black_worn_3_left.jpg';
import ImgTellurianBlackWorn4ClosureDetail from '../../images/tellurian_black_worn_4_closure_detail.jpg';
import ImgTellurianNaturalWorn1Front from '../../images/tellurian_natural_worn_1_front.jpg';
import ImgTellurianNaturalWorn2Back from '../../images/tellurian_natural_worn_2_back.jpg';
import ImgTellurianNaturalWorn3Left from '../../images/tellurian_natural_worn_3_left.jpg';
import ImgTellurianNaturalWorn4BackDetail from '../../images/tellurian_natural_worn_4_back_detail.jpg';
import ImgTellurianNaturalFlatLay1Front from '../../images/tellurian_natural_flat_lay_1_front.jpg';
import ImgTellurianNaturalFlatLay2Back from '../../images/tellurian_natural_flat_lay_2_back.jpg';
import { RATINGS_UNALIGNED } from '../../ratings/ratingsUnaligned';

const TellurianSkirtProductPage = () => (
  <ProductPage
    name={'Tellurian Skirt (available August 2023)'}
    details={
      <>
        <p>
          <b>
            ** AVAILABILITY FOR PURCHASE EXPECTED AUGUST 2023 **
            <br />
            ** USE BUTTON ABOVE TO BE NOTIFIED WHEN IT'S AVAILABLE **
          </b>
        </p>

        <p>A wrap skirt with adjustable waist, made of 100% organic cotton.</p>

        <p>Made in the USA of imported fabric.</p>

        <H2>Style</H2>

        <ul>
          <li>Two large hip pockets</li>
          <li>Distinctive angled seams</li>
          <li>
            Built-in waist strap/belt fastened with a pair of metal D-rings
          </li>
          <li>
            Strap passes through a keyhole in the waistband and 2-3 belt loops
            (varies by size)
          </li>
          <li>Length: 21 inches / 53 1/2 cm</li>
          <li>Colors: Natural, Black</li>
        </ul>

        <H2>Materials</H2>

        <ul>
          <li>
            Fabric: 7-ounce organic cotton twill
            <ul>
              <li>100% GOTS certified organic cotton</li>
              <li>About half the weight of typical jeans denim</li>
            </ul>
          </li>
          <li>Closure: metal D-rings</li>
        </ul>
      </>
    }
    colors={[
      { name: 'Natural', defaultPhotoUrl: ImgTellurianNaturalFlatLay1Front },
      { name: 'Black', defaultPhotoUrl: ImgTellurianBlackFlatLay1Front },
    ]}
    sizes={['26-29', '30-34', '35-40', '41-46', '47-54']}
    soldOutColorSizes={[]}
    price={parseFloat(process.env.PRICE_UNALIGNED!)}
    photoUrls={[
      ImgTellurianBlackWorn1Front,
      ImgTellurianBlackWorn2Back,
      ImgTellurianBlackWorn3Left,
      ImgTellurianNaturalWorn1Front,
      ImgTellurianNaturalWorn2Back,
      ImgTellurianNaturalWorn3Left,
      ImgTellurianBlackWorn4ClosureDetail,
      ImgTellurianNaturalWorn4BackDetail,
      ImgTellurianNaturalFlatLay1Front,
      ImgTellurianNaturalFlatLay2Back,
      ImgTellurianBlackFlatLay1Front,
      ImgTellurianBlackFlatLay2Back,
      ImgTellurianBlackFlatLay3Spread,
    ]}
    ratings={RATINGS_UNALIGNED}
    comingSoonFormUrl="https://forms.gle/4XeK8i7JJyRx8Kmq7"
  />
);

const H2 = styled.h2`
  font-size: 15px;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
`;

export default TellurianSkirtProductPage;
