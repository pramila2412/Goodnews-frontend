import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, Clock } from 'lucide-react';
import parse from 'html-react-parser';
import moment from 'moment';
import { Link } from 'react-router-dom';

import { 
  latestHomeThreeNews, 
  bannerAdds, 
  getGroupedCategory, 
  getAllBox 
} from '../Services/UserServices';

// Helper to extract image and description from HTML content
export const extractContent = (htmlContent) => {
  if (!htmlContent) return { image: "/DefaultImages/news_default_img.jpeg", description: "" };
  let imageNode = null;
  let textNodes = [];
  
  parse(htmlContent, {
    replace: (domNode) => {
      if (domNode.name === 'img' && !imageNode) {
        imageNode = domNode;
      }
      if (domNode.type === 'text') {
        textNodes.push(domNode.data);
      }
      return null;
    }
  });

  const image = imageNode?.attribs?.src || "https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
  const description = textNodes.join(" ").trim().substring(0, 150) + "...";
  return { image, description };
};

const Dashboard = () => {
  const [latestNews, setLatestNews] = useState([]);
  const [bannerAds, setBannerAds] = useState([]);
  const [groupedCategory, setGroupedCategory] = useState({});
  const [boxAds, setBoxAds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [latestRes, bannerRes, groupedRes, boxRes] = await Promise.all([
          latestHomeThreeNews(),
          bannerAdds(),
          getGroupedCategory(),
          getAllBox()
        ]);
        
        setLatestNews(latestRes?.data?.news || []);
        setBannerAds(bannerRes?.data?.ads || []);
        setGroupedCategory(groupedRes?.data?.newsByCategory || {});
        setBoxAds(boxRes?.data?.ads || []);
      } catch (error) {
        console.error("Failed to fetch data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontSize: '1.5rem', fontWeight: 'bold' }}>Loading GoodNews...</div>;
  }

  const heroNews = latestNews[0];
  const sideNews = latestNews.slice(1, 4);

  const categories = Object.keys(groupedCategory);
  const cat1 = categories[0] || '';
  const cat2 = categories[1] || '';
  const cat3 = categories[2] || '';
  const cat4 = categories[3] || '';

  return (
    <>
      {latestNews.length > 0 && (
        <div className="ticker">
          <div className="container ticker-content">
            <span className="ticker-label">Breaking</span>
            <div className="ticker-items">
              {latestNews.map((news, idx) => (
                <span key={idx}>{news.title}</span>
              ))}
            </div>
          </div>
        </div>
      )}

      <main className="container main-content animate-fade-in">
        {heroNews && (
          <section className="hero-grid">
            <Link to={`/news/${encodeURIComponent(heroNews.categoryName || 'news')}/${encodeURIComponent(heroNews.slug)}`} className="hero-main" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src={extractContent(heroNews.content).image} alt={heroNews.title} />
              <div className="hero-overlay">
                <div className="flex items-center gap-4">
                  <span className="badge">{heroNews.categoryName}</span>
                  <span className="meta-info"><Clock size={14} /> {moment(heroNews.date).format('DD MMM YYYY')}</span>
                </div>
                <h2>{heroNews.title}</h2>
              </div>
            </Link>
            
            <div className="side-news">
              {sideNews.map(news => {
                const { image, description } = extractContent(news.content);
                return (
                  <Link
                    key={news._id}
                    to={`/news/${encodeURIComponent(news.categoryName || 'news')}/${encodeURIComponent(news.slug)}`}
                    className="side-news-item"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <img src={image} alt={news.title} />
                    <div className="side-news-content">
                      <div className="author-info">
                        <span>{moment(news.date).format('DD MMM YYYY')} • {news.viewsCount} views</span>
                      </div>
                      <h4>{news.title}</h4>
                      <p>{description}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {cat1 && (
          <section>
            <div className="section-title">
              {cat1} Highlights
              <button className="see-more">Explore More <ArrowRight size={16} /></button>
            </div>
            <div className="news-grid-4">
              {groupedCategory[cat1].slice(0, 4).map(news => {
                const { image, description } = extractContent(news.content);
                return (
                  <Link
                    key={news._id}
                    to={`/news/${encodeURIComponent(news.categoryName || 'news')}/${encodeURIComponent(news.slug)}`}
                    className="news-card"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <div className="news-card-img-wrapper">
                      <img src={image} alt={news.title} />
                    </div>
                    <div className="author-info">
                      <span className="font-semibold text-accent" style={{ textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.75rem' }}>
                        {news.categoryName} <span style={{ color: 'var(--text-tertiary)', fontWeight: 'normal', textTransform: 'none', letterSpacing: '0' }}>• {moment(news.date).format('DD MMM YYYY')}</span>
                      </span>
                    </div>
                    <h3>{news.title}</h3>
                    <p>{description}</p>
                    <div className="card-footer">
                      <span>{news.viewsCount} views</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {cat2 && groupedCategory[cat2].length > 0 && (
          <section>
            <div className="section-title">
              Featured in {cat2}
              <button className="see-more">View All <ArrowRight size={16} /></button>
            </div>
            <div className="latest-news-grid">
              <div className="latest-hero">
                <img src={extractContent(groupedCategory[cat2][0].content).image} alt={groupedCategory[cat2][0].title} className="latest-hero-img" />
                <div className="latest-hero-content">
                  <div className="author-info">
                    <span>{moment(groupedCategory[cat2][0].date).format('DD MMM YYYY')}</span>
                  </div>
                  <h2>{groupedCategory[cat2][0].title}</h2>
                  <p>{extractContent(groupedCategory[cat2][0].content).description}</p>
                  <div className="card-footer" style={{ justifyContent: 'flex-start', gap: '0.5rem', border: 'none', paddingTop: 0 }}>
                    <span className="badge">{groupedCategory[cat2][0].categoryName}</span>
                    <span style={{ color: 'var(--text-secondary)' }}>• {groupedCategory[cat2][0].viewsCount} views</span>
                  </div>
                </div>
              </div>
              
              <div className="latest-small-grid">
                {groupedCategory[cat2].slice(1, 4).map(news => {
                  const { image } = extractContent(news.content);
                  return (
                    <Link
                      key={news._id}
                      to={`/news/${encodeURIComponent(news.categoryName || 'news')}/${encodeURIComponent(news.slug)}`}
                      className="latest-small-card"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      <img src={image} alt={news.title} />
                      <div className="latest-small-card-content">
                        <div className="author-info" style={{ marginBottom: '0' }}>
                          <span className="font-semibold" style={{ color: 'var(--accent-primary)', fontSize: '0.75rem', textTransform: 'uppercase' }}>
                            {moment(news.date).format('DD MMM')}
                          </span>
                        </div>
                        <h4>{news.title}</h4>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {bannerAds.length > 0 && (
          <section>
            <div className="next-match-banner" style={{ display: 'block', height: 'auto', cursor: 'pointer', borderRadius: 'var(--border-radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
              <img src={bannerAds[0]?.image?.url} alt="Advertisement Banner" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
            </div>
          </section>
        )}

        <section className="content-sidebar-grid">
          <div>
            {cat3 && (
              <>
                <div className="section-title">Latest Videos & {cat3}</div>
                <div className="video-list">
                  {groupedCategory[cat3].slice(0, 3).map(news => {
                    const { image, description } = extractContent(news.content);
                    return (
                      <Link
                        key={news._id}
                        to={`/news/${encodeURIComponent(news.categoryName || 'news')}/${encodeURIComponent(news.slug)}`}
                        className="video-card"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        <div className="video-thumbnail">
                          <img src={image} alt={news.title} />
                          <button className="play-btn">
                            <Play size={20} fill="currentColor" />
                          </button>
                        </div>
                        <div className="side-news-content">
                          <div className="author-info">
                            <span>{moment(news.date).format('DD MMM YYYY')}</span>
                          </div>
                          <h3>{news.title}</h3>
                          <p>{description}</p>
                          <div className="card-footer" style={{ marginTop: 'auto', justifyContent: 'flex-start', gap: '0.5rem', border: 'none', padding: 0 }}>
                            <span className="text-accent font-semibold">{news.categoryName}</span>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </>
            )}
          </div>
          
          <div>
            <div className="section-title">Sponsored</div>
            <div className="standings-table-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', border: 'none', boxShadow: 'none' }}>
               {boxAds.slice(0, 3).map((ad, idx) => (
                  <img key={idx} src={ad?.image?.url} alt="Box Ad" style={{ width: '100%', borderRadius: 'var(--border-radius-lg)', border: '1px solid rgba(0,0,0,0.05)', objectFit: 'cover' }} />
               ))}
            </div>
          </div>
        </section>

        {cat4 && (
          <section>
            <div className="section-title">
              {cat4} Focus
              <button className="see-more">View All <ArrowRight size={16} /></button>
            </div>
            <div className="news-grid-4">
              {groupedCategory[cat4].slice(0, 4).map(news => {
                const { image, description } = extractContent(news.content);
                return (
                  <Link
                    key={news._id}
                    to={`/news/${encodeURIComponent(news.categoryName || 'news')}/${encodeURIComponent(news.slug)}`}
                    className="news-card"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <div className="news-card-img-wrapper">
                      <img src={image} alt={news.title} />
                    </div>
                    <div className="author-info">
                      <span className="font-semibold" style={{ color: 'var(--accent-primary)', fontSize: '0.75rem', textTransform: 'uppercase' }}>
                        {news.categoryName} <span style={{ color: 'var(--text-tertiary)', fontWeight: 'normal', textTransform: 'none' }}>• {moment(news.date).format('DD MMM YYYY')}</span>
                      </span>
                    </div>
                    <h3>{news.title}</h3>
                    <p>{description}</p>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </main>
    </>
  );
};

export default Dashboard;
