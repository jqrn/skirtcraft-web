import React, { useState } from 'react';
import styled from 'styled-components';

export const EmailSignupForm = () => {
  const [emailAddress, setEmailAddress] = useState('');

  return (
    <Form
      action={process.env.EMAIL_LIST_SUBSCRIBE_FORM_ACTION_URL}
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      className="validate"
      target="_blank"
      noValidate={true}
    >
      <EmailInputLabel htmlFor="mce-EMAIL">Email Address</EmailInputLabel>
      <EmailInput
        type="email"
        value={emailAddress}
        onChange={event => setEmailAddress(event.target.value)}
        name="EMAIL"
        className="required email"
        id="mce-EMAIL"
        placeholder="email address"
        required={true}
      />
      <MailchimpHidden>
        <input
          type="text"
          name={process.env.EMAIL_LIST_SUBSCRIBE_FORM_HIDDEN_INPUT}
          value=""
          readOnly={true}
          tabIndex={-1}
          aria-hidden={true}
          aria-label={'email list identifier'}
        />
      </MailchimpHidden>
      <SubmitButton type="submit" value="Subscribe" name="subscribe" />
    </Form>
  );
};

const Form = styled.form`
  display: flex;
`;

const MailchimpHidden = styled.div`
  position: absolute;
  left: -5000px;
`;

const EmailInputLabel = styled.label`
  display: none;
`;

const EmailInput = styled.input`
  font-size: 90%;
  border: 1px solid #999;
  padding: 0.2em 0 0 0.4em;
  line-height: 2.2em;
  height: 2.5em;
  background-color: #fff;
`;

const SubmitButton = styled.input`
  font-size: 90%;
  height: 2.5em;
  padding-top: 0.2em;
  margin-left: 0.5em;
  background-color: #555;
  border: 1px solid #999;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  text-transform: lowercase;
  transition: background-color 0.3s;
  &:hover {
    background-color: #777;
  }
`;
