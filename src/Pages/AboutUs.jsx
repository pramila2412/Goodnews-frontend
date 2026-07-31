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
      <section style={{ backgroundColor: 'var(--surface-color)', padding: '3rem', borderRadius: 'var(--border-radius-xl)', boxShadow: 'var(--shadow-md)' }}>
        <div className="section-title" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
          ഞങ്ങളെക്കുറിച്ച്
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          <p>
            <span className="notranslate"><strong>"onlinegoodnews.com"</strong></span>-ലേക്ക് സ്വാഗതം - ലോകമെമ്പാടുമുള്ള പ്രത്യാശയും പ്രചോദനവും ഉണർത്തുന്ന വാർത്തകൾ പങ്കിടുന്നതിനുള്ള നിങ്ങളുടെ സ്വന്തം ഓൺലൈൻ പ്ലാറ്റ്‌ഫോം. എല്ലാ പശ്ചാത്തലങ്ങളിലുമുള്ള ക്രിസ്ത്യാനികളെ പ്രചോദിപ്പിക്കുകയും ഒന്നിപ്പിക്കുകയും ചെയ്യുന്ന വിശ്വാസത്തിലും ക്രിയാത്മക മൂല്യങ്ങളിലും വേരൂന്നിയ ഉള്ളടക്കം എത്തിക്കാൻ ഞങ്ങൾ പ്രതിജ്ഞാബദ്ധരാണ്.
          </p>
          <p>
            വിശ്വാസികൾക്കും അന്വേഷകർക്കും വെറുതെ കൗതുകമുള്ളവർക്കും പ്രതീക്ഷയുടെയും സ്നേഹത്തിന്റെയും അതിജീവനത്തിന്റെയും കഥകൾ കണ്ടെത്താൻ കഴിയുന്ന ഒരിടം സൃഷ്ടിക്കുക എന്നതാണ് ഞങ്ങളുടെ ദൗത്യം. സമൂഹങ്ങളിലും അതിനപ്പുറമുള്ള വലിയ സംഭവങ്ങളിലും വെളിച്ചം വീശുന്നതിലൂടെ, പലപ്പോഴും നിഷേധാത്മകതയാൽ മൂടപ്പെട്ട ഒരു ലോകത്തിൽ പ്രകാശത്തിന്റെ ഉറവിടമാകാൻ ഞങ്ങൾ ശ്രമിക്കുന്നു.
          </p>
          <p>
            ലോകമെമ്പാടുമുള്ള സഭകളെയും മിഷനുകളെയും കുറിച്ചുള്ള വാർത്തകളും ഉൾക്കാഴ്ചകളും നൽകുക, വളർച്ചയും ഐക്യവും പ്രോത്സാഹനവും വളർത്തുക - എല്ലാം ദൈവത്തിന്റെ മഹത്വത്തിനായി.
          </p>
          <p>
            ഞങ്ങൾ ചെയ്യുന്ന എല്ലാ കാര്യങ്ങളിലും, എല്ലാ പ്ലാറ്റ്‌ഫോമുകളിലും, ക്രിസ്തുവിന്റെയും അവിടുത്തെ സഭയുടെയും സ്നേഹത്താൽ നയിക്കപ്പെടുന്ന, വിശ്വാസത്തിൽ വേരൂന്നിയ, ക്രിയാത്മകമായി രൂപകൽപ്പന ചെയ്ത ആഴത്തിലുള്ള ഒരു അനുഭവം നൽകാൻ ഞങ്ങൾ ശ്രമിക്കുന്നു.
          </p>

          <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', fontSize: '1.5rem' }}>ഞങ്ങളുടെ ടീം</h3>
          <p>
            നാല് പതിറ്റാണ്ടിലേറെയായി ക്രൈസ്തവ പത്രപ്രവർത്തനത്തിലും ആശയവിനിമയത്തിലും വൈദഗ്ധ്യമുള്ള പ്രൊഫഷണലുകളാണ് <span className="notranslate">Online Goodnews</span>-ന് കരുത്തേകുന്നത്. ആഗോള പ്രേക്ഷകരെ പ്രചോദിപ്പിക്കുകയും ബന്ധിപ്പിക്കുകയും വിവരങ്ങൾ അറിയിക്കുകയും ചെയ്യുന്ന വാർത്തകൾ പങ്കിടാൻ ഞങ്ങൾ പ്രതിജ്ഞാബദ്ധരാണ്.
          </p>
          <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', listStyle: 'none', padding: 0 }} className="notranslate">
            {['C V Mathew', 'T M Mathew', 'Shaji Maniyat', 'Wesly Mathew', 'Saji Mathai Kathettu', 'Jessy Shajan', 'Finny Korah'].map((member, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600', color: 'var(--accent-primary)' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-primary)' }}></span>
                {member}
              </li>
            ))}
          </ul>

          <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', fontSize: '1.5rem' }}>ബന്ധപ്പെടുക</h3>
          <p>
            നിങ്ങളുടെ പ്രതികരണങ്ങൾക്ക് ഞങ്ങൾ വിലകല്പിക്കുന്നു. ഏത് ചോദ്യങ്ങൾക്കും അന്വേഷണങ്ങൾക്കും നിങ്ങളെ സഹായിക്കാൻ ഞങ്ങൾ ഇവിടെയുണ്ട്. താഴെ കൊടുത്തിരിക്കുന്ന വിവരങ്ങൾ ഉപയോഗിച്ച് ഞങ്ങളെ ബന്ധപ്പെടാവുന്നതാണ്:
          </p>
          
          <div style={{ backgroundColor: 'var(--bg-color)', padding: '1.5rem', borderRadius: 'var(--border-radius-lg)', border: '1px solid var(--border-color)' }}>
            <p style={{ marginBottom: '1rem' }}><strong>വിലാസം:</strong> <span className="notranslate">ONLINEGOODNEWS.COM</span>, Kottayam 686 004, Kerala, India</p>
            <p><strong>ഫോൺ:</strong></p>
            <ul style={{ listStyle: 'none', marginLeft: '1rem', marginBottom: '1rem' }} className="notranslate">
              <li>India: +91 94473 72726 / +91 99462 05422 / +91 94005 20909</li>
              <li>USA: +1 (214) 929 7614</li>
              <li>UK: +44 7951 963062</li>
              <li>Australia: +61 420640472</li>
              <li>Gulf: +971 50 354 0676</li>
            </ul>
            <p><strong>ഇമെയിൽ:</strong> <a href="mailto:info@onlinegoodnews.com" style={{ color: 'var(--accent-primary)', fontWeight: '600' }} className="notranslate">info@onlinegoodnews.com</a></p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
