import React from 'react';
import { Page } from '../components/Page';
import { NavTabDef } from '../enums/NavTabDef';

const CONTACT_EMAIL = 'hello@skirtcraft.com';

export default class ContactPage extends React.PureComponent {
  public render(): JSX.Element {
    return (
      <Page title={NavTabDef.CONTACT} currentTab={NavTabDef.CONTACT}>
        <h1>Contact</h1>

        <p>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
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
        <br />

        <p>
          <a href={'../../skirtcraft_cards_printable.pdf'}>
            Download printable Skirtcraft business cards (PDF)
          </a>
        </p>
      </Page>
    );
  }
}
