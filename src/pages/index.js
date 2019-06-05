import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import TestimonialBubble from "../components/testimonial-bubble"
import Services from "../components/services"
import SEO from "../components/seo"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'

import styled from "styled-components"

const Logo = styled.figure`
  max-width: 100px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  
`

const Title = styled.h1`
  font-size: 5rem;
  @media(max-width: 700px) {
    font-size: 4rem;
  }
`
const Profile = styled.figure`
  margin-top: -100px;
  padding-bottom: 50px;
  position: relative;
  max-width: 400px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  @media(max-width: 700px) {
    margin-top: 0px;
  }
`

const Quotes = styled.div`
  margin-top: 50px;
`

const About = styled.figure`
  border-radius: 100%;
  overflow: hidden;
  position: relative;
  max-width: 400px;
  height: auto;
  margin-right: auto;
  margin-left: auto;
  transition: transform .9s;
  box-shadow: 3px 3px 8px #888888;
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
        <section className="hero is-large" style={{
                    backgroundImage: `linear-gradient(rgba(158,84,6, 0.4), rgba(20,20,20,0.4), rgba(134,45,134,0.4)),
                    url(${data.hero.childImageSharp.fluid.src})`,
                    backgroundPosition: "top",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    position: "relative",
                    backgroundAttachment: "fixed"
                }}>
          <div className="hero-body">
            <div className="container has-text-centered">
              <Title className="title has-text-weight-normal has-text-light is-uppercase">
               {siteTitle}
              </Title>
              <h2 className="subtitle has-text-light is-uppercase">
                {subTitle}
              </h2>
              <Logo>
                <Img fluid={data.logo.childImageSharp.fluid} />
              </Logo>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="">
            <div className="columns">
            <div className="column is-4 is-offset-2">
                <Profile >
                  <Img fluid={data.profile.childImageSharp.fluid} style={{
                  borderRadius: "50%",
                  boxShadow: "3px 3px 8px #888888"
                  }}/>
                </Profile>
            </div>
            <div className="column is-4">
              <div className="content has-text-centered">
                  <Quotes>
                  <TestimonialBubble/>
                  </Quotes>
                  <br/>
                  <br/>
                  <div className="content">
                    <div className="columns is-centered is-mobile" >
                      <div className="column is-1-mobile" >
                        <a href="mailto:https://heatherwsonora@gmail.com" aria-label="e-mail"><FontAwesomeIcon icon={faEnvelope} className="fa-2x mr-3 has-text-grey" /></a>
                      </div>
                      <div className="column is-1-mobile">
                        <a href="https://www.linkedin.com/in/heather-watson-bab051180/" aria-label="Linkedin"><FontAwesomeIcon icon={faLinkedin} className="fa-2x mr-3 has-text-grey"/></a>
                      </div>
                      <div className="column is-1-mobile"> 
                        <a href="https://www.facebook.com/golivewell/" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} className="fa-2x has-text-grey"/></a>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
           </div>
          </div>
        </section>
        <section className="hero is-large" style={{
              backgroundImage: `linear-gradient(rgba(158,84,6, 0.4), rgba(20,20,20,0.4), rgba(134,45,134,0.3)),
              url(${data.hero.childImageSharp.fluid.src})`,
              backgroundPosition: "bottom",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              position: "relative",
              backgroundAttachment: "fixed"
          }}>
            <div className="hero-body" style={{padding: "150px 50px 150px"}}>
              <div className="container " >
                <div className="content has-text-light">
                  <h1 className="is-size-2 has-text-light">Welcome! - ¡Bienvenidos!</h1>
                  <br/>
                  <p className="is-size-4">My mission is to help heal clients and empower them to attain the optimal health they want and deserve.</p>
                  <hr/>
                  <p>I provide education and tools for you to achieve your optimal health. Humans are more than just a body part or a dis-ease. There is an interconnectedness of the body, mind and soul, and each are affected by the other. So our therapies work with the whole person.</p>
                  <p>¡Hablo español!</p>
                </div>
              </div>
            </div>
        </section>
       <br/>
       <br/>
        <section className="container">
          <Services/>
          <br/>
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
         
          <br/>
        </section>
        <br/>
        <section className="section">
          <div className="container">
          <div className="columns">
            <div className="column is-12">
              <div className="content has-text-centered">
                <h1 className="title has-text-grey">Heather's Blog</h1>
                <hr/>
              </div>
            </div>
          </div>
          <SEO title="All posts" />
            <div className="columns is-multiline">
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <div className="column is-3" key={node.fields.slug}>
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
              <br/>
              <hr/>
          </div>          
        </section>
        <br/>
        <section className="section">
       
          <div className="columns">
            <div className="column is-5 is-offset-1">
              <div className="content">
                <About>
                  <Img fluid={data.about.childImageSharp.fluid} />
                </About>
              </div>
            </div>
            <div className="column is-5">
              <div className="container">
                <div className="content">
                  <h4>About Heather</h4>
                  <p className="has-text-justified">I am passionate about helping people improve their health. It is a privilege to work with each client. Each session is unique and different, based on what my client needs at the moment. I open my home office to you, which is set in a peaceful organic apple orchard in the middle of a forest near a running brook. The relaxing environment will aid in your healing experience.  Distance sessions are also available. My clients, who reside all over the United States, have found them to be very effective. Results do depend on the person, since, in many ways, they are the ones who are allowing and doing their own healing.  Feel free to contact me with any questions or concerns you might have. If you are reading this, there is a reason, and if you are ready to heal, please give me a call. I look forward to working with you!</p>
                  <Link to="/about" className="button">Read more</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br/>
        <br/>
        <br/>
        <section className="hero is-medium" style={{
              backgroundImage: `linear-gradient(rgba(158,84,6, 0.5), rgba(20,20,20,0.5), rgba(134,45,134,0.3)),
              url(${data.hero.childImageSharp.fluid.src})`,
              backgroundPosition: "bottom",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              position: "relative",
              backgroundAttachment: "fixed"
          }}>
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title has-text-light">Work With Me</h1>
              <Link to="/contact" className="button is-primary is-outlined">Contact Me</Link>
              <br/>
              <br/>
              <p className="has-text-light">or</p>
              <br/>
              <div className="button is-primary is-outlined">Book an Appointment</div>
            </div>
          </div>
        </section>
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
    logo: file(absolutePath: { regex: "/go-live-well-white.png/"}) {
      childImageSharp {
        fluid(maxWidth: 600) {
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
    about: file(absolutePath: { regex: "/heather-watson.jpg/"}) {
      childImageSharp {
        fluid(maxWidth: 500) {
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
