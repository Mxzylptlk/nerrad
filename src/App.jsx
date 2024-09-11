// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1>Abstract | Help Center</h1>
          <button className="button">Submit a request</button>
          <button className="button">Sign in</button>
        </div>
      </header>
      <main className="main-content">
        <h2>How can we help?</h2>
        <input type="text" placeholder="Search" className="search-bar" />
        <div className="help-section">
          <HelpItem 
            icon="🛠️" 
            title="Using Abstract" 
            description="Manage, version, and document your designs in one place." 
          />
          <HelpItem 
            icon="👥" 
            title="Manage your account" 
            description="Configure your account settings, such as email, profile details, and more." 
          />
          <HelpItem 
            icon="🧩" 
            title="Manage organizations, teams, and projects" 
            description="Organize your people and work with Abstract." 
          />
          <HelpItem 
            icon="💲" 
            title="Manage billing" 
            description="Change subscriptions and payment details." 
          />
          <HelpItem 
            icon="🔑" 
            title="Authenticate to Abstract" 
            description="Set up and configure SSO, SCIM, and Just-in-Time provisioning." 
          />
          <HelpItem 
            icon="💬" 
            title="Abstract support" 
            description="Get in touch with a human." 
          />
        </div>
      </main>
      <footer className="footer">
        <div className="footer-links">
          <div>
            <h4>Abstract</h4>
            <p>Start Trial</p>
            <p>Pricing</p>
            <p>Download</p>
          </div>
          <div>
            <h4>Resources</h4>
            <p>Blog</p>
            <p>Help Center</p>
            <p>Release Notes</p>
            <p>Status</p>
          </div>
          <div>
            <h4>Community</h4>
            <p>Twitter</p>
            <p>LinkedIn</p>
            <p>Facebook</p>
            <p>Dribbble</p>
          </div>
          <div>
            <h4>Company</h4>
            <p>About Us</p>
            <p>Careers</p>
            <p>Legal</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HelpItem({ icon, title, description }) {
  return (
    <div className="help-item">
      <span className="icon">{icon}</span>
      <div className="help-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default App;