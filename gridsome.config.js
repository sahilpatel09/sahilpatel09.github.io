module.exports = {
  siteName: "Sahil Patel",
  siteDescription: "Personal Portfolio Website",
  siteUrl: "https://sahilpatel09.github.io",
  chainWebpack: (config) => {
    config.module
      .rule("postcss-loader")
      .test(/.css$/)
      .use(["tailwindcss", "autoprefixer"])
      .loader("postcss-loader");
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/**/*.md",
        typeName: "Post",
        refs: {
          tags: {
            typeName: "Tag",
            create: true,
          },
          
        },
      },
    },

    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/projects/**/*.md",
        typeName: "Project",

        refs: {
          tags: {
            typeName: "Tag",
            create: true,
          },
        },
      },
    },

    {
      use: "gridsome-plugin-htaccess",
      options: {
        textCompression: [
        "text/html",
        "application/javascript",
        "text/css",
        "image/png",
        ],
      },
      fileExpirations: {
          default: "access plus 1 month",
        },
    },

    //tailwindcss config
    {
      use: "gridsome-plugin-tailwindcss",
      // options: {
      //         tailwindConfig: './tailwind.config.js',
      //       },
    },
  ],
  templates: {
    Tag: "/tag/:id",
    Post: "/blog/:path",
    Project: "/project/:path",
  },
  transformers: {
    remark: {
      autolinkClassName: "icon icon-link heading-anchor",
      externalLinksTarget: "_blank",
      externalLinksRel: ["noopener"],
      anchorClassName: "icon icon-link",
      plugins: [
        'gridsome-plugin-remark-prismjs-all',
      ],
    },
  },
};

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
