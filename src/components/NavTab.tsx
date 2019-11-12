import { GatsbyLinkProps, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { NavTabDef } from '../enums/NavTabDef';

interface Props {
    text: string;
    url: string;
    tab: NavTabDef;
    currentTab?: NavTabDef;
}

export const NavTab = React.memo<Props>((props: Props) => (
    <StyledLink
        iscurrenttab={(props.currentTab != undefined && props.tab == props.currentTab) ? 'true' : 'false'}
        to={props.url}
    >
        {props.text}
    </StyledLink>
));

interface StyledLinkProps {
    iscurrenttab: string;
}

const StyledLink = styled((props: any) => <Link {...props} iscurrenttab={undefined} />)`
    margin: 0 0.3em;
    border-radius: 0.15em;
    padding: 0.5em;
    color: ${(props: StyledLinkProps) => props.iscurrenttab === 'true' ? 'black' : '#222'};
    text-align: center;
    text-decoration: none;
    font-size: 17px;
    font-weight: ${(props: StyledLinkProps) => props.iscurrenttab === 'true' ? 700 : 400};
    text-transform: uppercase;
    cursor: ${(props: StyledLinkProps) => props.iscurrenttab === 'true' ? 'default' : undefined};
    transition: background 0.3s;
    &:hover {
        background: ${(props: StyledLinkProps) => props.iscurrenttab === 'true' ? undefined : '#ccc'};
    }
    &:after {
        display: block;
        content: attr(title);
        font-weight: bold;
        height: 0;
        overflow: hidden;
        visibility: hidden;
    }
`;
