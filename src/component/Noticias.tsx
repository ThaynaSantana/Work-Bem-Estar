import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface NewsArticle {
  title: string;
  description: string;
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
        const query = "+controle+emocional+trabalho"
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=abd29d5652914c009f8d43bd4792dce7`);
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
              <p>{article.description}</p>
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
