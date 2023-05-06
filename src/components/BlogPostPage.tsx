import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { getBlogPostSlug } from '../util/blog';
import { BASE_URL } from '../util/constants';
import { BlogNavLink } from './BlogNavLink';
import { BlogPost } from './BlogPost';
import { Page } from './Page';

interface TumblrPostData {
  tumblrPost: {
    id: string;
    title: string;
    slug: string;
    date: string;
    tags: string[];
    post_url: string;
    body: string;
  };
}

interface Props {
  data: TumblrPostData;
  pageContext: {
    nextSlug?: string;
    previousSlug?: string;
  };
}

const BlogPostPage = (props: Props) => {
  const {
    data: { tumblrPost },
    pageContext: { previousSlug, nextSlug },
  } = props;

  const getImageUrl = (postBody: string) => {
    const firstImageStartIndex = postBody.indexOf('<img ');

    if (firstImageStartIndex > 0) {
      const srcMarker = ' src="';
      const firstImageSrcStart = postBody.indexOf(
        srcMarker,
        firstImageStartIndex
      );
      if (firstImageSrcStart > 0) {
        const urlStartIndex = firstImageSrcStart + srcMarker.length;
        const urlEndIndex = postBody.indexOf('"', urlStartIndex);
        if (urlEndIndex > 0) {
          return postBody.substring(urlStartIndex, urlEndIndex);
        }
      }
    }
    return undefined;
  };

  return (
    <Page
      title={`Blog - ${tumblrPost.title}`}
      mainStyle={pageStyle}
      openGraphImageUrl={getImageUrl(tumblrPost.body)}
    >
      <BlogNavLink to="/blog">&lt;&lt; View Latest Posts</BlogNavLink>

      <BlogPost tumblrPost={tumblrPost} />

      <BlogNavLinks>
        <BlogPrevNextNavLinks>
          <div>
            <BlogNavLink
              $isvisible={nextSlug != undefined}
              to={`/blog-posts/${nextSlug}`}
            >
              &lt; Newer
            </BlogNavLink>
          </div>
          <div>
            <BlogNavLink
              $isvisible={previousSlug != undefined}
              to={`/blog-posts/${previousSlug}`}
            >
              Older &gt;
            </BlogNavLink>
          </div>
        </BlogPrevNextNavLinks>
      </BlogNavLinks>
    </Page>
  );
};

export default BlogPostPage;

const pageStyle: React.CSSProperties = {
  maxWidth: '50em',
};

const BlogNavLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

const BlogPrevNextNavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1em 0;
`;

export const query = graphql`
  query ($id: String!) {
    tumblrPost(id_string: { eq: $id }) {
      id: id_string
      title
      slug
      date
      tags
      post_url
      body
    }
  }
`;

export const Head = (args: { data: TumblrPostData }) => {
  const { tumblrPost } = args.data;
  return (
    <>
      <meta property="og:type" content="article" />
      <meta property="og:title" content={tumblrPost.title} />
      <meta
        property="og:url"
        content={`${BASE_URL}/blog-posts/${getBlogPostSlug(tumblrPost)}/`}
      />
      <meta property="article:published_time" content={tumblrPost.date} />
      {tumblrPost.tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
    </>
  );
};
