import React, { useEffect } from 'react';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <main className="container main-content animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <section style={{ backgroundColor: 'white', padding: '3rem', borderRadius: 'var(--border-radius-xl)', boxShadow: 'var(--shadow-md)' }}>
        <div className="section-title" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
          About Us
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          <p>
            Welcome to <strong>"onlinegoodnews.com"</strong> - your own online platform for sharing Hope, Inspiration, and Uplifting stories from around the Globe. We are dedicated in delivering content rooted in faith and positive values that inspire and unite Christians of all backgrounds.
          </p>
          <p>
            Our mission is to create a space where everyone—believers, seekers, and those simply curious—can discover stories of hope, love, and resilience. By shining a spotlight on the great happenings in communities and beyond, we strive to be a source of light in a world often overshadowed by negativity.
          </p>
          <p>
            To provide news and insights about churches and missions worldwide, fostering growth, unity, and encouragement, all for the greater glory of God.
          </p>
          <p>
            In all that we do, across every platform, we strive to provide a deeper experience that is very much rooted in faith thoughtfully designed and creatively inspired, driven the love of Christ and His Church.
          </p>

          <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', fontSize: '1.5rem' }}>Our Team</h3>
          <p>
            Online Goodnews is powered by seasoned professionals with over four decades of expertise in Christian journalism and communications, committed to sharing stories that inspire, connect, and inform a global audience.
          </p>
          <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', listStyle: 'none', padding: 0 }}>
            {['C V Mathew', 'T M Mathew', 'Shaji Maniyat', 'Wesly Mathew', 'Saji Mathai Kathettu', 'Jessy Shajan', 'Finny Korah'].map((member, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600', color: 'var(--accent-primary)' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-primary)' }}></span>
                {member}
              </li>
            ))}
          </ul>

          <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', fontSize: '1.5rem' }}>Contact Us</h3>
          <p>
            We value your feedback and are here to assist you with any questions or inquiries. Feel free to reach out to us through the following contact details:
          </p>
          
          <div style={{ backgroundColor: 'var(--bg-color)', padding: '1.5rem', borderRadius: 'var(--border-radius-lg)', border: '1px solid var(--border-color)' }}>
            <p style={{ marginBottom: '1rem' }}><strong>Address:</strong> ONLINEGOODNEWS.COM, Kottayam 686 004, Kerala, India</p>
            <p><strong>Phone:</strong></p>
            <ul style={{ listStyle: 'none', marginLeft: '1rem', marginBottom: '1rem' }}>
              <li>India: +91 94473 72726 / +91 99462 05422 / +91 94005 20909</li>
              <li>USA: +1 (214) 929 7614</li>
              <li>UK: +44 7951 963062</li>
              <li>Australia: +61 420640472</li>
              <li>Gulf: +971 50 354 0676</li>
            </ul>
            <p><strong>Email:</strong> <a href="mailto:info@onlinegoodnews.com" style={{ color: 'var(--accent-primary)', fontWeight: '600' }}>info@onlinegoodnews.com</a></p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
