import { PayPalButtons } from '@paypal/react-paypal-js';
import { Link } from 'gatsby';
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { ColorSquare } from '../components/ColorSquare';
import { Page } from '../components/Page';
import { CartContext, CartItem } from '../context/CartContext';
import ImgAqueous from '../images/aqueous21s.jpg';
import ImgTellurian from '../images/tellurian01.jpg';
import ImgUnaligned from '../images/unaligned01.png';
import { getSizeDisplayAllUnits } from '../util/sizeUtils';

const PRODUCTS: { [name: string]: { image: any; pagePath: string } } = {
  'Unaligned Skirt': {
    image: ImgUnaligned,
    pagePath: 'unaligned',
  },
  'Aqueous Skirt': {
    image: ImgAqueous,
    pagePath: 'aqueous',
  },
  'Tellurian Skirt': {
    image: ImgTellurian,
    pagePath: 'tellurian',
  },
};

const SHIPPING_PRICES = {
  US_1: process.env.SHIPPING_PRICE_US_1,
  US_2: process.env.SHIPPING_PRICE_US_2,
  US_3: process.env.SHIPPING_PRICE_US_3,
  AU_1: process.env.SHIPPING_PRICE_AU_1,
  AU_2: process.env.SHIPPING_PRICE_AU_2,
  AU_3: process.env.SHIPPING_PRICE_AU_3,
  CA_1: process.env.SHIPPING_PRICE_CA_1,
  CA_2: process.env.SHIPPING_PRICE_CA_2,
  CA_3: process.env.SHIPPING_PRICE_CA_3,
  GB_1: process.env.SHIPPING_PRICE_GB_1,
  GB_2: process.env.SHIPPING_PRICE_GB_2,
  GB_3: process.env.SHIPPING_PRICE_GB_3,
  NZ_1: process.env.SHIPPING_PRICE_NZ_1,
  NZ_2: process.env.SHIPPING_PRICE_NZ_2,
  NZ_3: process.env.SHIPPING_PRICE_NZ_3,
  RW_1: process.env.SHIPPING_PRICE_RW_1,
  RW_2: process.env.SHIPPING_PRICE_RW_2,
  RW_3: process.env.SHIPPING_PRICE_RW_3,
};

const ORDER_COMPLETED_MESSAGE =
  'Thanks for your purchase! You should receive an email confirmation shortly.';

const formatCurrency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
}).format;

interface CartItemGroup extends CartItem {
  quantity: number;
}

const CartPage = () => {
  const cartContext = useContext(CartContext);
  const [wasOrderCompleted, setWasOrderCompleted] = useState(false);
  const currencyCode = process.env.CURRENCY_CODE!;

  const totalPrice = cartContext.items.reduce(
    (runningTotal, o) => runningTotal + Number(o.price),
    0
  );

  const getShippingAmount = (countryCode: string) => {
    type shippingLocationCodeType = 'US' | 'AU' | 'CA' | 'GB' | 'NZ' | 'RW';
    let shippingLocationCode: shippingLocationCodeType = 'RW';
    if (['US', 'AU', 'CA', 'GB', 'NZ'].includes(countryCode)) {
      shippingLocationCode = countryCode as shippingLocationCodeType;
    }

    const quantity = cartContext.items.length;
    let shippingQuantity: 1 | 2 | 3;
    if (quantity == 1 || quantity == 2) {
      shippingQuantity = quantity;
    } else {
      shippingQuantity = 3;
    }

    return Number(
      SHIPPING_PRICES[`${shippingLocationCode}_${shippingQuantity}`]
    );
  };

  const groupedCartItems = cartContext.items.reduce((groupedItems, item) => {
    let itemGroup = groupedItems.find(
      currentItemGroup =>
        currentItemGroup.productName === item.productName &&
        currentItemGroup.color === item.color &&
        currentItemGroup.size === item.size
    );
    if (itemGroup) {
      itemGroup.quantity += 1;
    } else {
      itemGroup = { ...item, quantity: 1 };
      groupedItems.push(itemGroup);
    }
    return groupedItems;
  }, [] as CartItemGroup[]);

  return (
    <Page title="Cart">
      <h1>Cart</h1>

      <Container>
        <CartItems>
          {groupedCartItems.length === 0 &&
            (wasOrderCompleted ? (
              <span>{ORDER_COMPLETED_MESSAGE}</span>
            ) : (
              <span>Your cart is empty.</span>
            ))}
          {groupedCartItems.map((cartItemGroup, index) => {
            const product = PRODUCTS[cartItemGroup.productName];
            return (
              <Item key={index}>
                <ProductDetailsLeft>
                  <ProductLinkImage>
                    <Link to={`/products/${product.pagePath}`}>
                      <ProductImage src={product.image} />
                    </Link>
                  </ProductLinkImage>
                  <ProductDetails>
                    <ProductName to={`/products/${product.pagePath}`}>
                      {cartItemGroup.productName}
                    </ProductName>
                    <ProductDetail>{`Size: ${getSizeDisplayAllUnits(
                      cartItemGroup.size
                    )}`}</ProductDetail>
                    <ProductDetail>
                      {`Color: ${cartItemGroup.color}`}
                      <ColorSquare color={cartItemGroup.color} width="20px" />
                    </ProductDetail>
                  </ProductDetails>
                </ProductDetailsLeft>
                <ProductDetailsRight>
                  <span>
                    <Price>{`${formatCurrency(
                      cartItemGroup.price * cartItemGroup.quantity
                    )}`}</Price>{' '}
                    {`(${currencyCode})`}
                  </span>
                  <QuantitySection>
                    <ProductDetail>Qty: </ProductDetail>
                    <Quantity>
                      <QuantityButton
                        onClick={() =>
                          cartContext.removeItem({ ...cartItemGroup })
                        }
                      >
                        ➖
                      </QuantityButton>
                      <span>{cartItemGroup.quantity}</span>
                      <QuantityButton
                        onClick={() =>
                          cartContext.addItem({ ...cartItemGroup })
                        }
                      >
                        ➕
                      </QuantityButton>
                    </Quantity>
                  </QuantitySection>
                  <Button
                    onClick={() =>
                      cartContext.removeItemGroup({ ...cartItemGroup })
                    }
                  >
                    Remove
                  </Button>
                </ProductDetailsRight>
              </Item>
            );
          })}
        </CartItems>
        {cartContext.items.length > 0 && (
          <Right>
            <Totals>
              <TotalPrice>
                <span>Subtotal:</span>
                <Price>{`${formatCurrency(
                  totalPrice
                )} (${currencyCode})`}</Price>
              </TotalPrice>

              <TotalPrice>
                <span>Shipping:</span>
                <span>[calculated and displayed after entering address]</span>
              </TotalPrice>
            </Totals>

            <PayPalButtonContainer>
              <PayPalButtons
                disabled={cartContext.items.length < 1}
                forceReRender={[cartContext]}
                onShippingChange={(data, actions) => {
                  if (!data.shipping_address?.country_code) {
                    return actions.reject();
                  }
                  const shippingAmount = getShippingAmount(
                    data.shipping_address.country_code
                  );
                  return actions.order
                    .patch([
                      {
                        op: 'replace',
                        path: "/purchase_units/@reference_id=='default'/amount",
                        value: {
                          value: (totalPrice + shippingAmount).toFixed(2),
                          currency_code: currencyCode,
                          breakdown: {
                            item_total: {
                              value: totalPrice.toFixed(2),
                              currency_code: currencyCode,
                            },
                            shipping: {
                              value: shippingAmount.toFixed(2),
                              currency_code: currencyCode,
                            },
                          },
                        },
                      },
                    ])
                    .then(() => Promise.resolve());
                }}
                createOrder={(_, actions) => {
                  return actions.order.create({
                    intent: 'CAPTURE',
                    purchase_units: [
                      {
                        amount: {
                          value: totalPrice.toFixed(2),
                          currency_code: currencyCode,
                          breakdown: {
                            item_total: {
                              value: totalPrice.toFixed(2),
                              currency_code: currencyCode,
                            },
                            shipping: {
                              value: '0.00',
                              currency_code: currencyCode,
                            },
                          },
                        },
                        items: groupedCartItems.map(group => {
                          return {
                            name: `${group.productName} - ${
                              group.color
                            }, ${getSizeDisplayAllUnits(group.size)}`,
                            quantity: String(group.quantity),
                            unit_amount: {
                              value: group.price.toFixed(2),
                              currency_code: currencyCode,
                            },
                          };
                        }),
                      },
                    ],
                  });
                }}
                onApprove={async (_, actions) => {
                  await actions.order?.capture();
                  cartContext.clear();
                  setWasOrderCompleted(true);
                  return Promise.resolve();
                }}
              />
            </PayPalButtonContainer>
          </Right>
        )}
      </Container>
    </Page>
  );
};

const Container = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 100px;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    gap: 32px;
  }
`;

const CartItems = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 500px;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid silver;
  &:last-child {
    border-bottom: 0px;
  }
`;

const ProductDetailsLeft = styled.div`
  flex: 1;
  display: flex;
  gap: 16px;
`;

const ProductLinkImage = styled.div`
  width: 100px;
`;

const ProductImage = styled.img`
  width: 100%;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ProductDetailsRight = styled(ProductDetails)`
  display: flex;
  align-items: flex-end;
  min-width: 25%;
`;

const ProductName = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  color: black;
  margin-bottom: 4px;
  &:hover {
    text-decoration: underline;
  }
`;

const ProductDetail = styled.div`
  font-size: 14px;
  display: flex;
  gap: 8px;
  align-items: center;
`;

const QuantitySection = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

const Quantity = styled.div`
  display: flex;
  align-items: baseline;
  border-radius: 4px;
  gap: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  border: 0px;
  font-size: 14px;
  background-color: transparent;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background-color: #eeeeee;
  }
`;

const QuantityButton = styled(Button)`
  font-size: 16px;
  padding: 3px;
`;

const Price = styled.span`
  font-weight: bold;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Totals = styled.div`
  max-width: 20em;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const TotalPrice = styled.span`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 3em;
`;

const PayPalButtonContainer = styled.div`
  width: 300px;
`;

export default CartPage;
