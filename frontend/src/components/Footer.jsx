import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white pt-4 pb-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4">
            <h5>About Us</h5>
            <p>
              We are dedicated to helping people achieve their crowdfunding goals by providing a comprehensive platform for project management and fundraising.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <h5>Contact Us</h5>
            <address>
              123 Crowdfunding Street<br />
              City, State 12345<br />
              Email: <a href="mailto:info@crowdfunding.com">info@BrightFuture.com</a><br />
              Phone: <a href="tel:+1234567890">+1 234 567 890</a>
            </address>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled d-flex">
              <li><a href="https://facebook.com" className="text-white mr-3"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="https://twitter.com" className="text-white mr-3"><i className="fab fa-twitter"></i></a></li>
              <li><a href="https://instagram.com" className="text-white mr-3"><i className="fab fa-instagram"></i></a></li>
              <li><a href="https://linkedin.com" className="text-white"><i className="fab fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center mt-3">
            <p className="mb-0">&copy; {new Date().getFullYear()} Bright Future. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
