import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import BlogRoll from "../components/blog-roll"


export default function blogTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  
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
          <div className="columns is-multiline">
            <div className="column is-4">
              <div className="content">
                <figure>
                  <Img fluid={frontmatter.image.childImageSharp.fluid}/>
                </figure>
              </div>
            </div>
            <div className="column is-8">
              <BlogRoll/>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const blogQuery = graphql`
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