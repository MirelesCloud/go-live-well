import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"
import "../styles/style.scss"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    
    return (
      <div style={{
       minHeight: "100vh",
       position: "relative",
      }}>
        <Navbar/>
        <br/>
        <br/>
        <div style={{
            paddingBottom: "17rem"
          }}>
          {children}
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Layout
