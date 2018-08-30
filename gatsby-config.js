module.exports = {
  siteMetadata: {
    title: `Equithon`,
    siteUrl: `https://www.equithon.org`,
    description: `A social innovation hackathon like no other. Equithon is back for 2019.`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-styled-components',
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: `UA-114911192-4`,
        // Puts tracking script in the head instead of the body
        head: false,
      }
    },
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: 'https://46f4f3d028df48e58a9e7a1ace222a60@sentry.io/1271477',
      }
    },
    {
      resolve: `gatsby-plugin-remove-trailing-slashes`
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                siteUrl
                description
              }
            }

            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`
      }
    }
  ],
}
