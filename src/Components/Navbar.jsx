import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { name: 'ഹോം', path: '/', active: true },
  { 
    name: 'വാർത്തകളും കാഴ്ചകളും',
    path: '/news',
    dropdown: [
      { name: 'കേരളം', path: '/news/kerala' }, 
      { name: 'ദേശീയം', path: '/news/national' }, 
      { name: 'അന്തർദേശീയം', path: '/news/international' }, 
      { name: 'ചരമം', path: '/obituary' }, 
      { name: 'ലേഖനങ്ങളും മുഖപ്രസംഗങ്ങളും', path: '/news/article' }
    ] 
  },
  { 
    name: 'വിവാഹം',
    path: '/matrimony',
    dropdown: [
      { name: 'എല്ലാം', path: '/matrimony' }, 
      { name: 'വധുവിനെ ആവശ്യമുണ്ട്', path: '/matrimony?type=bride' }, 
      { name: 'വരനെ ആവശ്യമുണ്ട്', path: '/matrimony?type=groom' }
    ] 
  },
  { 
    name: 'പരസ്യങ്ങൾ',
    path: '/classifieds',
    dropdown: [
      { name: 'വാങ്ങലും വിൽക്കലും', path: '/classifieds/buy-sell' }, 
      { name: 'വാടകയ്ക്ക്', path: '/classifieds/rent' }, 
      { name: 'റിയൽ എസ്റ്റേറ്റ്', path: '/classifieds/real-estate' }, 
      { name: 'വാഹനങ്ങൾ', path: '/classifieds/vehicles' }
    ] 
  },
  { 
    name: 'വിഷയങ്ങൾ',
    path: '/topics',
    dropdown: [
      { name: 'കുട്ടികൾ', path: '/topics/kidz' }, 
      { name: 'യുവജനങ്ങൾ', path: '/topics/youth' }, 
      { name: 'വനിതകൾ', path: '/topics/women' }, 
      { name: 'വിജയഗാഥകൾ', path: '/topics/success' }
    ] 
  },
  { name: 'ഞങ്ങളെക്കുറിച്ച്', path: '/about' }
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="logo notranslate">
          <span style={{ fontSize: '2rem' }}>✜</span> GoodNews
        </Link>
        
        <div className={`nav-menu-wrapper ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.name} className={item.active ? 'active' : ''}>
                <Link to={item.path} style={{ display: 'flex', alignItems: 'center', gap: '4px' }} onClick={() => setIsMobileMenuOpen(false)}>
                  {item.name} {item.dropdown && <ChevronDown size={14} />}
                </Link>
                {item.dropdown && (
                  <div className="nav-dropdown-menu">
                    {item.dropdown.map(subItem => (
                      <Link key={subItem.name} to={subItem.path} onClick={() => setIsMobileMenuOpen(false)}>
                        <span>{subItem.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </div>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
