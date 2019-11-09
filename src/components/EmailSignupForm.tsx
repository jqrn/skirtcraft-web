import React from 'react';
import styled from 'styled-components';

interface State {
    emailAddress: string;
}

export class EmailSignupForm extends React.PureComponent<{}, State> {

    public state: State = {
        emailAddress: '',
    };

    public render(): JSX.Element {
        return (
            <form style={{ display: 'flex' }} action={process.env.EMAIL_LIST_SUBSCRIBE_FORM_ACTION_URL} method='post' id='mc-embedded-subscribe-form' name='mc-embedded-subscribe-form' class-name='validate' target='_blank' noValidate={true}>
                <EmailInputLabel htmlFor='mce-EMAIL'>Email Address</EmailInputLabel>
                <EmailInput type='email' value={this.state.emailAddress} onChange={this.emailAddressChanged} name='EMAIL' class-name='emailAddress' id='mce-EMAIL' placeholder='email address' required={true} />
                <MailchimpHidden>
                    <input type='text' name={process.env.EMAIL_LIST_SUBSCRIBE_FORM_HIDDEN_INPUT} value='' readOnly={true} tabIndex={-1} aria-hidden={true} aria-label={'email list identifier'} />
                </MailchimpHidden>
                <SubmitButton type='submit' value='Subscribe' name='subscribe'/>
            </form>
        );
    }

    private emailAddressChanged = (event: any) => {
        this.setState({ emailAddress: event.target.value });
    }
}

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
