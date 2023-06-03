import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React from 'react';
import styled from 'styled-components';
import ImgKickstarter from '../images/kickstarter-logo-green.png';
import ImgSplashLeft from '../images/tellurian_splash_kickstarter_live_left.jpg';
import ImgSplashCenterSkirt from '../images/tellurian_splash_kickstarter_live_center_skirt.jpg';
import ImgSplashRight from '../images/tellurian_splash_kickstarter_live_right.jpg';

export const TellurianSplash = () => (
  <Container>
    <SideDiv>
      <OutboundLink href="https://www.kickstarter.com/projects/skirtcraft/unisex-skirts-3">
        <SideImage src={ImgSplashLeft} />
      </OutboundLink>
    </SideDiv>
    <CenterDiv>
      <TopMessageLink href="https://www.kickstarter.com/projects/skirtcraft/unisex-skirts-3">
        <CenterText>The Tellurian wrap skirt is live on</CenterText>
        <KickstarterImage src={ImgKickstarter} />
        <GoButton>Preorder Now</GoButton>
      </TopMessageLink>
      <CenterImageLink href="https://www.kickstarter.com/projects/skirtcraft/unisex-skirts-3">
        <CenterImage src={ImgSplashCenterSkirt} />
      </CenterImageLink>
      <ContinueToSkirtcraft>
        or continue to <Link to="/products">skirtcraft.com</Link>
      </ContinueToSkirtcraft>
    </CenterDiv>
    <SideDiv>
      <OutboundLink href="https://www.kickstarter.com/projects/skirtcraft/unisex-skirts-3">
        <SideImage src={ImgSplashRight} />
      </OutboundLink>
    </SideDiv>
  </Container>
);

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #f9f9f9;
  display: flex;
  justify-content: space-between;
`;

const CenterDiv = styled.div`
  flex: 1;
  padding-top: 5%;
  padding-bottom: 2%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 5%;
`;

const TopMessageLink = styled(OutboundLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5vh;
  text-decoration: none;
  color: black;
`;

const CenterText = styled.p`
  font-size: 1.8vw;
  margin: 0;
`;

const KickstarterImage = styled.img`
  width: 80%;
`;

const GoButton = styled.button`
  height: 3em;
  background-color: #05ce78;
  box-sizing: initial;
  border: 0px;
  border-radius: 8px;
  padding: 0 16px;
  color: #000;
  cursor: pointer;
  font-size: 2vw;
  &:hover {
    outline: 2px solid #000;
  }
`;

const CenterImageLink = styled(OutboundLink)`
  display: flex;
  justify-content: center;
`;

const CenterImage = styled.img`
  width: 80%;
`;

const SideDiv = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  justify-content: center;
`;

const SideImage = styled.img`
  max-height: 100%;
  max-width: 100%;
  object-fit: scale-down;
`;

const ContinueToSkirtcraft = styled.span`
  font-size: 1.5vw;
`;

export default TellurianSplash;
