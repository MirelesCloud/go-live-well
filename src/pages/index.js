import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import TestimonialBubble from "../components/testimonial-bubble"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import styled from "styled-components"

const Profile = styled.figure`
  margin-top: -100px;
  padding-bottom: 50px;
  position: relative;
  max-width: 400px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
`
const Quotes = styled.div`
  margin-top: 50px;
`
class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const subTitle = data.site.siteMetadata.subtitle
    const posts = data.allMarkdownRemark.edges

    console.log(subTitle)

    return (
      <Layout location={this.props.location} title={siteTitle}>
        
        <section className="hero is-large effect" style={{
                    backgroundImage: `linear-gradient(rgba(158,84,6, 0.2), rgba(20,20,20,0.3), rgba(134,45,134,0.3)),
                    url(${data.hero.childImageSharp.fluid.src})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    position: "relative"

                }}>
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title has-text-weight-normal has-text-light " style={{
                fontSize: "5rem"
              }}>
               {siteTitle}
              </h1>
              <h2 className="subtitle has-text-light is-uppercase">
                {subTitle}
              </h2>
            </div>
          </div>
        </section>
        <section className="columns">
          <div className="column is-4">
              <Profile >
                <Img fluid={data.profile.childImageSharp.fluid} style={{
                borderRadius: "50%",
                boxShadow: "3px 3px 8px #888888"
                }}/>
              </Profile>
          </div>
          <div className="column is-8">
            <div className="content has-text-centered">
                <Quotes>
                 <TestimonialBubble/>
                </Quotes>
            </div>
          </div>
        </section>
        <SEO title="All posts" />
        
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    hero: file(absolutePath: { regex: "/joseph-barrientos-22900-unsplash.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    profile: file(absolutePath: { regex: "/heather-profile.jpg/"}) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
