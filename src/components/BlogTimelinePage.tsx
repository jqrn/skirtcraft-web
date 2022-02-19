import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { NavTabDef } from '../enums/NavTabDef';
import { BlogNavLink } from './BlogNavLink';
import { BlogPost } from './BlogPost';
import { Page } from './Page';

interface TumblrPost {
    title: string;
    slug: string;
    date: string;
    post_url: string;
    body: string;
}

interface Props {
    data: {
        allTumblrPost: {
            edges: {
                node: TumblrPost;
            }[];
        };
    };
    pageContext: {
        pageNumber: number;
        isLastPage: boolean;
    };
}

export default class BlogTimelinePage extends React.PureComponent<Props> {

    public render(): JSX.Element {

        const pageNumber = this.props.pageContext.pageNumber;
        const tumblrPosts = this.props.data.allTumblrPost.edges.map((edge) => edge.node);

        return(

            <Page title={'Blog' + (pageNumber === 1 ? '' : ` (Page ${pageNumber})`)} currentTab={pageNumber === 1 ? NavTabDef.BLOG : undefined} mainStyle={pageStyle}>

                {pageNumber > 1 &&
                    <BlogNavLink to='/blog'>&lt;&lt; View Latest Posts</BlogNavLink>
                }

                {tumblrPosts.map((tumblrPost: TumblrPost, index: number) => (
                    <div key={index}>
                        <BlogPost tumblrPost={tumblrPost}/>
                        <BlogPostSeparator/>
                    </div>
                ))}

                <BlogPrevNextNavLinks>
                    <div>
                        <BlogNavLink isvisible={pageNumber > 1} to={'/blog' + (pageNumber === 2 ? '' : `/page-${pageNumber - 1}`)}>&lt; Newer</BlogNavLink>
                    </div>
                    <div>
                        <BlogNavLink isvisible={!this.props.pageContext.isLastPage} to={`/blog/page-${pageNumber + 1}`}>Older &gt;</BlogNavLink>
                    </div>
                </BlogPrevNextNavLinks>

            </Page>
        );
    }
}

const pageStyle: React.CSSProperties = {
    maxWidth: '50em'
};

const BlogPostSeparator = styled.hr`
    margin-bottom: 6em;
`;

const BlogPrevNextNavLinks = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1em 0;
`;

export const query = graphql`
    query($postSlugs: [String!]!) {
        allTumblrPost(
            filter: { slug: { in: $postSlugs }},
            sort: { fields: date, order: DESC }
        ) {
            edges {
                node {
                    title
                    slug
                    date
                    post_url
                    body
                }
            }
        }
    }
`;
