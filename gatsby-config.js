module.exports = {
  siteMetadata: {
    title: "cerebrohq_gatsby",
    siteUrl: "http://localhost:8080/",
  },
  plugins: [
    // {
    //   resolve: "gatsby-source-wordpress",
    //   options: {
    //     url: "",
    //   },
    // },
    {
      resolve: "gatsby-theme-material-ui",
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
    },
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-10823351-1",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
