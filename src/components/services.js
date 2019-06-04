import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"

const Item = styled.figure`
  border-radius: 100%;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  max-width: 200px;
  height: auto;
  margin-right: auto;
  margin-left: auto;
  transition: transform .9s;
  box-shadow: 3px 3px 8px #888888;
  &:hover {
    -webkit-transform: scale(1.05);
	transform: scale(1.05);
    background-color: #000;
    opacity: 0.8;
  }
`

const Services = () => (
    <div>
      <StaticQuery
        query={graphql`
            query ServiceQuery {
                quantum: file(absolutePath: {regex: "/quantum-touch-square.jpg/"}) {
                    childImageSharp {
                    fluid(maxWidth: 200, quality: 100) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
                allergy: file(absolutePath: {regex: "/lukasz-szmigiel-413-unsplash.jpg/"}) {
                    childImageSharp {
                    fluid(maxWidth: 200, quality: 100) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
                reiki: file(absolutePath: {regex: "/reiki.jpg/"}) {
                    childImageSharp {
                    fluid(maxWidth: 200, quality: 100) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
                intuitive: file(absolutePath: {regex: "/intuitive.jpg/"}) {
                    childImageSharp {
                    fluid(maxWidth: 200, quality: 100) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
                biofeedback: file(absolutePath: {regex: "/biofeedback.jpg/"}) {
                    childImageSharp {
                    fluid(maxWidth: 200, quality: 100) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
                events: file(absolutePath: {regex: "/events.jpg/"}) {
                    childImageSharp {
                    fluid(maxWidth: 200, quality: 100) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
                classes: file(absolutePath: {regex: "/classes.jpg/"}) {
                    childImageSharp {
                    fluid(maxWidth: 200, quality: 100) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
                emotion: file(absolutePath: {regex: "/home/emotion-code.jpg/"}) {
                    childImageSharp {
                    fluid(maxWidth: 200, quality: 100) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
            }
        `}
        render={data => (
          <>
            <section>
              <div className="columns">
                <div className="column is-12">
                  <div className="content has-text-centered">
                     <h1 className="title has-text-grey">My Services</h1>
                     <hr/>
                  </div>
                  
                </div>
              </div>
              <div className="columns is-multiline has-text-centered">
              <div className="column is-3">
                  <Item>
                    <Img fluid={data.reiki.childImageSharp.fluid} />
                  </Item>
                  <div className="content">
                    <br/>
                     <h5 className="has-text-grey-dark">Reiki</h5>
                  </div>
                </div>
                <div className="column is-3">
                  <Item>
                    <Img fluid={data.quantum.childImageSharp.fluid} />
                  </Item>
                  <div className="content">
                    <br/>
                     <h5 className="has-text-grey-dark">Quantum Touch</h5>
                  </div>
                </div>
                <div className="column is-3">
                  <Item>
                    <Img fluid={data.allergy.childImageSharp.fluid} />
                  </Item>
                  <div className="content">
                    <br/>
                     <h5 className="has-text-grey-dark">Allergy Treatment</h5>
                  </div>
                </div>
                <div className="column is-3">
                  <Item>
                    <Img fluid={data.intuitive.childImageSharp.fluid} />
                  </Item>
                  <div className="content">
                    <br/>
                     <h5 className="has-text-grey-dark">Intuitive Session</h5>
                  </div>
                </div>
                <div className="column is-3">
                  <Item>
                    <Img fluid={data.biofeedback.childImageSharp.fluid} />
                  </Item>
                  <div className="content">
                    <br/>
                     <h5 className="has-text-grey-dark">Biofeedback</h5>
                  </div>
                </div>
                <div className="column is-3">
                  <Item>
                    <Img fluid={data.intuitive.childImageSharp.fluid} />
                  </Item>
                  <div className="content">
                    <br/>
                     <h5 className="has-text-grey-dark">Intuitive Session</h5>
                  </div>
                </div>
                <div className="column is-3">
                  <Item>
                    <Img fluid={data.classes.childImageSharp.fluid} />
                  </Item>
                  <div className="content">
                    <br/>
                     <h5 className="has-text-grey-dark">Classes</h5>
                  </div>
                </div>
                <div className="column is-3">
                  <Item>
                    <Img fluid={data.emotion.childImageSharp.fluid} />
                  </Item>
                  <div className="content">
                    <br/>
                     <h5 className="has-text-grey-dark">Emotion Code</h5>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
       />
    </div>
    )

    export default Services