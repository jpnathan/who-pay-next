/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: `/who-pay-next`,
  siteMetadata: {
    title: `Who Pay Next Month`,
    description: `Who have to pay Netflix`,
    author: `jpnathan`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Netflix Payer`,
        short_name: `Netflix Payer`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Roboto Mono`,
              variants: [`400`, `700`],
            },
            {
              family: `Roboto`,
              subsets: [`latin`],
            },
            {
              family: `Russo One`,
              variants: [`400`, `700`],
            },
          ],
        },
      },
    },
  ],
}
