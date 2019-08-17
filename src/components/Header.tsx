import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import ImgHeaderLogo from '../images/header_logo_with_name_slogan.png';
import { Cart } from './Cart';
import { SocialBar } from './SocialBar';

export const Header = React.memo(() => (
    <header>
        <TopBar>
            <SocialBar />
            <Cart />
        </TopBar>
        <Link to='/'>
            <LogoImage src={ImgHeaderLogo} alt='Skirtcraft logo' />
        </Link>
    </header>
));

const TopBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: black;
    width: 100%;
    overflow: hidden;
    padding: 0.5em 3%;
`;

const LogoImage = styled.img`
    display: block;
    width: 60%;
    max-width: 30em;
    min-width: 20em;
    margin: 0.5em;
    padding-left: 1em;
    clear: both;
`;
