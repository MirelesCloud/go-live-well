import React from "react"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from "../components/layout"

function ServiceTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-4">
            <div className="content">
              <figure>
                <Img fluid={frontmatter.image.childImageSharp.fluid} />
              </figure>
            </div>
          </div>
          <div className="column is-8">
            <div className="content">
              <h1>{ frontmatter.title }</h1>
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
  )
}

export default ServiceTemplate

export const serviceQuery = graphql`
query($path: String!) {
  markdownRemark(frontmatter: { path: { eq: $path } }) {
    html
    frontmatter {
      path
      title
      image {
        childImageSharp {
          fluid(maxWidth: 650) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  }
}
`