import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getFilterMatrimonyNewsData } from '../Services/UserServices';
import { extractContent } from './Dashboard';
import moment from 'moment';

const Matrimony = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const type = searchParams.get('type') || 'all';

  const [filteredNews, setFilteredNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMatrimony = async () => {
      setLoading(true);
      try {
        const res = await getFilterMatrimonyNewsData(type);
        if (res?.data?.latestMatrimonyNews && res.data.latestMatrimonyNews.length > 0) {
          setFilteredNews(res.data.latestMatrimonyNews);
        } else {
          // Fallback mock data
          setFilteredNews([
            { _id: '1', title: 'MAT-1024', content: '<p>Seeking a suitable match for a 28-year-old software engineer based in Bangalore. Family oriented, loves traveling.</p>', matrimonytype: 'groom', date: new Date().toISOString() },
            { _id: '2', title: 'MAT-2055', content: '<p>Looking for a well-educated partner for a 26-year-old doctor from Kerala. Values Christian traditions.</p>', matrimonytype: 'bride', date: new Date().toISOString() },
            { _id: '3', title: 'MAT-3091', content: '<p>Proposal invited for a 30-year-old businessman settled in Dubai. Looking for a simple, caring partner.</p>', matrimonytype: 'groom', date: new Date().toISOString() },
            { _id: '4', title: 'MAT-4112', content: '<p>Seeking alliance for a 25-year-old teacher in Chennai. Family is well settled and holds strong faith.</p>', matrimonytype: 'bride', date: new Date().toISOString() }
          ].filter(item => type === 'all' ? true : item.matrimonytype === type));
        }
      } catch (error) {
        console.error("Failed to fetch matrimony data", error);
        setFilteredNews([
          { _id: '1', title: 'MAT-1024', content: '<p>Seeking a suitable match for a 28-year-old software engineer based in Bangalore. Family oriented, loves traveling.</p>', matrimonytype: 'groom', date: new Date().toISOString() },
          { _id: '2', title: 'MAT-2055', content: '<p>Looking for a well-educated partner for a 26-year-old doctor from Kerala. Values Christian traditions.</p>', matrimonytype: 'bride', date: new Date().toISOString() }
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetchMatrimony();
  }, [type]);

  const title = type === 'bride' ? "Wanted Brides" : type === 'groom' ? "Wanted Grooms" : "Brides & Grooms";

  if (loading) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>Loading...</div>;
  }

  return (
    <main className="container main-content animate-fade-in">
      <section>
        <div className="section-title">
          {title}
        </div>
        
        {filteredNews.length === 0 ? (
          <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
            <h3>No Records Found...</h3>
          </div>
        ) : (
          <div className="news-grid-4">
            {filteredNews.map(news => {
              const { image, description } = extractContent(news.content);
              return (
                <div key={news._id} className="news-card">
                  <div className="news-card-img-wrapper" style={{ height: '250px' }}>
                    <img 
                      src={image !== "/DefaultImages/news_default_img.jpeg" ? image : (news.matrimonytype === "bride" ? '/matrimonyAvatars/male.jpeg' : '/matrimonyAvatars/female.jpeg')} 
                      alt={news.title} 
                      onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&q=80&w=400"; }}
                    />
                  </div>
                  <div className="author-info">
                    <span className="font-semibold text-accent" style={{ textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.75rem' }}>
                      Matrimony ID: {news.title}
                    </span>
                  </div>
                  <p style={{ marginTop: '0.5rem', flexGrow: 1 }}>{description}</p>
                  <div className="card-footer">
                    <span>{moment(news.date).format('DD MMM YYYY')}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
};

export default Matrimony;
