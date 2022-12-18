import React from 'react';
import styled from 'styled-components';
import ImgHeaderInstagram from '../images/header_instagram.png';
import ImgHeaderMastodon from '../images/header_mastodon.svg';
import ImgHeaderTumblr from '../images/header_tumblr.png';
import { SocialBarIcon } from './SocialBarIcon';

export const SocialBar = React.memo(() => (

    <Container>
        <SocialBarIcon
            linkUrl={'https://www.instagram.com/skirtcraft'}
            imageUrl={ImgHeaderInstagram}
            altText={'Instagram'}
        />
        <SocialBarIcon
            linkUrl={'https://mastodon.cloud/@skirtcraft'}
            imageUrl={ImgHeaderMastodon}
            altText={'Mastodon'}
        />
        <SocialBarIcon
            linkUrl={'https://skirtcraft.tumblr.com'}
            imageUrl={ImgHeaderTumblr}
            altText={'Tumblr'}
        />
    </Container>
));

const Container = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
