import React from 'react';
import { Search, Menu, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/', active: true },
  { 
    name: 'News & Views',
    path: '/news',
    dropdown: [
      { name: 'Kerala', path: '/news/kerala' }, 
      { name: 'National', path: '/news/national' }, 
      { name: 'International', path: '/news/international' }, 
      { name: 'Obituary', path: '/obituary' }, 
      { name: 'Article & Editorial', path: '/news/article' }
    ] 
  },
  { 
    name: 'Matrimony',
    path: '/matrimony',
    dropdown: [
      { name: 'All', path: '/matrimony' }, 
      { name: 'Wanted Brides', path: '/matrimony?type=bride' }, 
      { name: 'Wanted Grooms', path: '/matrimony?type=groom' }
    ] 
  },
  { 
    name: 'Classifieds',
    path: '/classifieds',
    dropdown: [
      { name: 'Buy & Sell', path: '/classifieds' }, 
      { name: 'Rentals', path: '/classifieds' }, 
      { name: 'Real Estate', path: '/classifieds' }, 
      { name: 'Vehicles', path: '/classifieds' }
    ] 
  },
  { 
    name: 'Topics',
    path: '/topics',
    dropdown: [
      { name: 'Kidz', path: '/topics/kidz' }, 
      { name: 'Youth', path: '/topics/youth' }, 
      { name: 'Women', path: '/topics/women' }, 
      { name: 'Success Stories', path: '/topics/success' }
    ] 
  },
  { name: 'About Us', path: '/about' }
];

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="logo">
          <span style={{ fontSize: '2rem' }}>✜</span> GoodNews
        </Link>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.name} className={item.active ? 'active' : ''}>
              <Link to={item.path} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                {item.name} {item.dropdown && <ChevronDown size={14} />}
              </Link>
              {item.dropdown && (
                <div className="nav-dropdown-menu">
                  {item.dropdown.map(subItem => (
                    <Link key={subItem.name} to={subItem.path}>
                      <span>{subItem.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <button><Search size={20} /></button>
          <button><Menu size={24} /></button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
