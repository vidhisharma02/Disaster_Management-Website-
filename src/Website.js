import React from "react";
import GoogleTranslate from "./GoogleTranslate"; // Import your GoogleTranslate component

// Main Website component
const Website = () => {
  return (
    <div>
      <header>
        {/* Google Translate component in header */}
        <GoogleTranslate />
        <nav className="navbar">
          <a href="#about">About Us</a>
          <a href="#governance">Governance</a>
          <a href="#mitigation">Mitigation</a>
          <a href="#capacity">Capacity Building</a>
          <a href="#response">Response</a>
          <a href="#resources">Resources</a>
          <a href="#alerts">Alerts Hub</a>
          <a href="#jobs">Jobs</a>
          <a href="#media">Media Gallery</a>
        </nav>
      </header>

      <div className="hero-section">
        <img src="/disaster-hero-image.jpg" alt="Hero Image" className="hero-image" />
        <p className="hero-para">RESPONDING TO CONFLICTS AND CRISIS</p>
      </div>

      <p className="para-class">
        From Haiti to Syria, watch how we help to respond, recover and rebuild communities when crisis and emergencies happen.
      </p>

      <div className="card-grid">
        {/* Card 1 */}
        <div className="card">
          <img src="/card-1-hack.jpg" alt="Card 1" className="card-one-image" />
          <div className="card-details">
            <h3 className="card-name"> Revolutionizing Healthcare Resilience </h3>
            <p className="card-desc">
              Medical recovery in disaster management is a set of procedures for restoring normal operations in a hospital after a disaster.
            </p>
            <a href="#" className="card-one-button">Learn More</a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card">
          <img src="/card-2-hack.jpg" alt="Card 2" className="card-one-image" />
          <div className="card-details">
            <h3 className="card-name"> Revolutionizing Healthcare Resilience </h3>
            <p className="card-desc">
              Medical recovery in disaster management is a set of procedures for restoring normal operations in a hospital after a disaster.
            </p>
            <a href="#" className="card-one-button">Learn More</a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card">
          <img src="/card-3-hack.jpg" alt="Card 3" className="card-one-image" />
          <div className="card-details">
            <h3 className="card-name"> Revolutionizing Healthcare Resilience </h3>
            <p className="card-desc">
              Medical recovery in disaster management is a set of procedures for restoring normal operations in a hospital after a disaster.
            </p>
            <a href="#" className="card-one-button">Learn More</a>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card">
          <img src="/card-4-hack.jpg" alt="Card 4" className="card-one-image" />
          <div className="card-details">
            <h3 className="card-name"> Revolutionizing Healthcare Resilience </h3>
            <p className="card-desc">
              Medical recovery in disaster management is a set of procedures for restoring normal operations in a hospital after a disaster.
            </p>
            <a href="#" className="card-one-button">Learn More</a>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>© 2025 Disaster Management | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Website;
