import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default function blogTemplate({ data }) {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <section className="section">
        <div className="container">
            <div className="columns">
            <div className="column is-12">
                <div className="content">
                <h1 className="title">Heather's Blog</h1>
                </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-4">
              <div className="content">
                <figure>

                </figure>
              </div>
            </div>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <div className="column is-8" key={node.fields.slug}>
                  <h4 className="subtitle">
                    <Link className="has-text-dark"  to={node.fields.slug}>
                      {title}
                    </Link>
                  </h4>
                  <small>{node.frontmatter.date}</small>
                  <p
                    dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </div>
              )
            })}
            
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const blogQuery = graphql`
  query {
    site {
        siteMetadata {
          title
          subtitle
        }
      }
    allMarkdownRemark(
      filter: {fileAbsolutePath: { glob: "**/content/blog/*md"}}
      sort: { 
      fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`