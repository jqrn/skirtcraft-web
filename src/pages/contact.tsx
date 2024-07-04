import React from 'react';
import { Page } from '../components/Page';
import { NavTabDef } from '../enums/NavTabDef';

const ContactPage = () => (
  <Page title={NavTabDef.CONTACT} currentTab={NavTabDef.CONTACT}>
    <h1>Contact</h1>

    <p>
      <a href={`mailto:${process.env.CONTACT_EMAIL}`}>
        {process.env.CONTACT_EMAIL}
      </a>
    </p>
    <br />

    <p>
      Skirtcraft LLC
      <br />
      P.O. Box 17062
      <br />
      Minneapolis, MN 55417
      <br />
      USA
    </p>
  </Page>
);

export default ContactPage;
