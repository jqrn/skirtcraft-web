import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { NavTabDef } from '../enums/NavTabDef';
import { BlogNavLink } from './BlogNavLink';
import { BlogPost } from './BlogPost';
import { Page } from './Page';

interface TumblrPost {
  id: string;
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

const BlogTimelinePage = (props: Props) => {
  const pageNumber = props.pageContext.pageNumber;
  const tumblrPosts = props.data.allTumblrPost.edges.map(edge => edge.node);

  return (
    <Page
      title={'Blog' + (pageNumber === 1 ? '' : ` (Page ${pageNumber})`)}
      currentTab={pageNumber === 1 ? NavTabDef.BLOG : undefined}
      mainStyle={pageStyle}
    >
      {pageNumber > 1 && (
        <BlogNavLink to="/blog">&lt;&lt; View Latest Posts</BlogNavLink>
      )}

      {tumblrPosts.map((tumblrPost: TumblrPost, index: number) => (
        <div key={index}>
          <BlogPost tumblrPost={tumblrPost} />
          <BlogPostSeparator />
        </div>
      ))}

      <BlogPrevNextNavLinks>
        <div>
          <BlogNavLink
            $isvisible={pageNumber > 1}
            to={'/blog' + (pageNumber === 2 ? '' : `/page-${pageNumber - 1}`)}
          >
            &lt; Newer
          </BlogNavLink>
        </div>
        <div>
          <BlogNavLink
            $isvisible={!props.pageContext.isLastPage}
            to={`/blog/page-${pageNumber + 1}`}
          >
            Older &gt;
          </BlogNavLink>
        </div>
      </BlogPrevNextNavLinks>
    </Page>
  );
};

export default BlogTimelinePage;

const pageStyle: React.CSSProperties = {
  maxWidth: '50em',
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
  query ($postIds: [String!]!) {
    allTumblrPost(
      filter: { id_string: { in: $postIds } }
      sort: { date: DESC }
    ) {
      edges {
        node {
          id: id_string
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
