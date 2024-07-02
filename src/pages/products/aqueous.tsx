import React from 'react';
import styled from 'styled-components';
import { ProductPage } from '../../components/ProductPage';
import ImgAqueous21F from '../../images/aqueous21f.jpg';
import ImgAqueous23 from '../../images/aqueous23.jpg';
import ImgAqueous26 from '../../images/aqueous26.jpg';
import ImgAqueous27 from '../../images/aqueous27.jpg';
import ImgAqueous28 from '../../images/aqueous28.jpg';
import ImgAqueous29 from '../../images/aqueous29.jpg';
import ImgAqueous30 from '../../images/aqueous30.jpg';
import ImgAqueous31 from '../../images/aqueous31.jpg';
import ImgAqueous32 from '../../images/aqueous32.jpg';
import { RATINGS_AQUEOUS } from '../../ratings/ratingsAqueous';
import { ColorSize } from '../../util/ColorSize';

const AqueousSkirtProductPage = () => (
  <ProductPage
    name={'Aqueous Skirt'}
    details={
      <>
        <p>
          The Aqueous is a heavy, fluid, knee-length skirt with large hip
          pockets and belt loops. The name refers to its smoothly-flowing drape
          and swirling seamlines.
        </p>

        <p>Made in the USA of imported fabric.</p>

        <H2>Style</H2>

        <ul>
          <li>Two large hip pockets</li>
          <li>Distinctive spiralling seams</li>
          <li>Heavy-weight, for stable pockets and better privacy</li>
          <li>A fluid, natural drape&mdash;despite the weight</li>
          <li>Belt loops (6)</li>
          <li>Length: 21.5" / 54.5 cm</li>
          <li>Colors: Black, Purple, Grey</li>
        </ul>

        <H2>Materials</H2>

        <ul>
          <li>
            Main fabric: 6-ounce plain weave
            <ul>
              <li>Linen gives it a natural texture and durability</li>
              <li>Rayon gives it excellent drape and prevents wrinkles</li>
              <li>
                Plain weave is the simplest of weaves: a simple over-under
                pattern that produces a strong fabric that's the same on each
                side. Contrast with twill, the weave that produces diagonal
                lines and is used in denim (and our Unaligned Skirt).
              </li>
              <li>About half the weight of jeans denim</li>
              <li>55% linen, 45% rayon</li>
            </ul>
          </li>
          <li>
            Lining: 11-ounce ponte di roma
            <ul>
              <li>
                Ponte di Roma is a style of knit that's smooth and stable (less
                stretchy) compared to other knits
              </li>
              <li>At 11 ounces per square yard, it's quite weighty</li>
              <li>
                The unexpectedly fluid drape of this heavy fabric is due to the
                rayon content and the ponte knit style
              </li>
              <li>67% rayon, 28% nylon, 5% spandex</li>
            </ul>
          </li>
          <li>Side zipper: YKK nylon coil</li>
          <li>Closure: metal hook-and-bar</li>
        </ul>

        <br />
        <p>
          Note: Initially in some units the hook and bar closure was not
          anchored well enough to the waistband and could eventually tear loose.
          As of February 2024 all units have the area properly reinforced and
          are free of the issue.
        </p>
      </>
    }
    colors={[
      { name: 'Black', defaultPhotoUrl: ImgAqueous31 },
      { name: 'Purple', defaultPhotoUrl: ImgAqueous29 },
      { name: 'Grey', defaultPhotoUrl: ImgAqueous30 },
    ]}
    sizes={[
      '28-29',
      '30-31',
      '32-33',
      '34-35',
      '36-37',
      '38-39',
      '40-41',
      '42-43',
      '44-45',
    ]}
    soldOutColorSizes={[
      new ColorSize('Black', '28-29'),
      new ColorSize('Purple', '28-29'),
    ]}
    price={parseFloat(process.env.PRICE_AQUEOUS!)}
    photoUrls={[
      ImgAqueous21F,
      ImgAqueous26,
      ImgAqueous27,
      ImgAqueous28,
      ImgAqueous23,
      ImgAqueous29,
      ImgAqueous31,
      ImgAqueous30,
      ImgAqueous32,
    ]}
    flickrAlbum={{
      url: process.env.FLICKR_ALBUM_URL_AQUEOUS!,
      mainPhotoUrl: process.env.FLICKR_ALBUM_MAIN_PHOTO_URL_AQUEOUS!,
    }}
    ratings={RATINGS_AQUEOUS}
  />
);

const H2 = styled.h2`
  font-size: 15px;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
`;

export default AqueousSkirtProductPage;
