import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React from 'react';
import styled from 'styled-components';
import { DestinationPrices } from '../components/DestinationPrices';
import { Page } from '../components/Page';
import { Rating } from '../ratings/Rating';
import { ColorSize } from '../util/ColorSize';
import { addScriptToPage } from '../util/scriptUtils';
import { TemporaryPrice } from '../util/TemporaryPrice';
import { RatingSet } from './RatingSet';

interface Color {
    name: string;
    paypalButtonId: string;
}

export enum InventoryState {
    FEW_LEFT = 'few left',
    SOLD_OUT = 'sold out',
}

interface Props {
    name: string;
    details: JSX.Element;
    colors: Color[];
    sizes: string[];
    specialInventoryStates: Map<ColorSize, InventoryState>;
    priceUsDollars: number;
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
    selectedColor?: Color;
    selectedSize?: string;
    isSizeInfoShowing: boolean;
    areShippingRatesShowing: boolean;
    arePaymentMethodsShowing: boolean;
    selectedReviewPageIndex: number;
}

export class ProductPage extends React.Component<Props, State> {

    public state: State = {
        selectedImageIndex: 0,
        isSizeInfoShowing: false,
        areShippingRatesShowing: false,
        arePaymentMethodsShowing: false,
        selectedReviewPageIndex: 0,
    };

    public componentDidMount(): void {
        addScriptToPage('https://embedr.flickr.com/assets/client-code.js');
    }

    public render(): JSX.Element {

        const selectedImageUrl = this.props.photoUrls[this.state.selectedImageIndex];
        const flickrAlbumName = `${this.props.name} Backers and Customers`;

        return (

            <Page title={this.props.name}>

                <Container>

                    <Left>

                        <MainImage src={selectedImageUrl} alt={this.props.name}/>

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

                        <OutboundLink data-flickr-embed='true' href={this.props.flickrAlbum.url} title={flickrAlbumName}>
                            <FlickrImage src={this.props.flickrAlbum.mainPhotoUrl} alt={flickrAlbumName} />
                        </OutboundLink>

                    </Left>

                    <Right>

                        <h1>{this.props.name}</h1>

                        <form target='paypal' action='https://www.paypal.com/cgi-bin/webscr' method='post'>

                            <input type='hidden' name='cmd' value='_s-xclick'/>
                            <input type='hidden' name='hosted_button_id' value={this.state.selectedColor ? this.state.selectedColor.paypalButtonId : undefined} onChange={() => { return; }}/>
                            <input type='hidden' name='on0' value='Waist Size'/>

                            <ProductSelectionsGrid>

                                <div>
                                    <ProductSelectionText>Color:</ProductSelectionText>
                                </div>
                                <div>
                                    <ProductDropdown aria-label='color' onChange={(changeEvent) => this.selectColor(changeEvent)}>
                                        <option value='none'>select&nbsp;&nbsp;&#x2193;</option>
                                        {this.props.colors.map((color) => (
                                            <option
                                                key={color.name}
                                                value={color.name}
                                            >
                                                {color.name}
                                            </option>
                                        ))}
                                    </ProductDropdown>
                                </div>

                                <div>
                                    <ProductSelectionText>Size (waist):</ProductSelectionText>
                                </div>
                                <div>
                                    <ProductDropdown aria-label='waist size'  name='os0' onChange={(changeEvent) => this.selectSize(changeEvent)}>
                                        <option value='none'>select&nbsp;&nbsp;&#x2193;</option>
                                        {this.props.sizes.map((size) => {
                                            let displayText = size;
                                            if (this.state.selectedColor) {
                                                const colorSize: ColorSize = new ColorSize(this.state.selectedColor.name, size);
                                                const specialInventoryState = Array.from(this.props.specialInventoryStates.entries())
                                                    .find((inventoryState) => inventoryState[0].equals(colorSize));
                                                if (specialInventoryState) {
                                                    displayText += ` (${specialInventoryState[1].toUpperCase()})`;
                                                }
                                            }

                                            return (
                                                <option
                                                    key={size}
                                                    value={size}
                                                >
                                                    {displayText}
                                                </option>
                                            );
                                        })}
                                    </ProductDropdown>
                                </div>

                                <div>
                                    <ProductSelectionText>Price:</ProductSelectionText>
                                </div>
                                <div>
                                    <ProductSelectionText>
                                        {this.props.temporaryPrice
                                            ? (
                                                <span>
                                                    <del>${this.props.priceUsDollars}</del>&nbsp;
                                                    <TemporaryPriceText>${this.props.temporaryPrice.priceUsDollars} until {this.props.temporaryPrice.untilDate}!</TemporaryPriceText>
                                                </span>
                                            )
                                            : `$${this.props.priceUsDollars}`
                                        }
                                    </ProductSelectionText>
                                </div>

                                <div>
                                    <p>&nbsp;</p>
                                </div>
                                <div>
                                    <AddToCartSubmit type='submit' name='submit' value='Add to Cart' alt='PayPal - The safer, easier way to pay online!' onClick={(mouseEvent) => this.addToCart(mouseEvent)} />
                                    <img alt='pixel' src='https://www.paypalobjects.com/en_US/i/scr/pixel.gif' width='1' height='1' />
                                </div>

                                <div/>
                                <MoreInfoContainer>
                                    <MoreInfoText>
                                        <MoreInfoAnchor onClick={() => this.setState({ isSizeInfoShowing: !this.state.isSizeInfoShowing})}>
                                            &#9432; SIZING
                                        </MoreInfoAnchor>
                                    </MoreInfoText>

                                    {this.state.isSizeInfoShowing && (
                                        <MoreInfo>
                                            <MoreInfoLink to='/size-guide'>View Size Guide</MoreInfoLink>
                                        </MoreInfo>
                                    )}
                                </MoreInfoContainer>

                                <div/>
                                <MoreInfoContainer>
                                    <MoreInfoText>
                                        <MoreInfoAnchor onClick={() => this.setState({ areShippingRatesShowing: !this.state.areShippingRatesShowing})}>
                                            &#9432; SHIPPING RATES
                                        </MoreInfoAnchor>
                                    </MoreInfoText>

                                    {this.state.areShippingRatesShowing && (
                                        <MoreInfo isflex={true}>
                                            <DestinationPrices destinationName='United States' pricesUsDollars={[11, 14, 16]} />
                                            <DestinationPrices destinationName='Canada' pricesUsDollars={[16, 25, 31]} />
                                            <DestinationPrices destinationName='Rest of World' pricesUsDollars={[23, 35, 43]} />
                                        </MoreInfo>
                                    )}
                                </MoreInfoContainer>

                                <div/>
                                <MoreInfoContainer>
                                    <MoreInfoText>
                                        <MoreInfoAnchor onClick={() => this.setState({ arePaymentMethodsShowing: !this.state.arePaymentMethodsShowing})}>
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
                                            <p>To pay by credit card: from your cart, click "Check Out - Pay without a PayPal account" (instead of "PayPal Check Out").</p>
                                        </MoreInfo>
                                    )}
                                </MoreInfoContainer>

                            </ProductSelectionsGrid>

                        </form>

                        <hr style={{ width: '100%' }} />

                        <ProductDetails>
                            {this.props.details}
                        </ProductDetails>

                        <RatingsAndReviewsSection>
                            <H2>RATINGS & REVIEWS</H2>
                            <p>These tend to cluster around certain dates because we send out feedback requests to groups of recent customers at once.</p>
                            <RatingSet
                                ratings={this.props.ratings}
                                selectedPageIndex={this.state.selectedReviewPageIndex}
                                onPageNavClicked={(pageIndex: number) => this.setState({ selectedReviewPageIndex: pageIndex})}
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

    private selectColor(changeEvent: React.ChangeEvent<HTMLSelectElement>): void {
        const selectedColor = changeEvent.currentTarget.value
            ? this.props.colors.find((color) => color.name == changeEvent.currentTarget.value)
            : undefined;
        this.setState({ selectedColor });
        console.log('color: ', selectedColor ? selectedColor.name : '(none)');
    }

    private selectSize(changeEvent: React.ChangeEvent<HTMLSelectElement>): void {
        const selectedSize = changeEvent.currentTarget.value
            ? this.props.sizes.find((size) => size == changeEvent.currentTarget.value)
            : undefined;
        this.setState({ selectedSize });
        console.log('size: ', selectedSize);
    }

    private addToCart(mouseEvent: React.MouseEvent<HTMLInputElement>): void {

        const messages: string[] = [];

        if (this.state.selectedColor && this.state.selectedSize) {
            const selectedColorSize = new ColorSize(this.state.selectedColor.name, this.state.selectedSize);
            if (Array.from(this.props.specialInventoryStates.entries()).find((inventoryState) =>
                inventoryState[0].equals(selectedColorSize) && inventoryState[1] == InventoryState.SOLD_OUT)
            ) {
                messages.push(`Sorry, ${this.state.selectedColor.name} is sold out in size ${this.state.selectedSize}.`);
            }
        } else {
            if (!this.state.selectedColor) {
                messages.push('Please select a color.');
            }
            if (!this.state.selectedSize) {
                messages.push('Please select a size.');
            }
        }

        if (messages.length > 0) {
            alert(messages.join('\r\n'));
            mouseEvent.preventDefault();
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
    max-width: 20em;
    display: grid;
    grid-template-columns: 40% auto;
    align-items: center;
    row-gap: 0.5em;
`;

const ProductSelectionText = styled.p`
    font-size: 85%;
    text-transform: uppercase;
    margin: 0.25em;
    line-height: 2.25em;
`;

const TemporaryPriceText = styled.span`
    color: red;
    text-transform: none;
`;

const ProductDropdown = styled.select`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0;
    background-color: #eee;
    padding: 0.5em;
    width: 100%;
    font-size: 85%;
    text-overflow: ellipsis;
`;

const AddToCartSubmit = styled.input`
    font-size: 90%;
    height: 2.5em;
    padding-top: 0.2em;
    margin-bottom: 1em;
    background-color: #0A9E1E;
    border-radius: 3px;
    color: #fff;
    cursor: pointer;
    text-transform: uppercase;
    transition: background-color 0.3s;
    &:hover {
        background-color: #1DC237;
    }
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
    display: ${(props: { isflex?: boolean }) => props.isflex ? 'flex' : 'undefined'};
    flex-wrap: ${(props: { isflex?: boolean }) => props.isflex ? 'wrap' : 'undefined'};
`;

const MoreInfoLink = styled((props: any) => <Link {...props} />)`
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
