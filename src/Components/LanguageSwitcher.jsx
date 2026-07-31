import React, { useState, useCallback } from 'react';

const LanguageSwitcher = () => {
    const [currentLang] = useState(() => {
        // Detect current language from Google Translate cookie
        const match = document.cookie.match(/googtrans=\/en\/(\w+)/);
        if (match && match[1] === 'ml') return 'ml';
        return 'en';
    });

    const switchTo = useCallback((lang) => {
        if (lang === currentLang) return;

        if (lang === 'en') {
            document.cookie = `googtrans=/en/en; path=/;`;
            document.cookie = `googtrans=/en/en; path=/; domain=.${window.location.hostname}`;
        } else if (lang === 'ml') {
            document.cookie = `googtrans=/en/ml; path=/;`;
            document.cookie = `googtrans=/en/ml; path=/; domain=.${window.location.hostname}`;
        }

        // Reload to apply - this only happens ONCE per switch
        window.location.reload();
    }, [currentLang]);

    return (
        <div className="notranslate" style={{ display: 'flex', alignItems: 'center', borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--border-color)', fontSize: '12px', fontWeight: '600', userSelect: 'none', background: 'var(--bg-color)' }}>
            <button
                onClick={() => switchTo('en')}
                style={{
                    padding: '6px 12px',
                    transition: 'all 0.2s',
                    backgroundColor: currentLang === 'en' ? 'var(--accent-primary)' : 'transparent',
                    color: currentLang === 'en' ? 'white' : 'var(--text-secondary)'
                }}
            >
                EN
            </button>
            <button
                onClick={() => switchTo('ml')}
                style={{
                    padding: '6px 12px',
                    transition: 'all 0.2s',
                    backgroundColor: currentLang === 'ml' ? 'var(--accent-primary)' : 'transparent',
                    color: currentLang === 'ml' ? 'white' : 'var(--text-secondary)'
                }}
            >
                മലയാളം
            </button>
        </div>
    );
};

export default LanguageSwitcher;
