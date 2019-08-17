import React from 'react';
import styled from 'styled-components';
import ImgCart from '../images/cart.png';

export class Cart extends React.PureComponent {

    private formRef = React.createRef<HTMLFormElement>();

    public render(): JSX.Element {

        return (
            <Container>
                <form
                    id='paypalViewCartForm'
                    target='paypal'
                    action='https://www.paypal.com/cgi-bin/webscr'
                    method='post'
                    ref={this.formRef}
                >
                    <MyCart onClick={this.onClick}>
                        <MyCartText>My Cart</MyCartText>
                        <Icon src={ImgCart} alt='cart' />
                    </MyCart>
                    <input type='hidden' name='cmd' value='_s-xclick' />
                    <input
                        type='hidden'
                        name='encrypted'
                        value={process.env.PAYPAL_CART_INPUT_ENCRYPTED}
                    />
                    <img
                        alt='pixel'
                        src='https://www.paypalobjects.com/en_US/i/scr/pixel.gif'
                        width='1'
                        height='1'
                    />
                </form>
            </Container>
        );
    }

    private onClick = () => {
        this.formRef.current!.submit();
        return false;
    }
}

const Container = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-around;
    height: 1.5em;
`;

const Icon = styled.img`
    height: 1.5em;
    width: auto;
    padding-left: 0.3em;
`;

const MyCart = styled.a`
    line-height: 1.5em;
    display: flex;
    text-decoration: none;
    cursor: pointer;
`;

const MyCartText = styled.span`
    color: white;
    text-transform: uppercase;
`;
