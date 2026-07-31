import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('gn-theme');
    return saved === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('gn-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <button 
      onClick={toggleTheme} 
      className="notranslate"
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '6px', 
        fontSize: '12px', 
        color: 'var(--text-primary)', 
        fontWeight: '600',
        padding: '6px 12px',
        background: 'var(--bg-color)',
        border: '1px solid var(--border-color)',
        borderRadius: '20px',
        transition: 'all 0.2s'
      }}
      onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--accent-primary)'; e.currentTarget.style.color = 'var(--accent-primary)'; }}
      onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
    >
      {theme === 'dark' ? (
        <>
          <Sun size={14} /> Light
        </>
      ) : (
        <>
          <Moon size={14} /> Dark
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
