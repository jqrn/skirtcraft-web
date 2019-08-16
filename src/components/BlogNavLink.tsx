import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

interface Props {
    isvisible?: boolean;
}

export const BlogNavLink = styled((props: any) => <Link {...props} />)`
    text-decoration: none;
    color: #666;
    display: ${(props: Props) => props.isvisible === false ? 'none' : undefined};
`;
