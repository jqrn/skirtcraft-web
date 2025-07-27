import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../context/Context';
import { NavTabDef } from '../enums/NavTabDef';
import { FooterNavTab } from './FooterNavTab';

interface Props {
  currentTab?: NavTabDef;
}

export const Footer = (props: Props) => {
  const context = useContext(Context);
  return (
    <Container aria-label="footer navigation bar">
      <FooterNavTab
        text={'Size Guide'}
        url={'/size-guide'}
        tab={NavTabDef.SIZE_GUIDE}
        currentTab={props.currentTab}
      />
      <FooterNavTab
        text={'Shipping'}
        url={'/shipping'}
        tab={NavTabDef.SHIPPING}
        currentTab={props.currentTab}
      />
      <FooterNavTab
        text={'Returns & Exchanges'}
        url={'/returns-exchanges'}
        tab={NavTabDef.RETURNS_EXCHANGES}
        currentTab={props.currentTab}
      />
      <FooterNavTab
        text={'Alterations'}
        url={'/alterations'}
        tab={NavTabDef.ALTERATIONS}
        currentTab={props.currentTab}
      />
      <FooterNavTab
        text={'Contact'}
        url={'/contact'}
        tab={NavTabDef.CONTACT}
        currentTab={props.currentTab}
      />
      <FooterButton
        onClick={() =>
          context.setIsPrivacyDisplayed(!context.isPrivacyDisplayed)
        }
      >
        PRIVACY
      </FooterButton>
    </Container>
  );
};

const Container = styled.nav`
  padding: 1.3em 2em;
  background-color: #000;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  align-items: center;
`;

const FooterButton = styled.button`
  margin: 0 0.3em;
  border: 0;
  border-radius: 0.15em;
  padding: 0.5em;
  background-color: black;
  color: #eee;
  text-align: center;
  text-decoration: none;
  font-size: 17px;
  font-weight: 400;
  text-transform: uppercase;
  transition: background 0.3s;
  &:hover {
    background: #444;
  }
`;
