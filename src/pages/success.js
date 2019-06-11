import React from 'react'
import Layout from '../components/layout'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Success = () => (
  <StaticQuery
    query={graphql`
      query SuccessQuery {
        background: file(absolutePath: {regex: "/golivewell-watermark.png/"}) {
          childImageSharp {
            fluid(maxWidth: 2048) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heart: file(absolutePath: {regex: "/heart.jpg/"}) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Layout>
          <section className="section" style={{
              backgroundImage: `url(${data.background.childImageSharp.fluid.src})`,
              backgroundPosition: "top",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              position: "relative",
              backgroundAttachment: "fixed"
          }}>
            <div className="container">
              <div className="content has-text-centered">
                <div className="columns">
                  <div className="column is-4">
                    <figure className="is-centered">
                      <Img fluid={data.heart.childImageSharp.fluid}/>
                    </figure>
                  </div>
                  <div className="column is-8">
                    <br/>
                    <br/>
                    <br/>
                    <h1>Thank you for your message.</h1>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Layout>
      </>
    )}
  />
)

export default Success