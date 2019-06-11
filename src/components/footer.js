import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
    <footer className="footer" style={{
        bottom: "0",
        paddingBottom: "25px",
        position: "absolute",
      }}>
        <div className="content has-text-centered">
          <a href="mailto:https://heatherwsonora@gmail.com" aria-label="e-mail" style={{boxShadow: "none"}}><FontAwesomeIcon icon={faEnvelope} className="fa-2x mr-3 has-text-grey" style={{marginRight: "30px"}}/></a>
          <a href="https://www.linkedin.com/in/heather-watson-bab051180/" aria-label="Linkedin" style={{boxShadow: "none"}}><FontAwesomeIcon icon={faLinkedin} className="fa-2x mr-3 has-text-grey" style={{marginRight: "30px"}}/></a>
          <a href="https://www.facebook.com/golivewell/" aria-label="Facebook" style={{boxShadow: "none"}}><FontAwesomeIcon icon={faFacebook} className="fa-2x has-text-grey"/></a>
         </div>
        <div className="content has-text-centered">
         <small><strong>Disclaimer:</strong> Heather Watson does not claim to treat or heal specific conditions; the effectiveness of her services are based on an individual’s ability to heal, and the results will vary. Ultimately, if the body can, it will heal itself, and these services may accelerate that process. These services do not take the place of a visit to your medical doctor.</small>
         <hr/>
         © {new Date().getFullYear()} <strong>Go Live Well</strong> - 
         Created by <a className="has-text-dark has-text-weight-semibold" href="https://mirelescommunications.com" aria-label="Mireles Communications" target="_blank" rel="noopener noreferrer">Mireles Communications</a>
         {' '} in the {' '}
         <a className="has-text-dark has-text-weight-semibold" href="https://mirelescloud.com" aria-label="MirelesCloud" target="_blank" rel="noopener noreferrer">MirelesCloud</a>. 
         All Rights Reserved
        </div>
      </footer>
)

export default Footer