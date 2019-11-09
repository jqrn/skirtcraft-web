import React from 'react';
import styled from 'styled-components';
import { NavTabDef } from '../enums/NavTabDef';
import { EmailSignupForm } from './EmailSignupForm';
import { NavTab } from './NavTab';

interface Props {
    currentTab?: NavTabDef;
}

export const NavBar = React.memo<Props>((props: Props) => (
    <Container aria-label='navigation bar'>
        <NavTabs>
            <NavTab text={'Products'} url={'/products'} tab={NavTabDef.PRODUCTS} currentTab={props.currentTab} />
            <NavTab text={'Blog'} url={'/blog'} tab={NavTabDef.BLOG} currentTab={props.currentTab} />
            <NavTab text={'Map'} url={'/map'} tab={NavTabDef.MAP} currentTab={props.currentTab} />
            <NavTab text={'About'} url={'/about'} tab={NavTabDef.ABOUT} currentTab={props.currentTab} />
        </NavTabs>
        <EmailSignupForm />
    </Container>
));

const Container = styled.nav`
    overflow: hidden;
    background-color: #ddd;
    top: 0;
    width: 100%;
    border-top: 1px solid #777;
    border-bottom: 1px solid #777;
    padding: 0.3em 2%;
    display: flex;
    flex-wrap: wrap;
`;

const NavTabs = styled.div`
    margin-right: 5%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;
