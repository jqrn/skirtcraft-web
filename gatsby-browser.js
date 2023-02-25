import React from 'react';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { CartProvider } from './src/context/CartContext.tsx';
import './src/styles/global.css';

export const wrapRootElement = ({ element }) => {
  return (
    <CartProvider>
      <PayPalScriptProvider
        options={{
          'client-id': process.env.PAYPAL_CLIENT_ID,
          currency: process.env.CURRENCY_CODE,
          debug: process.env.PAYPAL_DEBUG,
          'enable-funding': process.env.PAYPAL_ENABLE_FUNDING,
          'integration-date': process.env.PAYPAL_INTEGRATION_DATE,
        }}
      >
        {element}
      </PayPalScriptProvider>
    </CartProvider>
  );
};
