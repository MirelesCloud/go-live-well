import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"
import "../styles/style.scss"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    
    return (
      <div>
        <Navbar/>
        <br/>
        <br/>
        <div>{children}</div>
        <Footer/>
      </div>
    )
  }
}

export default Layout
