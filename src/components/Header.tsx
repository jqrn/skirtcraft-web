import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import ImgHeaderLogo from '../images/header_logo_with_name_slogan.png';
import { TopBar } from './TopBar';

export const Header = React.memo(() => (
    <header>
        <TopBar />
        <Link to='/'>
            <LogoImage src={ImgHeaderLogo} alt='Skirtcraft logo' />
        </Link>
    </header>
));

const LogoImage = styled.img`
    display: block;
    width: 60%;
    max-width: 30em;
    min-width: 20em;
    margin: 0.5em;
    padding-left: 1em;
    clear: both;
`;
