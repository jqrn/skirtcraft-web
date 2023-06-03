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
      </TopMessageLink>
      <TopMessageLink href="https://www.kickstarter.com/projects/skirtcraft/unisex-skirts-3">
        <GoButton>View Project</GoButton>
      </TopMessageLink>
      <CenterImageLink href="https://www.kickstarter.com/projects/skirtcraft/unisex-skirts-3">
        <CenterImage src={ImgSplashCenterSkirt} />
      </CenterImageLink>
      <ContinueToSkirtcraft>
        or shop <Link to="/products">skirtcraft.com</Link>
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
  padding-top: 2vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 3vw;
`;

const TopMessageLink = styled(OutboundLink)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1.5vw;
  text-decoration: none;
  color: black;
`;

const CenterText = styled.p`
  margin: 0;
  font-size: calc(1.3vw + 0.8em);
  text-align: center;
`;

const KickstarterImage = styled.img`
  width: 100%;
  max-width: 600px;
`;

const GoButton = styled.button`
  background-color: #05ce78;
  box-sizing: initial;
  border: 0px;
  border-radius: 8px;
  padding: 8px 16px;
  color: #000;
  cursor: pointer;
  font-family: 'Muli', sans-serif;
  font-size: calc(1.3vw + 0.8em);
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
  font-size: 100%;
`;

export default TellurianSplash;
