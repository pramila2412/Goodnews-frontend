import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getFilteredNewsData } from '../Services/UserServices';
import { extractContent } from './Dashboard';
import moment from 'moment';

const CategoryNewsList = () => {
  const { pathname } = useLocation();
  // Handle /news/:category, /news, /classifieds, and /classifieds/:type
  const categoryParam = pathname.split('/').pop();
  const isClassifieds = pathname.startsWith('/classifieds');
  const isNewsRoot = pathname === '/news';

  const classifiedsCategoryMap = {
    'buy-sell': 'Buy & Sell',
    'real-estate': 'Real Estate',
    rent: 'Rent',
    vehicles: 'Vehicles'
  };

  const categoryName = isClassifieds
    ? categoryParam === 'classifieds'
      ? 'Classifieds'
      : classifiedsCategoryMap[categoryParam] || categoryParam.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ')
    : isNewsRoot
      ? ''
      : categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1);

  const apiCategoryName = isClassifieds
    ? categoryParam === 'classifieds'
      ? 'classifieds'
      : classifiedsCategoryMap[categoryParam] || categoryName
    : isNewsRoot
      ? null
      : categoryName;

  const [filteredNews, setFilteredNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const filter = { count: null };
        if (apiCategoryName) {
          filter.categoryName = apiCategoryName;
        }
        if (!isClassifieds) {
          filter.type = "Main";
        }
        const res = await getFilteredNewsData(filter);
        setFilteredNews(res?.data?.latestNews || []);
      } catch (error) {
        console.error("Failed to fetch category news", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchNews();
  }, [categoryName]);

  const title = categoryName ? (isClassifieds ? `${categoryName}` : `${categoryName} News`) : "All News & Views";

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
            <p style={{ marginTop: '1rem' }}>We are currently gathering the latest updates for this category.</p>
          </div>
        ) : (
          <div className="latest-news-grid" style={{ gridTemplateColumns: '1fr', gap: '2rem' }}>
            {filteredNews.map(news => {
              const { image, description } = extractContent(news.content);
              return (
                <Link
                  key={news._id}
                  to={`/news/${encodeURIComponent(categoryName || news.categoryName || 'news')}/${encodeURIComponent(news.slug)}`}
                  className="latest-small-card"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '250px 1fr',
                    padding: '1.5rem',
                    textDecoration: 'none',
                    color: 'inherit'
                  }}
                >
                  <img src={image} alt={news.title} style={{ width: '250px', height: '200px' }} />
                  <div className="latest-small-card-content" style={{ justifyContent: 'center', gap: '0.75rem' }}>
                    <div className="author-info" style={{ marginBottom: '0' }}>
                      <span className="font-semibold" style={{ color: 'var(--accent-primary)', fontSize: '0.85rem', textTransform: 'uppercase' }}>
                        {news.categoryName || categoryName} <span style={{ color: 'var(--text-tertiary)', fontWeight: 'normal', textTransform: 'none' }}>• {moment(news.date).format('DD MMM YYYY')}</span>
                      </span>
                    </div>
                    <h2 style={{ fontSize: '1.5rem', lineHeight: '1.3' }}>{news.title}</h2>
                    <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {description}
                    </p>
                    <div className="card-footer" style={{ marginTop: 'auto', borderTop: 'none', padding: 0 }}>
                      <span style={{ color: 'var(--text-tertiary)' }}>{news.viewsCount} views</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
};

export default CategoryNewsList;
