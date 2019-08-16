import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React from 'react';
import styled from 'styled-components';

interface Props {
    linkUrl: string;
    imageUrl: string;
    altText: string;
}

export const SocialBarIcon = React.memo<Props>((props: Props) => (
    <StyledOutboundLink href={props.linkUrl}>
        <Image src={props.imageUrl} alt={props.altText} />
    </StyledOutboundLink>
));

const StyledOutboundLink = styled((props: any) => <OutboundLink {...props} />)`
    padding: 0 0.5em;
`;

const Image = styled.img`
    height: 1.5em;
    width: auto;
    margin: auto;
    vertical-align: middle;
    display: inline-block;
`;
