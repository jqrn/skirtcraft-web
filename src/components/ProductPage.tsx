import { Link, navigate } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React from 'react';
import styled from 'styled-components';
import { DestinationPrices } from '../components/DestinationPrices';
import { Page } from '../components/Page';
import { CartContext } from '../context/CartContext';
import { Rating } from '../ratings/Rating';
import { ColorSize } from '../util/ColorSize';
import { addScriptToPage } from '../util/scriptUtils';
import { TemporaryPrice } from '../util/TemporaryPrice';
import { ColorSquare } from './ColorSquare';
import { RatingSet } from './RatingSet';

interface Props {
  name: string;
  details: JSX.Element;
  colors: string[];
  sizes: string[];
  soldOutColorSizes: ColorSize[];
  price: number;
  temporaryPrice?: TemporaryPrice;
  photoUrls: string[];
  flickrAlbum: {
    url: string;
    mainPhotoUrl: string;
  };
  ratings: Rating[];
}

interface State {
  selectedImageIndex: number;
  selectedColor?: string;
  selectedSize?: string;
  isSizeInfoShowing: boolean;
  areShippingRatesShowing: boolean;
  arePaymentMethodsShowing: boolean;
  selectedReviewPageIndex: number;
  showInvalidSelectionMessage: boolean;
}

export class ProductPage extends React.Component<Props, State> {
  static contextType = CartContext;

  public state: State = {
    selectedImageIndex: 0,
    isSizeInfoShowing: false,
    areShippingRatesShowing: false,
    arePaymentMethodsShowing: false,
    selectedReviewPageIndex: 0,
    showInvalidSelectionMessage: false,
  };

  public componentDidMount(): void {
    addScriptToPage('https://embedr.flickr.com/assets/client-code.js');
  }

  public render(): JSX.Element {
    const selectedImageUrl =
      this.props.photoUrls[this.state.selectedImageIndex];
    const flickrAlbumName = `${this.props.name} Backers and Customers`;

    return (
      <Page title={this.props.name}>
        <Container>
          <Left>
            <MainImage src={selectedImageUrl} alt={this.props.name} />

            <Thumbnails>
              {this.props.photoUrls.map((photoUrl, index) => (
                <ThumbnailImage
                  key={index}
                  id={`thumbnail-${index}`}
                  src={photoUrl}
                  alt={this.props.name}
                  onClick={() => this.thumbnailClicked(index)}
                />
              ))}
            </Thumbnails>

            <CustomerPhotosText>Customer photos</CustomerPhotosText>

            <OutboundLink
              data-flickr-embed="true"
              href={this.props.flickrAlbum.url}
              title={flickrAlbumName}
            >
              <FlickrImage
                src={this.props.flickrAlbum.mainPhotoUrl}
                alt={flickrAlbumName}
              />
            </OutboundLink>
          </Left>

          <Right>
            <h1>{this.props.name}</h1>

            <ProductSelectionsGrid>
              <div>
                <ProductSelectionText>Color:</ProductSelectionText>
              </div>
              <ColorButtons>
                {this.props.colors.map(color => (
                  <ColorButton
                    key={color}
                    aria-label={color}
                    selected={this.state.selectedColor === color}
                    onClick={() => this.selectColor(color)}
                  >
                    <ColorSquare color={color} width="30px" />
                  </ColorButton>
                ))}
              </ColorButtons>

              <div>
                <ProductSelectionText>
                  Waist size:
                  <br />
                  (inches)
                </ProductSelectionText>
              </div>
              <SizeButtons aria-label="waist sizes">
                {this.props.sizes.map(size => {
                  let disabled = false;
                  if (this.state.selectedColor) {
                    const colorSize = new ColorSize(
                      this.state.selectedColor,
                      size
                    );
                    disabled = this.props.soldOutColorSizes.some(
                      soldOutColorSize => soldOutColorSize.equals(colorSize)
                    );
                  }

                  return (
                    <SizeButton
                      key={size}
                      disabled={disabled}
                      selected={this.state.selectedSize === size}
                      onClick={() => this.selectSize(size)}
                    >
                      {size.replace(' inches', '')}
                    </SizeButton>
                  );
                })}
              </SizeButtons>

              <div>
                <ProductSelectionText>Price:</ProductSelectionText>
              </div>
              <div>
                <ProductSelectionText>
                  {this.props.temporaryPrice ? (
                    <span>
                      <del>${this.props.price}</del>&nbsp;
                      <TemporaryPriceText>
                        ${this.props.temporaryPrice.price} ($
                        {process.env.CURRENCY_CODE}) until{' '}
                        {this.props.temporaryPrice.untilDate}!
                      </TemporaryPriceText>
                    </span>
                  ) : (
                    `$${this.props.price} (${process.env.CURRENCY_CODE})`
                  )}
                </ProductSelectionText>
              </div>

              <div />
              <AddToCartContainer>
                <AddToCartButton onClick={() => this.addToCartClicked()}>
                  Add to Cart
                </AddToCartButton>
                {this.state.showInvalidSelectionMessage && (
                  <AddToCartErrorMessage>
                    Please select a valid color and size.
                  </AddToCartErrorMessage>
                )}
              </AddToCartContainer>

              <div />
              <MoreInfoContainer>
                <MoreInfoText>
                  <MoreInfoAnchor
                    onClick={() =>
                      this.setState({
                        isSizeInfoShowing: !this.state.isSizeInfoShowing,
                      })
                    }
                  >
                    &#9432; SIZING
                  </MoreInfoAnchor>
                </MoreInfoText>

                {this.state.isSizeInfoShowing && (
                  <MoreInfo>
                    <MoreInfoLink to="/size-guide">
                      View Size Guide
                    </MoreInfoLink>
                  </MoreInfo>
                )}
              </MoreInfoContainer>

              <div />
              <MoreInfoContainer>
                <MoreInfoText>
                  <MoreInfoAnchor
                    onClick={() =>
                      this.setState({
                        areShippingRatesShowing:
                          !this.state.areShippingRatesShowing,
                      })
                    }
                  >
                    &#9432; SHIPPING RATES
                  </MoreInfoAnchor>
                </MoreInfoText>

                {this.state.areShippingRatesShowing && (
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
                      destinationName="Canada"
                      pricesUsDollars={[
                        Number(process.env.SHIPPING_PRICE_CA_1),
                        Number(process.env.SHIPPING_PRICE_CA_2),
                        Number(process.env.SHIPPING_PRICE_CA_3),
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
                      this.setState({
                        arePaymentMethodsShowing:
                          !this.state.arePaymentMethodsShowing,
                      })
                    }
                  >
                    &#9432; PAYMENT METHODS
                  </MoreInfoAnchor>
                </MoreInfoText>

                {this.state.arePaymentMethodsShowing && (
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

            <hr style={{ width: '100%' }} />

            <ProductDetails>{this.props.details}</ProductDetails>

            <RatingsAndReviewsSection>
              <H2>RATINGS & REVIEWS</H2>
              <p>
                These tend to cluster around certain dates because we send out
                feedback requests to groups of recent customers at once.
              </p>
              <RatingSet
                ratings={this.props.ratings}
                selectedPageIndex={this.state.selectedReviewPageIndex}
                onPageNavClicked={(pageIndex: number) =>
                  this.setState({ selectedReviewPageIndex: pageIndex })
                }
              />
            </RatingsAndReviewsSection>
          </Right>
        </Container>
      </Page>
    );
  }

  private thumbnailClicked(index: number): void {
    this.setState({ selectedImageIndex: index });
  }

  private selectColor(selectedColor: string): void {
    this.setState({ selectedColor, showInvalidSelectionMessage: false });
  }

  private selectSize(selectedSize: string): void {
    this.setState({ selectedSize, showInvalidSelectionMessage: false });
  }

  private addToCartClicked(): void {
    let isSelectionValid = false;

    if (this.state.selectedColor && this.state.selectedSize) {
      const selectedColorSize = new ColorSize(
        this.state.selectedColor,
        this.state.selectedSize
      );
      if (
        !this.props.soldOutColorSizes.some(soldOutColorSize =>
          soldOutColorSize.equals(selectedColorSize)
        )
      ) {
        isSelectionValid = true;
      }
    }

    if (!isSelectionValid) {
      this.setState({ showInvalidSelectionMessage: true });
    } else {
      this.context.addItem({
        productName: this.props.name,
        color: this.state.selectedColor,
        size: this.state.selectedSize,
        price: this.props.temporaryPrice
          ? this.props.temporaryPrice.price
          : this.props.price,
      });
      navigate('/cart');
    }
  }
}

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
  max-width: 25em;
  display: grid;
  grid-template-columns: 30% auto;
  align-items: start;
  row-gap: 1em;
`;

const ProductSelectionText = styled.p`
  font-size: 85%;
  text-transform: uppercase;
  margin: 0.25em;
`;

const ColorButtons = styled.div`
  display: flex;
  gap: 8px;
`;

const ColorButton = styled.button<{ selected?: boolean }>`
  border-width: 2px;
  border-color: ${props => (props.selected ? 'black' : 'transparent')};
  border-radius: 8px;
  padding: 2px;
  background-color: transparent;
`;

const SizeButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const SizeButton = styled.button<{ selected?: boolean }>`
  border-width: 2px;
  border-color: ${props => (props.selected ? 'black' : 'transparent')};
  border-radius: 8px;
  padding: 4px;
  background-color: #eeeeee;
  font-size: 16px;
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

const AddToCartButton = styled.button`
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
