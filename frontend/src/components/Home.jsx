// src/HomePage.jsx
import React from 'react';
import './Home.css'; // Import a CSS file for styling
import Footer from './Footer';
import About from './About'
const HomePage = () => {
  return (
    <div className="home-page">
      <header className="hero-section">
        <img style={{width:'1470px',height:'40vh',marginTop:'-50px',marginLeft:'-20px'}} src='https://cdn.shopify.com/s/files/1/0070/7032/files/what-is-Crowdfunding-101_a45d51bf-615e-48ac-9ed8-2283b68db2ee.jpg' alt=''></img>
        <div className="hero-content">
          <h1>Welcome to Bright Future</h1>
          <p>Empowering your dreams with community support</p>
          {/* //<button className="cta-button">Get Started</button> */}
        </div>
      </header>
      <section className="features-section">
        <h2>How It Works</h2>
        <div className="features">
          <div className="feature">
            <h3>Create a Campaign</h3>
            <p>Share your story and attract backers.</p>
          </div>
          <div className="feature">
            <h3>Reach Your Goal</h3>
            <p>Get the funds you need to make your project a reality.</p>
          </div>
          <div className="feature">
            <h3>Support Others</h3>
            <p>Discover projects and support their journey.</p>
          </div>
        </div>
      </section>
     <About />
      <section className="testimonials-section">
        <h2>Success Stories</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>"Bright Future helped me launch my dream business!"</p>
            <h4>- Jane Doe</h4>
          </div>
          <div className="testimonial">
            <p>"I was able to fund my creative project with the help of the community."</p>
            <h4>- John Smith</h4>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
