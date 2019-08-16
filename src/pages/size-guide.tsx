import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { Page } from '../components/Page';
import { NavTabDef } from '../enums/NavTabDef';
import ImgMeasuringTape from '../images/measuring_tape.png';

export default class SizeGuidePage extends React.PureComponent {

    public render(): JSX.Element {

        return (

            <Page title={NavTabDef.SIZE_GUIDE}  currentTab={NavTabDef.SIZE_GUIDE}>

                <Container>

                <h2>Size Guide</h2>

                    <div>

                        <ImageRight src={ImgMeasuringTape} alt='measuring tape' />
                        <p>Your Skirtcraft waist size may or may not be your usual size.</p>

                        <h3>Get Your Size</h3>

                        <ol>
                            <li>Select a pair of pants/trousers, or a skirt, that fits you well. Preferably of a heavier fabric like denim, and not stretchy.</li>
                            <li>Lay it out flat. Pull the waistband from the sides so that it is lying nearly in a straight line (but not stretched).</li>
                            <li>Measure the waistband from left to right.</li>
                            <li>Compare the measurement to how the skirt sizes measure in the following table. Keep in mind that there is some variation between skirts of a given size, so your skirt's measurement may be off by up to about 3/8 inch (1 cm) from the values given.</li>
                        </ol>
                    </div>

                    <SizeTable>
                        <tbody>
                            <tr><th>Size</th><th>Unaligned (before washing)</th><th>Aqueous (before washing)</th></tr>
                            <tr><SizeTableInchesCell>28-29</SizeTableInchesCell><td>(not available)</td><td>14 1/2 inches (36 3/4 cm)</td></tr>
                            <tr><SizeTableInchesCell>30-31</SizeTableInchesCell><td>15 1/2 inches (39 1/4 cm)</td><td>15 1/2 inches (39 1/4 cm)</td></tr>
                            <tr><SizeTableInchesCell>32-33</SizeTableInchesCell><td>16 1/2 inches (42 cm)</td><td>16 1/2 inches (42 cm)</td></tr>
                            <tr><SizeTableInchesCell>34-35</SizeTableInchesCell><td>17 1/2 inches (44 1/2 cm)</td><td>17 1/2 inches (44 1/2 cm)</td></tr>
                            <tr><SizeTableInchesCell>36-37</SizeTableInchesCell><td>18 3/4 inches (47 1/2 cm)</td><td>18 1/2 inches (47 cm)</td></tr>
                            <tr><SizeTableInchesCell>38-39</SizeTableInchesCell><td>19 3/4 inches (50 1/4 cm)</td><td>19 1/2 inches (49 1/2 cm)</td></tr>
                            <tr><SizeTableInchesCell>40-41</SizeTableInchesCell><td>20 3/4 inches (52 3/4 cm)</td><td>20 1/2 inches (52 cm)</td></tr>
                            <tr><SizeTableInchesCell>42-43</SizeTableInchesCell><td>21 3/4 inches (55 1/4 cm)</td><td>21 1/2 inches (54 1/2 cm)</td></tr>
                            <tr><SizeTableInchesCell>44-45</SizeTableInchesCell><td>22 3/4 inches (57 3/4 cm)</td><td>22 1/2 inches (57 1/4 cm)</td></tr>
                        </tbody>
                    </SizeTable>

                    <h3>Why Our Sizing Is Different</h3>

                    <ul>
                        <li>Sizing differs from brand to brand in general, partly due to vanity sizing.</li>
                        <li>Some people like to wear the waistband lower on their hips, while others prefer it be closer to their natural waist. So two people with the same true waist size might want two different skirt sizes.</li>
                        <li>Since you won't be able to try on different sizes before choosing, it's critical that we have an objective sizing method that allows you to clearly figure out your correct size at home.</li>
                    </ul>

                    <h3>Skirt Length</h3>

                    <p>Skirt length, measured on the side, from the top of the waistband to the bottom of the hem:</p>

                    <ul>
                        <li>Unaligned Skirt: 22 1/2 inches (57 cm)</li>
                        <li>Aqueous Skirt: 21 1/2 inches (55 cm)</li>
                    </ul>

                    <p>To test how long the skirt would be on you:</p>

                    <ul>
                        <li>Kneel. Measure the distance from the floor to where you'd like to wear the top edge of your waistband.  Measure at the side of your body rather than the front or back.</li>
                        <li>That measurement is approximately how long a skirt would need to be to reach the middle of your knees while standing.</li>
                        <li>If the measurement is less than the skirt length, the skirt will fall below the middle of your knee.  If more than the skirt length, it will fall above.</li>
                        <li>Several people who've tested the skirt have liked it longer or shorter than mid-knee.  It just depends on your preference.</li>
                    </ul>

                    <p>We would like to offer more waist sizes and more lengths, but it's difficult to do so given our small scale and factory minimum order quantities.</p>

                    <p>If you do some sewing and are wondering about shortening the skirt yourself: yes, it is possible. See <Link to='/alterations'>DIY Alterations</Link>.</p>

                    <h3>Shrinking</h3>

                    <p>The fabric is pre-shrunk, but may shrink up to 1 inch in waist circumference and 1 inch in length after washing. Some of the shrinkage goes away again as you wear it.</p>

                </Container>
            </Page>
        );
    }
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const ImageRight = styled.img`
    float: right;
    margin-left: 1em;
    width: 30%;
    max-width: 12em;
`;

const SizeTable = styled.table`
    width:80%;
    margin: 1.5em auto;
`;

const SizeTableInchesCell = styled.td`
    text-align: center;
    margin: 0.5em;
`;
