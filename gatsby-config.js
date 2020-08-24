/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const siteMetadata = require('./config/metadata');

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
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
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`**/styles.js`],
      },
    },
    `gatsby-plugin-offline`,
  ]
};
