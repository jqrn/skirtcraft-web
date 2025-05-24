import React from 'react';
import { Page } from '../components/Page';
import { NavTabDef } from '../enums/NavTabDef';

const ShippingPage = () => (
  <Page title={NavTabDef.SHIPPING} currentTab={NavTabDef.SHIPPING}>
    <h1>Shipping</h1>

    <p>
      We generally ship within 48 hours of receiving an order. All orders are
      shipped via United States Postal Service.{' '}
    </p>

    <ul>
      <li>
        US orders use{' '}
        <a href="https://www.usps.com/ship/ground-advantage.htm">
          USPS Ground Advantage
        </a>{' '}
        and typically take 2-5 business days from the date we ship.
      </li>
      <li>
        Non-US orders use{' '}
        <a href="https://www.usps.com/international/first-class-package-international-service.htm">
          USPS First-Class Package International
        </a>{' '}
        service (sometimes facilitated by GlobalPost) and typically take 7-21
        days to arrive from the date we ship.
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
