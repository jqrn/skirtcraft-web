import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { NavTabDef } from '../enums/NavTabDef';
import ImgFavicon from '../images/icon.png';
import { BASE_URL } from '../util/constants';
import { Footer } from './Footer';
import { Header } from './Header';
import { NavBar } from './NavBar';

export interface Props {
  title: string;
  currentTab?: NavTabDef;
  mainStyle?: React.CSSProperties;
  openGraphImageUrl?: string;
  children?: React.ReactNode;
}

export const Page = (props: Props) => (
  <Container>
    <Helmet>
      <html lang="en" />
      <title>{`Skirtcraft - ${props.title}`}</title>

      <meta name="description" content="Unisex skirts with large pockets" />
      <meta name="theme-color" content="#501B5E" />
      <meta
        name="google-site-verification"
        content={process.env.GOOGLE_SITE_VERIFICATION_CODE}
      />
      <meta
        property="og:site_name"
        content="Skirtcraft - Unisex skirts with large pockets"
      />
      <meta
        property="og:image"
        content={props.openGraphImageUrl || `${BASE_URL}/images/pair.png'`}
      />
      {props.openGraphImageUrl == undefined && (
        <meta property="og:image:width" content="1200" />
      )}
      {props.openGraphImageUrl == undefined && (
        <meta property="og:image:height" content="620" />
      )}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@skirtcraft" />
      <meta name="twitter:creator" content="@skirtcraft" />

      <link
        href="https://fonts.googleapis.com/css?family=Muli:400,400i,700,700i&display=swap"
        rel="stylesheet"
        type="text/css"
      />
      <link rel="icon" href={ImgFavicon} />
    </Helmet>
    <Header />
    <NavBar currentTab={props.currentTab} />
    <Main style={props.mainStyle}>{props.children}</Main>
    <Footer currentTab={props.currentTab} />
  </Container>
);

const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  padding: 3% 1em 2em 3%;
  max-width: 70em;
  flex: 1 0 auto;
`;
