const siteMetadata = require('./config/metadata');
const path = require('path');

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Learning Gatsby`,
        short_name: `Gatsby`,
        start_url: `/`,
        background_color: `#f6f6f6`,
        theme_color: `#7159c1`,
        display: `standalone`,
        icon: 'src/assets/images/icon.jpg',
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: `#7159c1`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== 'production',
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`300`, '400', '500', '700'],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`**/styles.js`],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
    `gatsby-plugin-offline`,
  ]
};
