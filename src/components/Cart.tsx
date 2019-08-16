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
                        value='-----BEGIN PKCS7-----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-----END PKCS7-----'
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
