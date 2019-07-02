const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const servicePageTemplate = path.resolve(`src/templates/services.js`)
  const blogPageTemplate = path.resolve(`src/templates/blog.js`)
  const aboutPageTemplate = path.resolve(`src/templates/about.js`)
  const testimonialsPageTemplate = path.resolve(`src/templates/testimonials.js`)
  const contactPageTemplate = path.resolve(`src/templates/contact.js`)
  
  return graphql(
    `
      {
        testimonials: allMarkdownRemark(
          filter: {fileAbsolutePath: { glob: "**/src/pages/testimonials/index.md"}}
        ) {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }

        services: allMarkdownRemark(
          filter: {fileAbsolutePath: { glob: "**/src/pages/services/*.md"}}
        ) {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }

        blog: allMarkdownRemark(
          filter: {fileAbsolutePath: { glob: "**/src/pages/blog/index.md"}}
        ) {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }


        about: allMarkdownRemark(
          filter: {fileAbsolutePath: { glob: "**/src/pages/about/index.md"}}
        ) {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }

        contact: allMarkdownRemark(
          filter: {fileAbsolutePath: { glob: "**/src/pages/contact/*.md"}}
        ) {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
        
        blogPost: allMarkdownRemark(
          filter: {fileAbsolutePath: { glob: "**/content/blog/*md"}}
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 100
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.testimonials.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: testimonialsPageTemplate,
        context: {},
      })
    })

    result.data.services.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: servicePageTemplate,
        context: {},
      })
    })

    result.data.blog.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPageTemplate,
        context: {},
      })
    })

    result.data.about.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: aboutPageTemplate,
        context: {},
      })
    })

    result.data.contact.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: contactPageTemplate,
        context: {},
      })
    })

    

    // Create blog posts pages.
    const posts = result.data.blogPost.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })
    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
