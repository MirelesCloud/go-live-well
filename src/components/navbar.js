import React from "react"
import { Link } from "gatsby"

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    this.setState(
      {
        active: !this.state.active
      },
      () => {
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
          })
          : this.setState({
              navBarActiveClass: ""
          });
      }
    )
  }

  render() {
    return (
      <nav className="navbar is-light is-fixed-top">
        <div className="navbar-brand has-navbar-fixed-top">
          <div 
            className="navbar-burger burger"
            onClick={() => this.toggleHamburger()
            }>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>
        <div className={`navbar-menu ${this.state.navBarActiveClass}`} >
          <div className="navbar-start" >
            <Link to="/" className="navbar-item" style={{boxShadow: "none"}}>Home</Link>
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link">
               Services
              </div>
              <div className="navbar-dropdown">
                <Link to="/reiki" className="navbar-item">Reiki</Link>
                <Link to="/quantumtouch" className="navbar-item">Quantum Touch</Link>
                <Link to="/allergy" className="navbar-item">Allergy Treatment</Link>
                <Link to="/intuitive" className="navbar-item">Intuitive Session</Link>
                <Link to="/biofeedback" className="navbar-item">Biofeedback</Link>
                <Link to="/events" className="navbar-item">Corporate Events</Link>
                <Link to="/classes" className="navbar-item">Classes</Link>
                <Link to="/emotion-code" className="navbar-item">Emotion Code</Link>
              </div>
            </div>
            <Link to="/blog" className="navbar-item" style={{boxShadow: "none"}}>Blog</Link>
            <Link to="/contact" className="navbar-item" style={{boxShadow: "none"}}>Contact</Link>
            <Link to="/testimonials" className="navbar-item" style={{boxShadow: "none"}}>Testimonials</Link>
            <Link to="/about" className="navbar-item" style={{boxShadow: "none"}}>About</Link>
            <a target="_top" className="navbar-item"
              style={{
                marginTop: "5px",
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
    </nav>
    )
  }
}

export default Navbar