import React from "react"
import { Link } from "gatsby"

const Navbar = () => (
    <nav className="navbar is-dark is-fixed-top">
        <div className="navbar-brand has-navbar-fixed-top">
            <div role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </div>
        </div>
        <div className="navbar-menu">
            <div className="navbar-start">
                <Link to="/" className="navbar-item">Home</Link>
                <Link to="/about" className="navbar-item">About</Link>
                <Link to="/blog" className="navbar-item">Blog</Link>
                <Link to="/contact" className="navbar-item">Contact</Link>
                <Link to="/testimonials" className="navbar-item">Testimonials</Link>
                <div className="navbar-item has-dropdown is-hoverable">
                  <div className="navbar-link">
                    More
                  </div>
                </div>
                <a target="_top" className="navbar-item" 
                  href="https://squareup.com/appointments/book/FTJHJJCD1JZEZ/heather-watson-conscious-wellness-sonora-ca" rel="nofollow">Book an Appointment
                </a>
            </div>
        </div>
    </nav>
)

export default Navbar