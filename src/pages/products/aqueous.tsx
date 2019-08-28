import React from 'react';
import { InventoryState, ProductPage } from '../../components/ProductPage';
import ImgAqueous03 from '../../images/aqueous03.png';
import ImgAqueous04 from '../../images/aqueous04.png';
import ImgAqueous06 from '../../images/aqueous06.png';
import ImgAqueous07 from '../../images/aqueous07.png';
import ImgAqueous12 from '../../images/aqueous12.png';
import ImgAqueous14 from '../../images/aqueous14.png';
import ImgAqueous21 from '../../images/aqueous21.jpg';
import ImgAqueous22 from '../../images/aqueous22.jpg';
import ImgAqueous23 from '../../images/aqueous23.jpg';
import ImgAqueous24 from '../../images/aqueous24.jpg';
import ImgAqueous25 from '../../images/aqueous25.jpg';
import ImgAqueous26 from '../../images/aqueous26.jpg';
import ImgAqueous27 from '../../images/aqueous27.jpg';
import ImgAqueous28 from '../../images/aqueous28.jpg';
import ImgAqueous29 from '../../images/aqueous29.jpg';
import ImgAqueousColors from '../../images/aqueous_colors.png';
import { RATINGS_AQUEOUS } from '../../ratings/ratingsAqueous';
import { ColorSize } from '../../util/ColorSize';

export default class AqueousSkirtProductPage extends React.PureComponent {

    public render(): JSX.Element {

        return (

            <ProductPage
                name={'Aqueous Skirt'}
                details={
                    <>
                        <p>The Aqueous is a heavy, fluid, unique, knee-length skirt with large hip pockets and belt loops. The name refers to its smoothly-flowing drape and swirling seamlines.</p>

                        <p>Made in the USA of imported fabric.</p>

                        <h4>Style</h4>

                        <ul>
                            <li>Two large hip pockets</li>
                            <li>Distinctive spiralling seams</li>
                            <li>Heavy-weight, for stable pockets and better privacy</li>
                            <li>A fluid, natural drape&mdash;despite the weight</li>
                            <li>Belt loops (6)</li>
                            <li>Colors: Grey, Purple, Black</li>
                        </ul>

                        <h4>Materials</h4>

                        <ul>
                            <li>Main fabric: 6-ounce plain weave
                                <ul>
                                    <li>Linen gives it a natural texture and durability</li>
                                    <li>Rayon gives it excellent drape and prevents wrinkles</li>
                                    <li>Plain weave is the simplest of weaves: a simple over-under pattern that produces a strong fabric that's the same on each side. Contrast with twill, the weave that produces diagonal lines and is used in denim (and our Unaligned Skirt).</li>
                                    <li>About half the weight of jeans denim</li>
                                    <li>55% linen, 45% rayon</li>
                                </ul>
                            </li>
                            <li>Lining: 11-ounce ponte di roma
                                <ul>
                                    <li>Ponte di Roma is a style of knit that's smooth and stable (less stretchy) compared to other knits</li>
                                    <li>At 11 ounces per square yard, it's quite weighty</li>
                                    <li>The unexpectedly fluid drape of this heavy fabric is due to the rayon content and the ponte knit style</li>
                                    <li>67% rayon, 28% nylon, 5% spandex</li>
                                </ul>
                            </li>
                            <li>Side zipper: YKK nylon coil</li>
                            <li>Closure: metal hook-and-bar</li>
                        </ul>

                        <br/>
                        <p>Note: A few customers have reported the hook-and-bar starting to pull free from the fabric around it over time. We now consider it to be a construction flaw; the area should have been better reinforced. We do not have a fix, unfortunately. Wearing a belt to hold more of the tension of the waistband helps to prevent it.</p>
                    </>
                }
                colors={[
                    {
                        name: 'Black',
                        paypalButtonId: process.env.PAYPAL_BUTTON_ID_AQUEOUS_BLACK!,
                    },
                    {
                        name: 'Purple',
                        paypalButtonId: process.env.PAYPAL_BUTTON_ID_AQUEOUS_PURPLE!,
                    },
                    {
                        name: 'Grey',
                        paypalButtonId: process.env.PAYPAL_BUTTON_ID_AQUEOUS_GREY!,
                    },
                ]}
                sizes={[
                    '28-29 inches',
                    '30-31 inches',
                    '32-33 inches',
                    '34-35 inches',
                    '36-37 inches',
                    '38-39 inches',
                    '40-41 inches',
                    '42-43 inches',
                    '44-45 inches',
                ]}
                specialInventoryStates={new Map<ColorSize, InventoryState>()}
                priceUsDollars={parseFloat(process.env.PRICE_US_DOLLARS_AQUEOUS!)}
                photoUrls={[
                    ImgAqueous21,
                    ImgAqueousColors,
                    ImgAqueous26,
                    ImgAqueous27,
                    ImgAqueous23,
                    ImgAqueous29,
                    ImgAqueous24,
                    ImgAqueous22,
                    ImgAqueous25,
                    ImgAqueous28,
                    ImgAqueous04,
                    ImgAqueous12,
                    ImgAqueous03,
                    ImgAqueous07,
                    ImgAqueous14,
                    ImgAqueous06,
                ]}
                flickrAlbum={{
                    url: process.env.FLICKR_ALBUM_URL_AQUEOUS!,
                    mainPhotoUrl: process.env.FLICKR_ALBUM_MAIN_PHOTO_URL_AQUEOUS!,
                }}
                ratings={RATINGS_AQUEOUS}
            />
        );
    }
}
