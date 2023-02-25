import React from 'react';
import styled from 'styled-components';
import { Page } from '../components/Page';
import { NavTabDef } from '../enums/NavTabDef';

export default class ReturnsAndExchangesPage extends React.PureComponent {
  public render(): JSX.Element {
    return (
      <Page
        title={NavTabDef.RETURNS_EXCHANGES}
        currentTab={NavTabDef.RETURNS_EXCHANGES}
      >
        <h1>Returns & Exchanges</h1>

        <p>We happily accept returns and size exchanges!</p>

        <H2>Conditions</H2>
        <ul>
          <li>
            The product must be unworn, unwashed, and in the same condition as
            it was when you received it.
          </li>
          <li>
            The shipment to us should be postmarked within 30 days of your
            receipt of the original shipment.
          </li>
        </ul>

        <H2>Shipping</H2>
        <ul>
          <li>
            For exchanges, we'll cover the cost of shipping the new skirt to
            you.
          </li>
          <li>
            For returns, the shipping charges you originally paid will be
            refunded.
          </li>
          <li>
            You are responsible for the cost of shipping the exchanged or
            returned item back to us.
          </li>
        </ul>
      </Page>
    );
  }
}

const H2 = styled.h2`
  font-size: 18px;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
`;
