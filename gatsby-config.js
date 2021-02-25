module.exports = {
  siteMetadata: {
    title: `zoomkoding.dev`,
    description: `줌코딩의 개발일기`,
    author: `zoomkoding`,
    og: {
      image:
        'https://github.com/zoomKoding/zoomKoding.github.io/blob/source/assets/zoomkoding-intro.png',
    },
    social: {
      github: `https://github.com/zoomKoding`,
      linkedIn: `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
    },
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-theme-material-ui`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `zoomkoding-dev-blog`,
        short_name: `zoomkoding.dev`,
        description: `줌코딩의 개발일기`,
        lang: `en`,
        display: `standalone`,
        start_url: `/`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: 'Table of Contents',
              tight: false,
              ordered: false,
              fromHeading: 2,
              toHeading: 6,
              className: 'table-of-contents',
            },
          },
          `gatsby-remark-autolink-headers`,
        ],
      },
    },

    `gatsby-plugin-mdx`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
