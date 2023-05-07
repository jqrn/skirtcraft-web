import React from 'react';
import styled from 'styled-components';
import { Page } from '../components/Page';
import { NavTabDef } from '../enums/NavTabDef';

const MapPage = () => (
  <Page title={NavTabDef.MAP} currentTab={NavTabDef.MAP}>
    <h1>Map</h1>

    <p>Cities/towns we've shipped skirts to!</p>

    <p>
      The latitudes and longitudes shown in this map are <b>not</b> derived from
      precise addresses; they're city/town locations only.
    </p>
    <br />

    <AspectRatio>
      <MapIframe src={process.env.GOOGLE_MAP_URL} />
    </AspectRatio>
  </Page>
);

const AspectRatio = styled.div`
  position: relative;
  padding-top: 60%;
`;

const MapIframe = styled.iframe`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export default MapPage;
