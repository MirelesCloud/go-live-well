import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import ContactForm from '../components/contact-form'
import Img from 'gatsby-image'

export default ({ data }) => (
  <Layout>
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-12">
            <div className="content">
              <h1 className="title">Contact</h1>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-4">
            <div className="content">
              <figure>
                <Img fluid={data.file.childImageSharp.fluid}/>
              </figure>

            </div>

          </div>
          <div className="column is-8 has-text-justified">
            <div className="content">
              <ContactForm/>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export const contactlQuery = graphql`
  query {
    file(absolutePath: { regex: "/contact.jpg/"}) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
}
`