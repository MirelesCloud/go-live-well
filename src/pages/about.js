import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'

export default ({ data }) => (
  <Layout>
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-12">
            <div className="content">
              <h1 className="title">About Heather</h1>
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
          <div className="column is-8">
           <div className="content">
             <p>As a wellness educator since 2000, I am passionate about helping people improve their health. Over the years, I have worked with several hospitals to create wellness programs, plan and coordinate health conferences, and produce a Spanish-language medical talk radio show.
             </p>
             <p>In 2005, I created Conscious Wellness with the mission to help heal my clients and empower them to attain the optimal health they want and deserve.
             </p>
             <p>The first therapy I became certified in was quantum biofeedback, which utilizes the QXCI/EPFX. I then added NAET (Nambutripad’s Allergy Elimination Technique), Quantum Touch, and Reiki, along with other modalities and techniques. I also work with laser color therapy and the BioMat, which use infrared heat and help soothe clients during their treatments.
             </p>
             <p>I feel blessed to live with my husband and two daughters in beautiful, rural Sonora, located in the Sierra Foothills of California. My home office is set in the middle of an organic apple orchard. The peaceful environment is conducive to relaxation, rejuvenation and healing.
             </p>
             <p>Sessions with me can be done in person or remotely.</p>
             <br/>
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
        </div>
      </div>
    </section>
  </Layout>
)

export const aboutQuery = graphql`
  query {
    file(absolutePath: { regex: "/sunshine.jpg/"}) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
}
`

