import { Link } from 'gatsby';
import moment from 'moment';
import React, { Fragment } from 'react';
import styled from 'styled-components';
import ImgTumblrShare from '../images/share_tumblr_2.png';
import { getBlogPostSlug } from '../util/blog';
import { DisplayIfDataAllowed } from './DisplayIfDataAllowed';

interface Props {
  tumblrPost: {
    id: string;
    title: string;
    slug: string;
    date: string;
    post_url: string;
    body: string;
  };
}

export const BlogPost = (props: Props) => {
  const post = props.tumblrPost;
  const slug = getBlogPostSlug(post);

  let title = post.title;
  let removeFirstNCharactersFromBody = 0;

  if (!title) {
    const headerElementMatches = post.body.match('^<h1>[^<]+<\\/h1>');
    if (headerElementMatches?.length === 1) {
      const headerElementString = headerElementMatches[0];
      title = headerElementString.substring(4, headerElementString.length - 5);
      removeFirstNCharactersFromBody = headerElementString.length;
    }
  }

  const getTitle = () => {
    if (post.title) {
      return post.title;
    }

    const headerElementMatches = post.body.match('^<h1>[^<]+<\\/h1>');
    if (headerElementMatches?.length !== 1) {
      return '';
    }
    const headerElementString = headerElementMatches[0];
    return headerElementString.substring(4, headerElementString.length - 5);
  };

  const ContentWrapper =
    post.body.indexOf('<iframe') >= 0 ? DisplayIfDataAllowed : Fragment;

  return (
    <Container>
      <Title>{getTitle()}</Title>

      <Byline>
        <span>
          <Link to={`/blog-posts/${slug}`}>
            {moment(post.date, 'YYYY-MM-DD HH:mm:ss').format(
              'dddd, MMMM Do, YYYY'
            )}
          </Link>
        </span>
        &nbsp;by&nbsp;
        <span>{process.env.BLOG_BY_NAME}</span>
      </Byline>

      <SocialShareAnchor href={post.post_url} target="_blank">
        <img src={ImgTumblrShare} width={24} alt="View on Tumblr" />
      </SocialShareAnchor>

      <ContentWrapper>
        <Content
          dangerouslySetInnerHTML={{
            __html: post.body.substring(removeFirstNCharactersFromBody),
          }}
        />
      </ContentWrapper>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 3em;
`;

const Title = styled.h2`
  margin-top: 1em;
  margin-bottom: 0.3em;
`;

const Byline = styled.p`
  color: #666;
  font-size: 80%;
  font-style: italic;
  margin-top: 0px;
  span {
    font-size: 120%;
  }
`;

const SocialShareAnchor = styled.a`
  margin-left: 0.5em;
`;

const Content = styled.div`
  max-width: 100%;
  div,
  p,
  img,
  a {
    max-width: 100%;
    word-wrap: break-word;
  }
`;
