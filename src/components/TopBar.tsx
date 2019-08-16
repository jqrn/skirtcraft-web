import React from 'react';
import styled from 'styled-components';
import { Cart } from './Cart';
import { SocialBar } from './SocialBar';

export const TopBar = React.memo(() => (

    <Container>
        <SocialBar />
        <Cart />
    </Container>

));

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: black;
    width: 100%;
    overflow: hidden;
    padding: 0.5em 3%;
`;
