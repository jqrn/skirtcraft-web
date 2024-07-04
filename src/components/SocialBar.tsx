import React from 'react';
import styled from 'styled-components';
import ImgHeaderEtsy from '../images/header_etsy.png';
import ImgHeaderFacebook from '../images/header_facebook.png';
import ImgHeaderInstagram from '../images/header_instagram.png';
import ImgHeaderThreads from '../images/header_threads.png';
import ImgHeaderTiktok from '../images/header_tiktok.png';
import ImgHeaderTumblr from '../images/header_tumblr.png';
import { SocialBarIcon } from './SocialBarIcon';

export const SocialBar = () => (
  <Container>
    <SocialBarIcon
      linkUrl={'https://www.instagram.com/skirtcraft'}
      imageUrl={ImgHeaderInstagram}
      altText={'Instagram'}
    />
    <SocialBarIcon
      linkUrl={'https://www.threads.net/@skirtcraft'}
      imageUrl={ImgHeaderThreads}
      altText={'Threads'}
    />
    <SocialBarIcon
      linkUrl={'https://www.tiktok.com/@skirtcraft'}
      imageUrl={ImgHeaderTiktok}
      altText={'TikTok'}
    />
    <SocialBarIcon
      linkUrl={'https://facebook.com/skirtcraft'}
      imageUrl={ImgHeaderFacebook}
      altText={'Facebook'}
    />
    <SocialBarIcon
      linkUrl={'https://skirtcraft.tumblr.com'}
      imageUrl={ImgHeaderTumblr}
      altText={'Tumblr'}
    />
    <SocialBarIcon
      linkUrl={'https://skirtcraft.etsy.com'}
      imageUrl={ImgHeaderEtsy}
      altText={'Etsy'}
    />
  </Container>
);

const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
