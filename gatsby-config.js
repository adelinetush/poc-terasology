module.exports = {
  pathPrefix: "/poc-terasology",
  siteMetadata: {
    title: 'Tutorial Journey',
    author: 'Andrew Mead'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      } 
    },
    'gatsby-transformer-remark'
  ]
}
