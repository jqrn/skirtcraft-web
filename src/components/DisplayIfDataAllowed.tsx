import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../context/Context';

export interface Props {
  children?: React.ReactNode;
}

export const DisplayIfDataAllowed = (props: Props): JSX.Element => {
  const context = useContext(Context);

  if (!context.allowData) {
    return (
      <span>
        [
        <Message>
          Not shown because non-necessary data collection has not been accepted
        </Message>{' '}
        (
        <StorageSelectionLinkButton
          onClick={() => context.setIsPrivacyDisplayed(true)}
        >
          Manage
        </StorageSelectionLinkButton>
        )]
      </span>
    );
  }

  return <>{props.children}</>;
};

const Message = styled.span`
  font-weight: bold;
  font-style: italic;
`;

const StorageSelectionLinkButton = styled.a`
  color: blue;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
`;
