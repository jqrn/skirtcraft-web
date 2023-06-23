import React from 'react';
import { Page } from '../components/Page';
import { NavTabDef } from '../enums/NavTabDef';

const ShippingPage = () => (
  <Page title={NavTabDef.SHIPPING} currentTab={NavTabDef.SHIPPING}>
    <h1>Shipping</h1>

    <p>
      We typically ship within 48 hours of receiving an order. All orders are
      shipped via United States Postal Service.{' '}
    </p>

    <ul>
      <li>
        US orders use{' '}
        <a href="https://www.usps.com/ship/priority-mail.htm">Priority Mail</a>{' '}
        and typically take 1-3 days after you receive notification of shipment.
      </li>
      <li>
        Non-US orders use the{' '}
        <a href="https://www.usps.com/international/mail-shipping-services.htm">
          First Class Package International
        </a>{' '}
        service and typically take 7-21 days after you receive notification of
        shipment.
      </li>
    </ul>

    <p>
      Orders are shipped in paper mailers or cardboard boxes. Both are made from
      100% recycled material (95-97% post-consumer) and are recyclable and
      compostable.
    </p>
  </Page>
);

export default ShippingPage;
