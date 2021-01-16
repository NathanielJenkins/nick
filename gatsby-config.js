module.exports = {
  siteMetadata: {
    title: `Clean Haven North Vancouver House Detailing`,
    description: `Vancouver based window washing, power washing, gutter cleaning, house detailing company`,
    author: `@</Vec>`,
    siteUrl: "https://www.cleanhaven.ca",
    keywords: [
      "Vancouver",
      "North Vancouver",
      "Window Washing",
      "Windows",
      "Deck",
      "Power Washing",
      "Gutters",
      "Best Price",
      "Affordable",
      "Richmond",
      "House",
      "North Vancouver Window Cleaning",
      "North Vancouver Window Cleaner",
      "North Vancouver Window Cleaners",
      "North Vancouver Window Washer",
      "North Vancouver Window Washers",
      "North Vancouver Window Cleaning Services",
      "North Vancouver Professional Window Cleaning Services",
      "North Vancouver Professional Window Cleaners",
      "North Vancouver Residential Window Cleaning",
      "North Vancouver Commercial Window Cleaning",
      "Vancouver Window Cleaning",
      "Vancouver Window Cleaner",
      "Vancouver Window Cleaners",
      "Vancouver Window Washer",
      "Vancouver Window Washers",
      "Vancouver Window Cleaning Services",
      "Vancouver Professional Window Cleaning Services",
      "Vancouver Professional Window Cleaners",
      "Vancouver Residential Window Cleaning",
      "Vancouver Commercial Window Cleaning",
      "Window Cleaning",
      "Window Cleaner",
      "Window Cleaners",
      "Window Washer",
      "Window Washers",
      "Window Cleaning Services",
      "Professional Window Cleaning Services",
      "Professional Window Cleaners",
      "Residential Window Cleaning",
      "Commercial Window Cleaning",
      "Cleaning",
      "Business",
      "Windows North Vancouver",
      "Nick Hooton",
    ],
  },
  plugins: [
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
