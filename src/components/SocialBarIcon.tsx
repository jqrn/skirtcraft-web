import React from 'react';
import styled from 'styled-components';

interface Props {
  linkUrl: string;
  imageUrl: string;
  altText: string;
}

export const SocialBarIcon = (props: Props) => (
  <StyledExternalLink href={props.linkUrl}>
    <Image src={props.imageUrl} alt={props.altText} />
  </StyledExternalLink>
);

const StyledExternalLink = styled((props: any) => <a {...props} />)`
  padding: 0 0.75em;
  display: flex;
`;

const Image = styled.img`
  height: 1.1em;
  width: auto;
  margin: auto;
  vertical-align: middle;
  display: inline-block;
`;
