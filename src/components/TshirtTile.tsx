import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React from 'react';
import styled from 'styled-components';

interface Props {
    imageUrl: string;
    imageAltText: string;
    linkUrl?: string;
}

export const TshirtTile = React.memo<Props>((props: Props) => (
    <Tile>
        {props.linkUrl
        ? (
            <OutboundLink href={props.linkUrl}>
                <Image
                    src={props.imageUrl}
                    alt={props.imageAltText}
                    hasLink={true}
                />
            </OutboundLink>
        )
        :
            <AspectRatio>
                <Image
                    src={props.imageUrl}
                    alt={props.imageAltText}
                    hasLink={false}
                />
            </AspectRatio>
        }
    </Tile>
));

const Tile = styled.div`
    margin: 0 1em;
    text-align: center;
    display: flex;
    flex-direction: column;
`;

const Image = styled.img`
    border: ${(props: { hasLink: boolean }) => props.hasLink ? 0 : '1.5em solid white'};
    border-radius: 0.3em;
    max-width: 15em;
`;

const AspectRatio = styled.div`
    position: relative;
    padding-top: o;
`;
