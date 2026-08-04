import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getNewsBySlug } from '../Services/UserServices';
import { extractContent } from './Dashboard';
import moment from 'moment';

const NewsDetail = () => {
  const { slug } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getNewsBySlug(slug);
        if (response?.data?.success && response.data.news) {
          setNews(response.data.news);
        } else {
          setError('News article not found.');
        }
      } catch (err) {
        console.error(err);
        setError('Failed to load news article.');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchNews();
    }
  }, [slug]);

  if (loading) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>Loading...</div>;
  }

  if (error) {
    return (
      <main className="container main-content animate-fade-in">
        <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
          <h3>{error}</h3>
          <Link to="/news" style={{ color: 'var(--accent-primary)', textDecoration: 'underline' }}>Back to news list</Link>
        </div>
      </main>
    );
  }

  const { image, description } = extractContent(news?.content);

  return (
    <main className="container main-content animate-fade-in">
      <section style={{ padding: '2rem 0' }}>
        <div style={{ marginBottom: '1rem', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          {news?.categoryName}
        </div>
        <h1 style={{ marginBottom: '1rem' }}>{news?.title}</h1>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', color: 'var(--text-tertiary)', fontSize: '0.95rem' }}>
          <span>{moment(news?.date).format('DD MMM YYYY')}</span>
          <span>{news?.viewsCount} views</span>
        </div>
        <div style={{ marginTop: '2rem' }}>
          <img src={image} alt={news?.title} style={{ width: '100%', maxHeight: '500px', objectFit: 'cover', borderRadius: 'var(--border-radius-lg)' }} />
        </div>
        <article style={{ marginTop: '2rem', lineHeight: 1.8, fontSize: '1rem' }} className="news-article">
          <div dangerouslySetInnerHTML={{ __html: news?.content }} />
        </article>
        <div style={{ marginTop: '2rem' }}>
          <Link to="/news" style={{ color: 'var(--accent-primary)', textDecoration: 'underline' }}>
            ← Back to news
          </Link>
        </div>
      </section>
    </main>
  );
};

export default NewsDetail;
