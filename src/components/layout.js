import React from "react"
import Navbar from "./navbar"
import "../styles/style.scss"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    
    return (
      <div>
        <Navbar/>
        
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
