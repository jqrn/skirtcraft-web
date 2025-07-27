import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Context } from '../context/Context';

export const Privacy = () => {
  const context = useContext(Context);

  const [isPolicyShown, setIsPolicyShown] = useState(false);

  return (
    <Container>
      <DataConsent>
        Hi! We collect strictly necessary as well as analytical/marketing data.
        <DataConsentButtons>
          <DataConsentButton onClick={() => context.allowDataSelected(true)}>
            Accept all
          </DataConsentButton>
          <DataConsentButton onClick={() => context.allowDataSelected(false)}>
            Only necessary
          </DataConsentButton>
        </DataConsentButtons>
      </DataConsent>
      <PolicyToggle onClick={() => setIsPolicyShown(!isPolicyShown)}>
        {`${isPolicyShown ? 'Hide' : 'Show'} privacy policy`}
      </PolicyToggle>
      <Policy isShown={isPolicyShown}>
        <p>Data that may be collected, depending on your selection:</p>
        <h4>Strictly necessary data</h4>
        <ul>
          <li>
            If you add an item to your cart, the PayPal payment module may
            collect data. See their{' '}
            <a
              href="https://www.paypal.com/us/legalhub/paypal/privacy-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              privacy policy
            </a>
            .
          </li>
          <li>
            If you place an order, the items in your cart will be sent to PayPal
            so the order can be completed.
          </li>
        </ul>

        <h4>Other data (only if you accept)</h4>
        <ul>
          <li>
            If you place an order and arrived via an affiliate link, the
            affiliate's code (not specific to you) will be sent to PayPal so
            we'll know to pay the affiliate a commission.
          </li>
          <li>
            If you play an embedded YouTube video, YouTube may collect data. See
            their{' '}
            <a
              href="https://www.youtube.com/t/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              privacy policy
            </a>
            .
          </li>
          <li>
            If you view the Map page, Google Maps may collect data. See their{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              privacy policy
            </a>
            .
          </li>
        </ul>
      </Policy>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 30%;
  min-width: 400px;
  background-color: #eee;
  color: black;
  padding: 1em;
  z-index: 1000;
  border-radius: 0.25em;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const DataConsent = styled.div`
  text-align: center;
  display: flex;
  gap: 1em;
`;

const DataConsentButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const DataConsentButton = styled.button`
  white-space: nowrap;
  padding: 0.3em 1em;
  cursor: pointer;
`;

const PolicyToggle = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;

const Policy = styled.div`
  display: ${(props: { isShown?: boolean }) =>
    props.isShown ? 'undefined' : 'none'};
`;
