import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { Page } from '../components/Page';
import { NavTabDef } from '../enums/NavTabDef';
import ImgMeasuringTape from '../images/measuring_tape.png';

const SizeGuidePage = () => (
  <Page title={NavTabDef.SIZE_GUIDE} currentTab={NavTabDef.SIZE_GUIDE}>
    <Container>
      <LeftContainer>
        <h1>Size Guide</h1>

        <div>
          <p>Your Skirtcraft waist size may or may not be your usual size.</p>

          <H2>Get Your Size</H2>

          <ol>
            <li>
              Select a pair of pants/trousers, or a skirt, that fits you well.
              Preferably of a heavier fabric like denim, and not stretchy.
            </li>
            <li>
              Lay it out flat. Pull the waistband from the sides so that it is
              lying nearly in a straight line (but not stretched).
            </li>
            <li>Measure the waistband from left to right.</li>
            <li>
              Compare the measurement to how the skirt sizes measure in the
              tables below. Keep in mind that there is some variation between
              skirts of a given size, so your skirt's measurement may be off by
              up to about 3/8 inch (1 cm) from the values given.
            </li>
          </ol>
        </div>

        <H2>SIZE TABLES</H2>

        <H3>UNALIGNED SKIRT</H3>

        <SizeTable>
          <tbody>
            <tr>
              <th>Size (in)</th>
              <th>Size (cm)</th>
              <th>Flat lay waistband width</th>
            </tr>
            <tr>
              <SizeTableInchesCell>30-31</SizeTableInchesCell>
              <SizeTableInchesCell>75-79</SizeTableInchesCell>
              <td>15 1/2 inches (39 cm)</td>
            </tr>
            <tr>
              <SizeTableInchesCell>32-33</SizeTableInchesCell>
              <SizeTableInchesCell>80-84</SizeTableInchesCell>
              <td>16 1/2 inches (42 cm)</td>
            </tr>
            <tr>
              <SizeTableInchesCell>34-35</SizeTableInchesCell>
              <SizeTableInchesCell>85-89</SizeTableInchesCell>
              <td>17 1/2 inches (44 1/2 cm)</td>
            </tr>
            <tr>
              <SizeTableInchesCell>36-37</SizeTableInchesCell>
              <SizeTableInchesCell>90-94</SizeTableInchesCell>
              <td>18 3/4 inches (47 1/2 cm)</td>
            </tr>
            <tr>
              <SizeTableInchesCell>38-39</SizeTableInchesCell>
              <SizeTableInchesCell>95-99</SizeTableInchesCell>
              <td>19 3/4 inches (50 cm)</td>
            </tr>
            <tr>
              <SizeTableInchesCell>40-41</SizeTableInchesCell>
              <SizeTableInchesCell>100-105</SizeTableInchesCell>
              <td>20 3/4 inches (53 cm)</td>
            </tr>
            <tr>
              <SizeTableInchesCell>42-43</SizeTableInchesCell>
              <SizeTableInchesCell>106-110</SizeTableInchesCell>
              <td>21 3/4 inches (55 cm)</td>
            </tr>
            <tr>
              <SizeTableInchesCell>44-45</SizeTableInchesCell>
              <SizeTableInchesCell>111-115</SizeTableInchesCell>
              <td>22 3/4 inches (58 cm)</td>
            </tr>
          </tbody>
        </SizeTable>

        <H3>AQUEOUS SKIRT</H3>

        <SizeTable>
          <tbody>
            <tr>
              <th>Size (in)</th>
              <th>Size (cm)</th>
              <th>Flat lay waistband width</th>
            </tr>
            <tr>
              <SizeTableInchesCell>28-29</SizeTableInchesCell>
              <SizeTableInchesCell>70-74</SizeTableInchesCell>
              <td>14 1/2 inches (37 cm)</td>
            </tr>
            <tr>
              <SizeTableInchesCell>30-31</SizeTableInchesCell>
              <SizeTableInchesCell>75-79</SizeTableInchesCell>
              <td>15 1/2 inches (39 cm)</td>
            </tr>
            <tr>
              <SizeTableInchesCell>32-33</SizeTableInchesCell>
              <SizeTableInchesCell>80-84</SizeTableInchesCell>
              <td>16 1/2 inches (42 cm)</td>
            </tr>
            <tr>
              <SizeTableInchesCell>34-35</SizeTableInchesCell>
              <SizeTableInchesCell>85-89</SizeTableInchesCell>
              <td>17 1/2 inches (44 1/2 cm)</td>
            </tr>
            <tr>
              <SizeTableInchesCell>36-37</SizeTableInchesCell>
              <SizeTableInchesCell>90-94</SizeTableInchesCell>
              <td>18 1/2 inches (47 cm)</td>
            </tr>
            <tr>
              <SizeTableInchesCell>38-39</SizeTableInchesCell>
              <SizeTableInchesCell>95-99</SizeTableInchesCell>
              <td>19 1/2 inches (49 1/2 cm)</td>
            </tr>
            <tr>
              <SizeTableInchesCell>40-41</SizeTableInchesCell>
              <SizeTableInchesCell>100-105</SizeTableInchesCell>
              <td>20 1/2 inches (52 cm)</td>
            </tr>
            <tr>
              <SizeTableInchesCell>42-43</SizeTableInchesCell>
              <SizeTableInchesCell>106-110</SizeTableInchesCell>
              <td>21 1/2 inches (54 1/2 cm)</td>
            </tr>
            <tr>
              <SizeTableInchesCell>44-45</SizeTableInchesCell>
              <SizeTableInchesCell>111-115</SizeTableInchesCell>
              <td>22 1/2 inches (57 cm)</td>
            </tr>
          </tbody>
        </SizeTable>

        <H3>TELLURIAN SKIRT</H3>

        <SizeTable>
          <tbody>
            <tr>
              <th>Size (in)</th>
              <th>Size (cm)</th>
              <th>Flat lay waistband width</th>
            </tr>
            <tr>
              <SizeTableInchesCell>26-29</SizeTableInchesCell>
              <SizeTableInchesCell>65-74</SizeTableInchesCell>
              <td>13 - 15 inches (33-38 cm)</td>
            </tr>
            <tr>
              <SizeTableInchesCell>30-34</SizeTableInchesCell>
              <SizeTableInchesCell>75-87</SizeTableInchesCell>
              <td>15 - 17 1/2 inches (38 - 44 cm)</td>
            </tr>
            <tr>
              <SizeTableInchesCell>35-40</SizeTableInchesCell>
              <SizeTableInchesCell>88-102</SizeTableInchesCell>
              <td>17 1/2 - 20 1/2 inches (44 - 52 cm)</td>
            </tr>
            <tr>
              <SizeTableInchesCell>41-46</SizeTableInchesCell>
              <SizeTableInchesCell>103-118</SizeTableInchesCell>
              <td>20 1/2 - 23 1/2 inches (52 - 57 cm)</td>
            </tr>
            <tr>
              <SizeTableInchesCell>47-54</SizeTableInchesCell>
              <SizeTableInchesCell>119-138</SizeTableInchesCell>
              <td>23 1/2 - 27 inches (57 - 69 cm)</td>
            </tr>
          </tbody>
        </SizeTable>

        <H2>Why Our Sizing Is Different</H2>

        <ul>
          <li>
            Sizing differs from brand to brand in general, partly due to vanity
            sizing.
          </li>
          <li>
            Some people like to wear the waistband lower on their hips, while
            others prefer it be closer to their natural waist. So two people
            with the same true waist size might want two different skirt sizes.
          </li>
          <li>
            Since you won't be able to try on different sizes before choosing,
            it's critical that we have an objective sizing method that allows
            you to clearly figure out your correct size at home.
          </li>
        </ul>

        <H2>Skirt Length</H2>

        <p>
          Each product's page lists its length. Skirt lengths are measured on
          the side, from the top of the waistband to the bottom of the hem.
        </p>

        <p>To test how long a skirt would be on you:</p>

        <ul>
          <li>
            Kneel. Measure the distance from the floor to where you'd like to
            wear the top edge of your waistband. Measure at the side of your
            body rather than the front or back.
          </li>
          <li>
            That measurement is approximately how long a skirt would need to be
            to reach the middle of your knees while standing.
          </li>
          <li>
            If the measurement is less than the skirt length, the skirt will
            fall below the middle of your knee. If more than the skirt length,
            it will fall above.
          </li>
          <li>
            Several people who've tested the skirt have liked it longer or
            shorter than mid-knee. It just depends on your preference.
          </li>
        </ul>

        <p>
          We would like to offer more waist sizes and more lengths, but it's
          difficult to do so given our small scale and factory minimum order
          quantities.
        </p>

        <p>
          If you do some sewing and are wondering about shortening the skirt
          yourself: yes, it is possible. See{' '}
          <Link to="/alterations">DIY Alterations</Link>.
        </p>
      </LeftContainer>

      <img src={ImgMeasuringTape} alt="measuring tape" />
    </Container>
  </Page>
);

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1em;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SizeTable = styled.table`
  th,
  td {
    padding: 0.25em;
  }
`;

const SizeTableInchesCell = styled.td`
  text-align: center;
`;

const H2 = styled.h2`
  font-size: 18px;
  margin: 1.5em 0 0.5em 0;
`;

const H3 = styled.h3`
  font-size: 16px;
  margin: 1.5em 0 1em 0;
`;

export default SizeGuidePage;
