module.exports = {
  siteName: 'Sahil Patel',
  siteDescription: 'Personal Portfolio Website',
  siteUrl: 'https://sahilpatel09.github.io',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          },
        }
      }
    },
  ],
  templates: {
    Tag: '/tag/:id',
    Post: '/blog/:path',
  },
  transformers: {
    remark: {
      autolinkClassName: 'icon icon-link heading-anchor',
      externalLinksTarget: '_blank',
      externalLinksRel: ['noopener', ],
      anchorClassName: 'icon icon-link',
    }
  },
}



// // This is where project configuration and plugin options are located.
// // Learn more: https://gridsome.org/docs/config

// // Changes here require a server restart.
// // To restart press CTRL + C in terminal and run `gridsome develop`

// module.exports = {
//   siteName: 'Gridsome',
//   plugins: [
//   {
//     use: 'gridsome-plugin-seo'
//   },

//   {
//         use: "@gridsome/source-filesystem",
//         options: {
//           path: "./blog/**/*.md",
//           typeName: "Post",
//           route: '/blog/:slug'

//         }
//   },



//   ],
//   templates: {
//     Post: '/blog/:slug'
//   }
// }


