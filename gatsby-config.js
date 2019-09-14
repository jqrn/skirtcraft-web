require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: `Skirtcraft`,
        description: `Unisex skirts with large pockets`,
        author: `@jqrn`,
        siteUrl: `https://www.skirtcraft.com`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-typescript`,
        `gatsby-plugin-tslint`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Skirtcraft`,
                short_name: `Skirtcraft`,
                start_url: `/`,
                background_color: `#501B5E`,
                theme_color: `#501B5E`,
                display: `minimal-ui`,
                icon: `src/images/icon.png`,
            },
        },
        'gatsby-plugin-offline',
        {
            resolve: `gatsby-plugin-s3`,
            options: {
                bucketName: process.env.AWS_S3_BUCKET
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
                head: true,
                anonymize: true,
                respectDNT: true,
            },
        },
        {
            resolve: `gatsby-source-tumblr`,
            options: {
                blogIdentifier: `skirtcraft`,
                consumerKey: process.env.TUMBLR_API_KEY,
            },
        },
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                output: `/sitemap.xml`,
                query: `
                    {
                        site {
                            siteMetadata {
                                siteUrl
                            }
                        }

                        allSitePage {
                            edges {
                                node {
                                    path
                                    context {
                                        date
                                    }
                                }
                            }
                        }
                    }`,
                serialize: ({ site, allSitePage }) => {
                    const todayDateString = new Date().toISOString().split('T')[0];
                    return allSitePage.edges.map(edge => {
                        let lastModifiedDateString = todayDateString;
                        let changeFrequency = 'monthly';
                        let priority = 0.5;
                        switch (edge.node.path.split('/')[1]) {
                            case 'blog-posts':
                                changeFrequency = 'never';
                                lastModifiedDateString = edge.node.context.date.split(' ')[0];
                                break;
                            case 'blog':
                                changeFrequency = 'daily';
                                if (edge.node.path !== '/blog') {
                                    priority = 0.1
                                }
                                break;
                            case '': // site root
                            case 'products':
                                priority = 1;
                                break;
                        }
                        return {
                            url: site.siteMetadata.siteUrl + edge.node.path,
                            lastmod: lastModifiedDateString,
                            changefreq: changeFrequency,
                            priority: priority,
                        };
                    });
                }
            }
        },
    ]
}
