import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { MeasurementPairTableCell } from '../components/MeasurementPairTableCell';
import { Page } from '../components/Page';
import { NavTabDef } from '../enums/NavTabDef';

const SizeGuidePage = () => (
  <Page title={NavTabDef.SIZE_GUIDE} currentTab={NavTabDef.SIZE_GUIDE}>
    <Container>
      <h1>Size Guide</h1>

      <div>
        <p>Your Skirtcraft waist size may or may not be your usual size.</p>

        <H2>Get Your Flat Lay Measurement</H2>

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
            Compare the measurement to how the skirt sizes measure in the tables
            below. Keep in mind that there is some variation between skirts of a
            given size, so your skirt's measurement may be off by up to about
            3/8 inch (1 cm) from the values given.
          </li>
        </ol>
      </div>

      <H2>MEASUREMENT TABLES</H2>

      <H3>UNALIGNED SKIRT</H3>

      <SizeTable>
        <tbody>
          <tr>
            <th>Size</th>
            <th>Flat lay waistband width</th>
          </tr>
          <tr>
            <MeasurementPairTableCell in="30-31" cm="75-79" />
            <MeasurementPairTableCell in="15.5" cm="39" />
          </tr>
          <tr>
            <MeasurementPairTableCell in="32-33" cm="80-84" />
            <MeasurementPairTableCell in="16.5" cm="42" />
          </tr>
          <tr>
            <MeasurementPairTableCell in="34-35" cm="85-89" />
            <MeasurementPairTableCell in="17.5" cm="44.5" />
          </tr>
          <tr>
            <MeasurementPairTableCell in="36-37" cm="90-94" />
            <MeasurementPairTableCell in="18.75" cm="47.5" />
          </tr>
          <tr>
            <MeasurementPairTableCell in="38-39" cm="95-99" />
            <MeasurementPairTableCell in="19.75" cm="50" />
          </tr>
          <tr>
            <MeasurementPairTableCell in="40-41" cm="100-105" />
            <MeasurementPairTableCell in="20.75" cm="53" />
          </tr>
          <tr>
            <MeasurementPairTableCell in="42-43" cm="106-110" />
            <MeasurementPairTableCell in="21.75" cm="55" />
          </tr>
          <tr>
            <MeasurementPairTableCell in="44-45" cm="111-115" />
            <MeasurementPairTableCell in="22.75" cm="58" />
          </tr>
        </tbody>
      </SizeTable>

      <H3>AQUEOUS SKIRT</H3>

      <SizeTable>
        <tbody>
          <tr>
            <th>Size</th>
            <th>Flat lay waistband width</th>
          </tr>
          <tr>
            <MeasurementPairTableCell in="28-29" cm="70-74" />
            <MeasurementPairTableCell in="14.5" cm="37" />
          </tr>
          <tr>
            <MeasurementPairTableCell in="30-31" cm="75-79" />
            <MeasurementPairTableCell in="15.5" cm="39" />
          </tr>
          <tr>
            <MeasurementPairTableCell in="32-33" cm="80-84" />
            <MeasurementPairTableCell in="16.5" cm="42" />
          </tr>
          <tr>
            <MeasurementPairTableCell in="34-35" cm="85-89" />
            <MeasurementPairTableCell in="17.5" cm="44.5" />
          </tr>
          <tr>
            <MeasurementPairTableCell in="36-37" cm="90-94" />
            <MeasurementPairTableCell in="18.5" cm="47" />
          </tr>
          <tr>
            <MeasurementPairTableCell in="38-39" cm="95-99" />
            <MeasurementPairTableCell in="19.5" cm="49.5" />
          </tr>
          <tr>
            <MeasurementPairTableCell in="40-41" cm="100-105" />
            <MeasurementPairTableCell in="20.5" cm="52" />
          </tr>
          <tr>
            <MeasurementPairTableCell in="42-43" cm="106-110" />
            <MeasurementPairTableCell in="21.5" cm="54.5" />
          </tr>
          <tr>
            <MeasurementPairTableCell in="44-45" cm="111-115" />
            <MeasurementPairTableCell in="22.5" cm="57" />
          </tr>
        </tbody>
      </SizeTable>

      <H3>TELLURIAN SKIRT</H3>

      <SizeTable>
        <tbody>
          <tr>
            <th>Size</th>
            <th>Flat lay waistband width</th>
          </tr>
          <tr>
            <MeasurementPairTableCell in="26-29" cm="65-74" />
            <MeasurementPairTableCell in="13-15" cm="33-38" />
          </tr>
          <tr>
            <MeasurementPairTableCell in="30-34" cm="75-87" />
            <MeasurementPairTableCell in="15-17.5" cm="38-44" />
          </tr>
          <tr>
            <MeasurementPairTableCell in="35-40" cm="88-102" />
            <MeasurementPairTableCell in="17.5-20.5" cm="44-52" />
          </tr>
          <tr>
            <MeasurementPairTableCell in="41-46" cm="103-118" />
            <MeasurementPairTableCell in="20.5-23.5" cm="52-60" />
          </tr>
          <tr>
            <MeasurementPairTableCell in="47-54" cm="119-138" />
            <MeasurementPairTableCell in="23.5-27" cm="60-69" />
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
          others prefer it be closer to their natural waist. So two people with
          the same true waist size might want two different skirt sizes.
        </li>
        <li>
          Since you won't be able to try on different sizes before choosing,
          it's critical that we have an objective sizing method that allows you
          to clearly figure out your correct size at home.
        </li>
      </ul>

      <H2>Skirt Length</H2>

      <p>
        Each product's page lists its length. Skirt lengths are measured on the
        side, from the top of the waistband to the bottom of the hem.
      </p>

      <p>To test how long a skirt would be on you:</p>

      <ul>
        <li>
          Kneel. Measure the distance from the floor to where you'd like to wear
          the top edge of your waistband. Measure at the side of your body
          rather than the front or back.
        </li>
        <li>
          That measurement is approximately how long a skirt would need to be to
          reach the middle of your knees while standing.
        </li>
        <li>
          If the measurement is less than the skirt length, the skirt will fall
          below the middle of your knee. If more than the skirt length, it will
          fall above.
        </li>
        <li>
          Several people who've tested the skirt have liked it longer or shorter
          than mid-knee. It just depends on your preference.
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
    </Container>
  </Page>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SizeTable = styled.table`
  border: 0;
  th,
  td {
    border: 0;
    padding: 0.75em 3em 0.75em 1em;
    text-align: left;
    vertical-align: top;
  }
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
