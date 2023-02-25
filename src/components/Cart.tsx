import { Link } from 'gatsby';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../context/CartContext';
import ImgCart from '../images/cart.png';

export const Cart = () => {
    const cartContext = useContext(CartContext);

    return (
        <Container>
            <CartLink to={`/cart`}>
                <Icon src={ImgCart} alt='cart' />
                <span>{`(${String(cartContext.items.length)})`}</span>
            </CartLink>
        </Container>
    );
};

const Container = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-around;
    height: 1.5em;
`;

const Icon = styled.img`
    height: 1.5em;
    width: 1.5em;
`;

const CartLink = styled(Link)`
    display: flex;
    gap: 8px;
    cursor: pointer;
    text-decoration: none;
    color: white;
`;
