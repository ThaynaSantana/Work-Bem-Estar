import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface NewsArticle {
  title: string;
  description: string;
  content: string;
  source: {
    name: string;
  };
  url: string;
}

const Noticias: React.FC = () => {
  const [news, setNews] = useState<NewsArticle[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const query = "saude mental OR controle emocional OR trabalho"
        const response = await axios.get(`https://gnews.io/api/v4/search`,{params: {
          q: query,
          lang: 'pt',
          max: 10,
          apikey: '3d3a6ba5d7e2f5de2f62c5e02f7ff44e',
        }});
        setNews(response.data.articles);
      } catch (error) {
        console.error('Failed to fetch news:', error);
      }
    };

    fetchNews();
  }, []);

  const openArticleInNewTab = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div>
      {news.length === 0 ? (
        <p>Carregando notícias...</p>
      ) : (
        <div className='noticias'>
          {news.map((article, index) => (
            <article key={index}>
              <h3>{article.title}</h3>
              <p>{article.content}</p>
              <p>Fonte: {article.source.name}</p>
              <button className='btn btn-info btn-lg col-12' onClick={() => openArticleInNewTab(article.url)}>Leia Mais</button>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default Noticias;
