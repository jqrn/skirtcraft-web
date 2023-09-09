import { Link, navigate } from 'gatsby';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { DestinationPrices } from '../components/DestinationPrices';
import { Page } from '../components/Page';
import { CartContext } from '../context/CartContext';
import { Rating } from '../ratings/Rating';
import { ColorSize } from '../util/ColorSize';
import { getSizeDisplay } from '../util/sizeUtils';
import { addScriptToPage } from '../util/scriptUtils';
import { TemporaryPrice } from '../util/TemporaryPrice';
import { ColorSquare } from './ColorSquare';
import { RatingSet } from './RatingSet';

interface Color {
  name: string;
  defaultPhotoUrl: string;
}

interface Props {
  name: string;
  details: JSX.Element;
  colors: Color[];
  sizes: string[];
  soldOutColorSizes: ColorSize[];
  price: number;
  temporaryPrice?: TemporaryPrice;
  photoUrls: string[];
  flickrAlbum?: {
    url: string;
    mainPhotoUrl: string;
  };
  ratings: Rating[];
}

export const ProductPage = (props: Props) => {
  const cart = useContext(CartContext);

  const [selectedColor, setSelectedColor] = useState<string | undefined>();
  const [selectedSize, setSelectedSize] = useState<string | undefined>();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSizeUnits, setSelectedSizeUnits] = useState<'in' | 'cm'>('in');
  const [isSizeInfoShowing, setIsSizeInfoShowing] = useState(false);
  const [areShippingRatesShowing, setAreShippingRatesShowing] = useState(false);
  const [arePaymentMethodsShowing, setArePaymentMethodsShowing] =
    useState(false);
  const [selectedReviewPageIndex, setSelectedReviewPageIndex] = useState(0);
  const [showInvalidSelectionMessage, setShowInvalidSelectionMessage] =
    useState(false);

  useEffect(() => {
    addScriptToPage('https://embedr.flickr.com/assets/client-code.js');
  }, []);

  const isColorSizeSoldOut = (color: string, size: string) => {
    const colorSize = new ColorSize(color, size);
    return props.soldOutColorSizes.some(soldOutColorSize =>
      soldOutColorSize.equals(colorSize)
    );
  };

  const selectColor = (color: Color) => {
    if (color.name === selectedColor) {
      return;
    }
    setSelectedColor(color.name);
    setSelectedImageIndex(props.photoUrls.indexOf(color.defaultPhotoUrl));
    setShowInvalidSelectionMessage(false);
  };

  const selectSize = (size: string) => {
    setSelectedSize(size);
    setShowInvalidSelectionMessage(false);
  };

  const addToCartClicked = () => {
    let isSelectionValid = false;

    if (selectedColor && selectedSize) {
      const selectedColorSize = new ColorSize(selectedColor, selectedSize);
      if (
        !props.soldOutColorSizes.some(soldOutColorSize =>
          soldOutColorSize.equals(selectedColorSize)
        )
      ) {
        isSelectionValid = true;
      }
    }

    if (!isSelectionValid) {
      setShowInvalidSelectionMessage(true);
    } else {
      cart.addItem({
        productName: props.name,
        color: selectedColor!,
        size: selectedSize!,
        price: props.temporaryPrice
          ? Number(props.temporaryPrice.price)
          : props.price,
      });
      navigate('/cart');
    }
  };

  const flickrAlbumName = `${props.name} Backers and Customers`;

  return (
    <Page title={props.name}>
      <Container>
        <Left>
          <MainImage
            src={props.photoUrls[selectedImageIndex]}
            alt={props.name}
          />

          <Thumbnails>
            {props.photoUrls.map((photoUrl, index) => (
              <ThumbnailImage
                key={index}
                id={`thumbnail-${index}`}
                src={photoUrl}
                alt={props.name}
                onClick={() => setSelectedImageIndex(index)}
              />
            ))}
          </Thumbnails>

          {props.flickrAlbum && (
            <>
              <CustomerPhotosText>Customer photos</CustomerPhotosText>

              <a
                data-flickr-embed="true"
                href={props.flickrAlbum.url}
                title={flickrAlbumName}
              >
                <FlickrImage
                  src={props.flickrAlbum.mainPhotoUrl}
                  alt={flickrAlbumName}
                />
              </a>
            </>
          )}
        </Left>

        <Right>
          <h1>{props.name}</h1>

          <ProductSelectionsGrid>
            <div>
              <ProductSelectionText>Color:</ProductSelectionText>
            </div>
            <ColorButtons>
              {props.colors.map(color => (
                <ColorButton
                  key={color.name}
                  aria-label={color.name}
                  selected={selectedColor === color.name}
                  onClick={() => selectColor(color)}
                >
                  <ColorSquare color={color.name} width="30px" />
                </ColorButton>
              ))}
            </ColorButtons>

            <div>
              <ProductSelectionText>Waist size:</ProductSelectionText>
            </div>
            <SizeSelection>
              <SizeUnitButtons>
                <SizeUnitButton
                  selected={selectedSizeUnits === 'in'}
                  onClick={() => setSelectedSizeUnits('in')}
                >
                  <SizeUnitButtonText narrow={false}>inches</SizeUnitButtonText>
                  <SizeUnitButtonText narrow={true}>in</SizeUnitButtonText>
                </SizeUnitButton>
                <SizeUnitButton
                  selected={selectedSizeUnits === 'cm'}
                  onClick={() => setSelectedSizeUnits('cm')}
                >
                  <SizeUnitButtonText narrow={false}>
                    centimeters
                  </SizeUnitButtonText>
                  <SizeUnitButtonText narrow={true}>cm</SizeUnitButtonText>
                </SizeUnitButton>
              </SizeUnitButtons>
              <SizeButtons aria-label="waist sizes">
                {props.sizes.map(size => {
                  const isSoldOut = selectedColor
                    ? isColorSizeSoldOut(selectedColor, size)
                    : !props.colors.some(
                        color => !isColorSizeSoldOut(color.name, size)
                      );

                  return (
                    <SizeButton
                      key={size}
                      disabled={isSoldOut}
                      selected={selectedSize === size}
                      onClick={() => selectSize(size)}
                    >
                      {getSizeDisplay(size, selectedSizeUnits)}
                    </SizeButton>
                  );
                })}
              </SizeButtons>
            </SizeSelection>

            <div>
              <ProductSelectionText>Price:</ProductSelectionText>
            </div>
            <div>
              <ProductSelectionText>
                {props.temporaryPrice ? (
                  <span>
                    <del>${props.price}</del>&nbsp;
                    <TemporaryPriceText>
                      ${props.temporaryPrice.price} ($
                      {process.env.CURRENCY_CODE}) until{' '}
                      {props.temporaryPrice.untilDate}!
                    </TemporaryPriceText>
                  </span>
                ) : (
                  `$${props.price} (${process.env.CURRENCY_CODE})`
                )}
              </ProductSelectionText>
            </div>

            <div />
            <AddToCartContainer>
              <MainActionButton onClick={addToCartClicked}>
                Add to Cart
              </MainActionButton>
              {showInvalidSelectionMessage && (
                <AddToCartErrorMessage>
                  Please select a valid color and size.
                </AddToCartErrorMessage>
              )}
            </AddToCartContainer>

            <div />
            <MoreInfoContainer>
              <MoreInfoText>
                <MoreInfoAnchor
                  onClick={() => setIsSizeInfoShowing(!isSizeInfoShowing)}
                >
                  &#9432; SIZING
                </MoreInfoAnchor>
              </MoreInfoText>

              {isSizeInfoShowing && (
                <MoreInfo>
                  <MoreInfoLink to="/size-guide">View Size Guide</MoreInfoLink>
                </MoreInfo>
              )}
            </MoreInfoContainer>

            <div />
            <MoreInfoContainer>
              <MoreInfoText>
                <MoreInfoAnchor
                  onClick={() =>
                    setAreShippingRatesShowing(!areShippingRatesShowing)
                  }
                >
                  &#9432; SHIPPING RATES
                </MoreInfoAnchor>
              </MoreInfoText>

              {areShippingRatesShowing && (
                <MoreInfo isflex={true}>
                  <DestinationPrices
                    destinationName="United States"
                    pricesUsDollars={[
                      Number(process.env.SHIPPING_PRICE_US_1),
                      Number(process.env.SHIPPING_PRICE_US_2),
                      Number(process.env.SHIPPING_PRICE_US_3),
                    ]}
                  />
                  <DestinationPrices
                    destinationName="Australia"
                    pricesUsDollars={[
                      Number(process.env.SHIPPING_PRICE_AU_1),
                      Number(process.env.SHIPPING_PRICE_AU_2),
                      Number(process.env.SHIPPING_PRICE_AU_3),
                    ]}
                  />
                  <DestinationPrices
                    destinationName="Canada"
                    pricesUsDollars={[
                      Number(process.env.SHIPPING_PRICE_CA_1),
                      Number(process.env.SHIPPING_PRICE_CA_2),
                      Number(process.env.SHIPPING_PRICE_CA_3),
                    ]}
                  />
                  <DestinationPrices
                    destinationName="New Zealand"
                    pricesUsDollars={[
                      Number(process.env.SHIPPING_PRICE_NZ_1),
                      Number(process.env.SHIPPING_PRICE_NZ_2),
                      Number(process.env.SHIPPING_PRICE_NZ_3),
                    ]}
                  />
                  <DestinationPrices
                    destinationName="United Kingdom"
                    pricesUsDollars={[
                      Number(process.env.SHIPPING_PRICE_GB_1),
                      Number(process.env.SHIPPING_PRICE_GB_2),
                      Number(process.env.SHIPPING_PRICE_GB_3),
                    ]}
                  />
                  <DestinationPrices
                    destinationName="Rest of World"
                    pricesUsDollars={[
                      Number(process.env.SHIPPING_PRICE_RW_1),
                      Number(process.env.SHIPPING_PRICE_RW_2),
                      Number(process.env.SHIPPING_PRICE_RW_3),
                    ]}
                  />
                </MoreInfo>
              )}
            </MoreInfoContainer>

            <div />
            <MoreInfoContainer>
              <MoreInfoText>
                <MoreInfoAnchor
                  onClick={() =>
                    setArePaymentMethodsShowing(!arePaymentMethodsShowing)
                  }
                >
                  &#9432; PAYMENT METHODS
                </MoreInfoAnchor>
              </MoreInfoText>

              {arePaymentMethodsShowing && (
                <MoreInfo>
                  <UnorderedListNotIndented>
                    <li>Visa</li>
                    <li>Mastercard</li>
                    <li>Discover</li>
                    <li>American Express</li>
                    <li>PayPal account</li>
                  </UnorderedListNotIndented>
                  <p>Checkout is via PayPal.</p>
                </MoreInfo>
              )}
            </MoreInfoContainer>
          </ProductSelectionsGrid>

          <HorizontalRule />

          <ProductDetails>{props.details}</ProductDetails>
          {props.ratings.length > 0 && (
            <RatingsAndReviewsSection>
              <H2>RATINGS & REVIEWS</H2>
              <p>
                These tend to cluster around certain dates because we send out
                feedback requests to groups of recent customers at once.
              </p>
              <RatingSet
                ratings={props.ratings}
                selectedPageIndex={selectedReviewPageIndex}
                onPageNavClicked={setSelectedReviewPageIndex}
              />
            </RatingsAndReviewsSection>
          )}
        </Right>
      </Container>
    </Page>
  );
};

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 44;
  display: flex;
  flex-direction: column;
`;

const Right = styled.div`
  flex: 56;
  min-width: 50%;
  padding-left: 3%;
  display: flex;
  flex-direction: column;
`;

const Thumbnails = styled.div`
  margin-top: 1em;
  display: flex;
  flex-wrap: wrap;
`;

const MainImage = styled.img`
  width: 100%;
  flex-shrink: 0;
`;

const ThumbnailImage = styled.img`
  width: 4em;
  align-self: flex-start;
  margin: 0 0.1em 0.1em 0;
  user-select: none;
  cursor: pointer;
`;

const CustomerPhotosText = styled.h4`
  margin-top: 6em;
  text-transform: uppercase;
`;

const FlickrImage = styled.img`
  margin-bottom: 3em;
  width: 75%;
`;

const ProductSelectionsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(3.5em, 20%) auto;
  column-gap: 0.5em;
  align-items: start;
  row-gap: 1em;
`;

const ProductSelectionText = styled.p`
  text-transform: uppercase;
  margin: 0;
`;

const ColorButtons = styled.div`
  display: flex;
  gap: 1%;
`;

const ColorButton = styled.button<{ selected?: boolean }>`
  border-width: 2px;
  border-color: ${props => (props.selected ? 'black' : 'transparent')};
  border-style: solid;
  border-radius: 8px;
  padding: 2px;
  background-color: transparent;
  cursor: ${props => (props.selected ? 'inherit' : 'pointer')};
`;

const SizeSelection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

const SizeUnitButtons = styled.div`
  display: flex;
  background-color: dimgray;
  gap: 1px;
  border: 0;
  border-radius: 4px;
`;

const SizeUnitButton = styled.button<{ selected?: boolean }>`
  padding: 4px 6px;
  border-width: 1px;
  border-style: solid;
  &:first-child {
    border-right-width: 0;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }
  &:last-child {
    border-left-width: 0;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  text-transform: uppercase;
  font-size: 14px;
  color: ${props => (props.selected ? 'black' : 'dimgray')};
  background-color: ${props => (props.selected ? 'lightgray' : '#eeeeee')};
  border-color: ${props => (props.selected ? 'dimgray' : 'lightgray')};
  cursor: ${props => (props.selected ? 'inherit' : 'pointer')};
`;

const SizeUnitButtonText = styled.span<{ narrow: boolean }>`
  display: ${props => (props.narrow ? 'none' : 'block')};
  @media only screen and (max-width: 540px) {
    display: ${props => (props.narrow ? 'block' : 'none')};
  }
`;

const SizeButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const SizeButton = styled.button<{ selected?: boolean }>`
  width: 4.5em;
  border-width: 2px;
  border-color: ${props => (props.selected ? 'black' : 'transparent')};
  border-style: solid;
  border-radius: 8px;
  padding: 4px;
  background-color: #eeeeee;
  font-size: 16px;
  cursor: ${props => (props.selected ? 'inherit' : 'pointer')};
`;

const TemporaryPriceText = styled.span`
  color: red;
  text-transform: none;
`;

const AddToCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 1em;
  align-items: flex-start;
  justify-content: center;
`;

const MainActionButton = styled.button`
  height: 3em;
  background-color: #000;
  box-sizing: initial;
  border: 0px;
  border-radius: 8px;
  padding: 0 16px;
  color: #fff;
  cursor: pointer;
  font-size: 110%;
  text-transform: uppercase;
  &:hover {
    outline: 2px solid #000;
  }
`;

const AddToCartErrorMessage = styled.span`
  font-size: 90%;
  color: red;
`;

const MoreInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MoreInfoText = styled.p`
  margin: 0;
  font-size: 85%;
`;

const MoreInfoAnchor = styled.a`
  text-decoration: none;
  color: #000;
  text-transform: none;
`;

const MoreInfo = styled.div`
  font-size: 90%;
  margin: 0.5em 0 1em 1em;
  ul {
    margin-top: 0;
  }
  display: ${(props: { isflex?: boolean }) =>
    props.isflex ? 'flex' : 'undefined'};
  flex-wrap: ${(props: { isflex?: boolean }) =>
    props.isflex ? 'wrap' : 'undefined'};
`;

const MoreInfoLink = styled(Link)`
    text-decoration: underline;
    text-transform: none;
    color: #000;
}`;

const UnorderedListNotIndented = styled.ul`
  padding-left: 1em;
`;

const HorizontalRule = styled.hr`
  width: 100%;
`;

const ProductDetails = styled.div`
  box-sizing: undefined;
  font-size: 95%;
  margin-bottom: 2em;
`;

const RatingsAndReviewsSection = styled.div`
  box-sizing: undefined;
  font-size: 95%;
`;

const H2 = styled.h2`
  font-size: 16px;
`;
