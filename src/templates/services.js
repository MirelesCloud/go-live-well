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
        <br/>
        <br/>
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
        <br/>
        <div className="content has-text-centered">
            <a target="_top" style={{
              backgroundColor: "#371797",
              color: "white",
              height: "40px",
              textTransform: "uppercase",
              fontFamily: "'Square Market', 'helvetica neue', helvetica, arial, sans-serif",
              letterSpacing: "1px",
              lineHeight: "38px",
              padding: "0 28px",
              borderRadius: "3px",
              fontWeight: "500",
              fontSize: "14px",
              cursor: "pointer",
              display: "inline-block",
              boxShadow: "2px 2px 5px #888888"
              }}
              href="https://squareup.com/appointments/book/FTJHJJCD1JZEZ/heather-watson-conscious-wellness-sonora-ca" rel="nofollow">Book an Appointment
            </a>
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