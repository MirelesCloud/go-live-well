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
        <footer className="footer">
          <div className="content has-text-centered">
          
           
           <small><strong>Disclaimer:</strong> Heather Watson does not claim to treat or heal specific conditions; the effectiveness of her services are based on an individual’s ability to heal, and the results will vary. Ultimately, if the body can, it will heal itself, and these services may accelerate that process. These services do not take the place of a visit to your medical doctor.</small>
           <hr/>
           © {new Date().getFullYear()}, <strong>Go Live Well</strong> - 
           <span> Created by <a href="https://mirelescommunications.com" aria-label="Mireles Communications" target="_blank" rel="noopener noreferrer"><strong className="has-text-dark">Mireles Communications</strong></a></span> 
           {' '} in the {' '}
           <span><a href="https://mirelescloud.com" aria-label="MirelesCloud" target="_blank" rel="noopener noreferrer"><strong className="has-text-dark">MirelesCloud</strong></a></span>.  
           All Rights Reserved
          </div>
        </footer>
      </div>
    )
  }
}

export default Layout
