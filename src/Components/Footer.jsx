import React from 'react';
import { Mail, Globe, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo notranslate">
              <span style={{ fontSize: '2rem' }}>✜</span> GoodNews
            </div>
            <p className="footer-desc">
              ലോകമെമ്പാടുമുള്ള ക്രൈസ്തവ സമൂഹത്തിന് സഭകളെയും മിഷനുകളെയും ശുശ്രൂഷകളെയും കുറിച്ചുള്ള വിശ്വസനീയമായ വാർത്തകളും കഥകളും ഉൾക്കാഴ്ചകളും സമയബന്ധിതമായി എത്തിക്കുക എന്നതാണ് OnlineGoodNews.com ന്റെ ദൗത്യം.
            </p>
            <div className="footer-socials">
              <a href="#"><Phone size={20} /></a>
              <a href="#"><Globe size={20} /></a>
              <a href="#"><Mail size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links-grid">
            <div className="footer-col">
              <h4>കമ്പനി</h4>
              <ul>
                <li><Link to="/about">ഞങ്ങളെക്കുറിച്ച്</Link></li>
                <li><Link to="/news">വാർത്തകളും കാഴ്ചകളും</Link></li>
                <li><Link to="/contact">ബന്ധപ്പെടുക</Link></li>
                <li><Link to="/matrimony">വിവാഹം</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>സപ്പോർട്ട്</h4>
              <ul>
                <li><Link to="/privacy">സ്വകാര്യതാ നയം</Link></li>
                <li><Link to="/terms">സേവന വ്യവസ്ഥകൾ</Link></li>
                <li><Link to="/support">സപ്പോർട്ട് സെന്റർ</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>ബന്ധപ്പെടുക</h4>
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
          <span>© <span className="notranslate">GoodNews</span>, {new Date().getFullYear()} എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
