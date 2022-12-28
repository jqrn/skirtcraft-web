import { resolve } from 'path';
import { getBlogPostSlug } from '../util/blog';
import { GatsbyCreatePages } from './blogGenerationTypes';

interface TumblrGraphqlEdge {
    node: {
        id: string;
        title: string;
        slug: string;
        date: string;
        tags: string[];
    },
}

export const createBlogPosts: GatsbyCreatePages = async ({
    graphql,
    actions,
}) => {

    const { createPage } = actions;

    const allTumblrPosts = await graphql(`
        {
            allTumblrPost(sort: { date: DESC }) {
                edges {
                    node {
                        id: id_string
                        title
                        slug
                        date
                        tags
                    }
                }
            }
        }
    `);

    const filteredTumblrPostEdges = allTumblrPosts.data.allTumblrPost.edges.filter((edge: any) => {
        const node = edge.node;
        return node.tags.includes(process.env.TUMBLR_SITEBLOG_TAG) && node.title != undefined
            && node.title.length > 0 && node.slug != undefined && node.slug.length > 0;
    });

    // create individual post pages
    filteredTumblrPostEdges.forEach((edge: TumblrGraphqlEdge, index: number) => {
        const node = edge.node;
        const newSlug = getBlogPostSlug(node);
        createPage({
            path: `blog-posts/${newSlug}`,
            component: resolve(`./src/components/BlogPostPage.tsx`),
            context: {
                id: node.id,
                nextSlug: index > 0 ? getBlogPostSlug(filteredTumblrPostEdges[index - 1].node) : undefined,
                previousSlug: index < filteredTumblrPostEdges.length - 1 ? getBlogPostSlug(filteredTumblrPostEdges[index + 1].node) : undefined
            },
        });
    });

    // create timeline pages
    const maxPostsPerTimelinePage = 5;
    const timelinePageCount = Math.ceil(filteredTumblrPostEdges.length / maxPostsPerTimelinePage);
    let currentTimelinePageNumber = 1;
    let currentTimelinePagePostIds: string[] = [];
    filteredTumblrPostEdges.forEach((edge: TumblrGraphqlEdge, index: number) => {
        currentTimelinePagePostIds.push(edge.node.id);
        if (currentTimelinePagePostIds.length >= maxPostsPerTimelinePage
            || index >= filteredTumblrPostEdges.length - 1
        ) {

            createPage({
                path: currentTimelinePageNumber === 1 ? 'blog' : `blog/page-${currentTimelinePageNumber}`,
                component: resolve(`./src/components/BlogTimelinePage.tsx`),
                context: {
                    postIds: currentTimelinePagePostIds,
                    pageNumber: currentTimelinePageNumber,
                    isLastPage: currentTimelinePageNumber === timelinePageCount,
                },
            });

            currentTimelinePageNumber += 1;
            currentTimelinePagePostIds = [];
        }
    });

};
