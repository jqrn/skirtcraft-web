import { graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
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
  }
};

interface Props {
    data: TumblrPostData;
    pageContext: {
        nextSlug?: string;
        previousSlug?: string;
    };
}

class BlogPostPage extends React.PureComponent<Props> {

    public static getPostUrl(slug: string): string {
        return `${BASE_URL}/blog-posts/${slug}/`;
    }

    public render(): JSX.Element {

        const tumblrPost = this.props.data.tumblrPost;

        const imageUrl = this.getImageUrl(tumblrPost.body);

        return(

            <Page title={`Blog - ${tumblrPost.title}`} mainStyle={pageStyle} openGraphImageUrl={imageUrl}>
                {this.renderViewLatestPostsLink()}

                <BlogPost tumblrPost={tumblrPost} />

                <BlogNavLinks>
                    {this.renderNewerOlderNavLinks()}
                </BlogNavLinks>
            </Page>
        );
    }

    private renderNewerOlderNavLinks(): JSX.Element {
        const nextSlug = this.props.pageContext.nextSlug;
        const previousSlug = this.props.pageContext.previousSlug;
        return (
            <BlogPrevNextNavLinks>
                <div>
                    <BlogNavLink $isvisible={nextSlug != undefined} to={`/blog-posts/${nextSlug}`}>&lt; Newer</BlogNavLink>
                </div>
                <div>
                    <BlogNavLink $isvisible={previousSlug != undefined} to={`/blog-posts/${previousSlug}`}>Older &gt;</BlogNavLink>
                </div>
            </BlogPrevNextNavLinks>
        );
    }

    private renderViewLatestPostsLink(): JSX.Element {
        return (
            <BlogNavLink to='/blog'>&lt;&lt; View Latest Posts</BlogNavLink>
        );
    }

    private getImageUrl(postBody: string): string | undefined {

        const firstImageStartIndex = postBody.indexOf('<img ');

        if (firstImageStartIndex > 0) {
            const srcMarker = ' src="';
            const firstImageSrcStart = postBody.indexOf(srcMarker, firstImageStartIndex);
            if (firstImageSrcStart > 0) {
                const urlStartIndex = firstImageSrcStart + srcMarker.length;
                const urlEndIndex = postBody.indexOf('"', urlStartIndex);
                if (urlEndIndex > 0) {
                    return postBody.substring(urlStartIndex, urlEndIndex);
                }
            }
        }

        return undefined;
    }
}
export default BlogPostPage;

const pageStyle: React.CSSProperties = {
    maxWidth: '50em'
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
    query($id: String!) {
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
  return <>
    <meta property='og:type' content='article'/>
    <meta property='og:title' content={tumblrPost.title}/>
    <meta property='og:url' content={BlogPostPage.getPostUrl(tumblrPost.slug)}/>
    <meta property='article:published_time' content={tumblrPost.date}/>
    {tumblrPost.tags.map((tag, index) =>
        <meta key={index} property='article:tag' content={tag}/>
    )}
  </>
};
