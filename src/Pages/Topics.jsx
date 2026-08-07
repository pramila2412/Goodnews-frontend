import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getFilterTopicData } from '../Services/UserServices';
import { extractContent } from './Dashboard';
import moment from 'moment';

const Topics = () => {
  const { pathname } = useLocation();
  const type = pathname.split('/').pop() || 'all';

  const [filteredNews, setFilteredNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopics = async () => {
      setLoading(true);
      try {
        const res = await getFilterTopicData(type);
        if (res?.data?.latestTopicsNews && res.data.latestTopicsNews.length > 0) {
          setFilteredNews(res.data.latestTopicsNews);
        } else {
          // Fallback mock data
          const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
          const t = type === 'all' ? 'Kidz' : capitalize(type);
          setFilteredNews([
            { _id: '1', title: `Top 10 Learning Activities for ${t}`, content: '<img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80" /><p>Discover engaging ways to keep young minds active and learning during the holidays.</p>', categoryName: t, date: new Date().toISOString() },
            { _id: '2', title: `Inspiring Stories of ${t} Leaders`, content: '<img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80" /><p>How the new generation is stepping up to solve community challenges.</p>', categoryName: t, date: new Date().toISOString() },
            { _id: '3', title: `Health & Wellness Tips for ${t}`, content: '<img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80" /><p>A complete guide to maintaining physical and mental wellbeing in today\'s fast-paced world.</p>', categoryName: t, date: new Date().toISOString() },
            { _id: '4', title: `Upcoming Events for ${t}`, content: '<img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&q=80" /><p>Join the community for a weekend of fun, learning, and networking.</p>', categoryName: t, date: new Date().toISOString() }
          ]);
        }
      } catch (error) {
        console.error("Failed to fetch topics data", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchTopics();
  }, [type]);

  const title = type.charAt(0).toUpperCase() + type.slice(1) + " Topics";

  return (
    <main className="container main-content animate-fade-in">
      <section>
        <div className="section-title">
          {title}
        </div>
        
        {filteredNews.length === 0 ? (
          <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
            <h3>രേഖകളൊന്നും കണ്ടെത്തിയില്ല</h3>
          </div>
        ) : (
          <div className="news-grid-4">
            {filteredNews.map(news => {
              const { image, description } = extractContent(news.content);
              return (
                <div key={news._id} className="news-card">
                  <div className="news-card-img-wrapper" style={{ height: '200px' }}>
                    <img 
                      src={image} 
                      alt={news.title} 
                    />
                  </div>
                  <div className="author-info">
                    <span className="font-semibold text-accent" style={{ textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.75rem' }}>
                      {news.categoryName || type}
                    </span>
                  </div>
                  <h3>{news.title}</h3>
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

export default Topics;
