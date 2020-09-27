import { Link } from 'gatsby';
import moment from 'moment';
import React from 'react';
import styled from 'styled-components';
import ImgTumblrShare from '../images/share_tumblr_2.png';
import ImgTwitterShare from '../images/share_twitter_2.png';
import BlogPostPage from './BlogPostPage';

interface Props {
    tumblrPost: {
        title: string;
        slug: string;
        date: string;
        post_url: string;
        body: string;
    };
}

export const BlogPost = React.memo((props: Props) => {

    const post = props.tumblrPost;

    const postUrlEncoded = encodeURIComponent(BlogPostPage.getPostUrl(post.slug));
    const postTitleEncoded = encodeURIComponent(post.title);

    return(
        <Container>
            <Title>{post.title}</Title>

            <Byline>
                <span>
                    <Link to={`/blog-posts/${post.slug}`}>{moment(post.date, 'YYYY-MM-DD HH:mm:ss').format('dddd, MMMM Do, YYYY')}</Link>
                </span>
                &nbsp;by&nbsp;
                <span>{process.env.BLOG_BY_NAME}</span>
            </Byline>

            <SocialShareAnchor href={`https://twitter.com/intent/tweet?text=${postTitleEncoded}&url=${postUrlEncoded}&via=${process.env.TWITTER_HANDLE}`} target='_blank'>
                <img src={ImgTwitterShare} width={24} alt='Share on Twitter'/>
            </SocialShareAnchor>

            <SocialShareAnchor href={post.post_url} target='_blank'>
                <img src={ImgTumblrShare} width={24} alt='View on Tumblr'/>
            </SocialShareAnchor>

            <Content dangerouslySetInnerHTML={{ __html: post.body }} />
        </Container>
    );
});

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
    div, p, img, a {
        max-width: 100%;
        word-wrap: break-word;
    }
`;
