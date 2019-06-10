import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

class BlogRoll extends React.Component {
  render () {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges
      return (
        <div>
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
      )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { glob: "**/content/blog/*md"}}
          sort: {  fields: [frontmatter___date], order: DESC }
        ) 
        {
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
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
  

       
  


