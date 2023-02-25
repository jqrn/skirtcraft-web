import React from 'react';
import styled from 'styled-components';
import { NavTabDef } from '../enums/NavTabDef';
import { FooterNavTab } from './FooterNavTab';

interface Props {
  currentTab?: NavTabDef;
}

export const Footer = (props: Props) => (
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
  </Container>
);

const Container = styled.nav`
  padding: 1.3em 2em;
  background-color: #000;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
`;
