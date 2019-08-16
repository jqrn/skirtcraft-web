import { resolve } from 'path';
import { GatsbyCreatePages } from './types';

interface TumblrGraphqlEdge {
    node: {
        title?: string;
        slug?: string;
        tags: string[];
    };
}

export const createBlogPosts: GatsbyCreatePages = async ({
    graphql,
    boundActionCreators,
}) => {

    const { createPage } = boundActionCreators;

    const allTumblrPosts = await graphql(`
        {
            allTumblrPost(sort: { fields: date, order: DESC }) {
                edges {
                    node {
                        slug
                        tags
                        title
                    }
                }
            }
        }
    `);

    const filteredTumblrPostEdges = allTumblrPosts.data.allTumblrPost.edges.filter((edge: any) => {
        const node = edge.node;
        return node.tags.includes('unspooled-yarns') && node.title != undefined && node.title.length > 0 && node.slug != undefined && node.slug.length > 0;
    });

    // create individual post pages
    filteredTumblrPostEdges.forEach((edge: TumblrGraphqlEdge, index: number) => {
        const node = edge.node;
        createPage({
            path: `blog-posts/${node.slug}`,
            component: resolve(`./src/components/BlogPostPage.tsx`),
            context: {
                slug: node.slug,
                nextSlug: index > 0 ? filteredTumblrPostEdges[index - 1].node.slug : undefined,
                previousSlug: index < filteredTumblrPostEdges.length - 1 ? filteredTumblrPostEdges[index + 1].node.slug : undefined
            },
        });
    });

    // create timeline pages
    const maxPostsPerTimelinePage = 5;
    const timelinePageCount = Math.ceil(filteredTumblrPostEdges.length / maxPostsPerTimelinePage);
    let currentTimelinePageNumber = 1;
    let currentTimelinePageSlugs: string[] = [];
    filteredTumblrPostEdges.forEach((edge: TumblrGraphqlEdge, index: number) => {
        currentTimelinePageSlugs.push(edge.node.slug!);
        if (currentTimelinePageSlugs.length >= maxPostsPerTimelinePage
            || index >= filteredTumblrPostEdges.length - 1
        ) {

            createPage({
                path: currentTimelinePageNumber === 1 ? 'blog' : `blog/page-${currentTimelinePageNumber}`,
                component: resolve(`./src/components/BlogTimelinePage.tsx`),
                context: {
                    postSlugs: currentTimelinePageSlugs,
                    pageNumber: currentTimelinePageNumber,
                    isLastPage: currentTimelinePageNumber === timelinePageCount,
                },
            });

            currentTimelinePageNumber += 1;
            currentTimelinePageSlugs = [];
        }
    });

};
