import React from 'react';
import styled from 'styled-components';
import { ProductPage } from '../../components/ProductPage';
import ImgButton from '../../images/button.png';
import ImgUnalignedColors from '../../images/colors_black_khaki_grey.png';
import ImgFabricDenim from '../../images/fabric_denim_9_5_oz.png';
import ImgHipPockets from '../../images/hip_pockets.png';
import ImgLaydownBack from '../../images/laydown_back.png';
import ImgLaydownFront from '../../images/laydown_front.png';
import ImgLaydownSide from '../../images/laydown_side.png';
import ImgOneBack from '../../images/one_back.png';
import ImgOneJump from '../../images/one_jump.png';
import ImgTwoFrontSide from '../../images/two_front_side.png';
import ImgTwoLean from '../../images/two_lean.png';
import ImgUnaligned01R from '../../images/unaligned01-r.png';
import ImgUnaligned02 from '../../images/unaligned02.png';
import ImgWaistDetail from '../../images/waist_detail.png';
import ImgZipperPockets from '../../images/zipper_pockets.png';
import { RATINGS_UNALIGNED } from '../../ratings/ratingsUnaligned';
import { ColorSize } from '../../util/ColorSize';

const UnalignedSkirtProductPage = () => (
  <ProductPage
    name={'Unaligned Skirt'}
    details={
      <>
        <p>
          The Unaligned is a sturdy, unique, knee-length skirt with multiple
          large pockets.
        </p>

        <p>Made in the USA of imported fabric.</p>

        <H2>Style</H2>

        <ul>
          <li>Two large hip pockets</li>
          <li>Two large lower side pockets with zippers</li>
          <li>Distinctive asymmetric seams</li>
          <li>
            Seven belt loops: three in front, four in back (two in center back).
            Note: some photos are of a prototype with only five belt loops;
            actual product has seven.
          </li>
          <li>Length: 22.5" / 57 cm</li>
          <li>Colors: Black, Grey</li>
        </ul>

        <H2>Materials</H2>

        <ul>
          <li>
            Main fabric: 9.5-ounce brushed bull denim
            <ul>
              <li>Denim: durable and comfortable</li>
              <li>
                9.5-ounce: lighter than typical jeans denim (12-16 ounces), so
                it drapes better (more flowy) yet is still tough
              </li>
              <li>
                Bull: has a solid-color look because it's made from yarn that's
                all the same color. Unlike classic denim, which has a two-color
                look because its warp yarns are blue and its weft yarns are
                white.
              </li>
              <li>Brushed: for a soft touch</li>
            </ul>
          </li>
          <li>Fly zipper: YKK square metal jeans zipper with nickel finish</li>
          <li>
            Lower pocket zippers: YKK nylon coil zippers, with color matched to
            fabric
          </li>
          <li>
            Button: metal, jeans-style, with Skirtcraft logo and dark-grey
            nickel finish
          </li>
        </ul>

        <br />
        <p>
          Note: On skirts made in the second production run, the two rear belt
          loops are shifted about two inches to the left of where they're meant
          to be: centered at the top of the diagonal seam rather than at the
          garment's true center. This includes all grey Unaligned skirts, and
          black Unaligned skirt sizes 30-31, 32-33, 34-35, and 40-41.
        </p>
      </>
    }
    colors={[
      { name: 'Black', defaultPhotoUrl: ImgUnaligned01R },
      { name: 'Grey', defaultPhotoUrl: ImgUnalignedColors },
    ]}
    sizes={[
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
      new ColorSize('Black', '30-31'),
      new ColorSize('Black', '34-35'),
      new ColorSize('Grey', '34-35'),
      new ColorSize('Grey', '36-37'),
      new ColorSize('Grey', '38-39'),
    ]}
    price={parseFloat(process.env.PRICE_UNALIGNED!)}
    photoUrls={[
      ImgUnaligned01R,
      ImgUnalignedColors,
      ImgUnaligned02,
      ImgTwoLean,
      ImgOneBack,
      ImgTwoFrontSide,
      ImgLaydownFront,
      ImgLaydownBack,
      ImgLaydownSide,
      ImgWaistDetail,
      ImgHipPockets,
      ImgZipperPockets,
      ImgFabricDenim,
      ImgButton,
      ImgOneJump,
    ]}
    flickrAlbum={{
      url: process.env.FLICKR_ALBUM_URL_UNALIGNED!,
      mainPhotoUrl: process.env.FLICKR_ALBUM_MAIN_PHOTO_URL_UNALIGNED!,
    }}
    ratings={RATINGS_UNALIGNED}
  />
);

const H2 = styled.h2`
  font-size: 15px;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
`;

export default UnalignedSkirtProductPage;
