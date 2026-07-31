import React from 'react';
import { Mail, Globe, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span style={{ fontSize: '2rem' }}>✜</span> GoodNews
            </div>
            <p className="footer-desc">
              At OnlineGoodNews.com, our mission is to serve the global Christian community by delivering timely and trustworthy news, stories, and insights about churches, missions, and ministries from around the world.
            </p>
            <div className="footer-socials">
              <a href="#"><Phone size={20} /></a>
              <a href="#"><Globe size={20} /></a>
              <a href="#"><Mail size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links-grid">
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/news">News & Views</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/matrimony">Matrimony</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Support</h4>
              <ul>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms of Service</Link></li>
                <li><Link to="/support">Support Center</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact Us</h4>
              <ul>
                <li><a href="mailto:info@onlinegoodnews.com">info@onlinegoodnews.com</a></li>
                <li><a href="tel:+919447372726">+91 94473 72726 (India)</a></li>
                <li><a href="tel:+12149297614">+1 (214) 929 7614 (USA)</a></li>
                <li><a href="tel:+447951963062">+44 7951 963062 (UK)</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© GoodNews, {new Date().getFullYear()} All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
