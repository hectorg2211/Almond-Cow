require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Almond Cow Web`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'c27pz6fq',
        dataset: 'production',
      },
    },
    {
      resolve: 'gatsby-source-shopify',
      options: {
        password: process.env.SHOPIFY_SHOP_PASSWORD,
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
        shopifyConnections: ['collections', 'locations'],
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@src': 'src',
          '@components': 'src/components',
          '@pages': 'src/pages',
          '@scenes': 'src/scenes',
          '@contexts': 'src/contexts',
          '@queries': 'src/queries',
          '@styles': 'src/styles',
          '@hooks': 'src/hooks',
          '@utils': 'src/utils',
          '@assets': 'src/assets',
        },
        extensions: ['js', 'scss', 'sass', 'ts', 'tsx'],
      },
    },
  ],
}
