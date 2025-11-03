import React, { useState, useEffect } from 'react';
import { client, urlFor } from '../cliente.js'; 
import ArticleCard from '../components/ArticleCard/ArticleCard.jsx';
import './Home.css'; 

const query = `*[_type == "artigo"] | order(_createdAt desc) [0...3] {
  _id,
  title,
  "slug": slug.current,
  summary,
  mainImage
}`;

function Home() {
  const [destaques, setDestaques] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.fetch(query)
      .then((data) => {
        setDestaques(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar destaques:", error);
        setLoading(false);
      });
  }, []); 

  return (
    <div className="page-container">
      <h1>Bem-vindo ao Meu Blog</h1>
      <p>O seu espaço para tecnologia, desenvolvimento e mais.</p>

      <section className="destaques-section">
        <h2>Últimos Artigos</h2>
        
        {loading ? (
          <p>A carregar destaques...</p>
        ) : (
          <div className="destaques-grid">
            {destaques.map(article => (
              <ArticleCard
                key={article._id}
                slug={article.slug}
                title={article.title}
                summary={article.summary}
                imageUrl={article.mainImage ? urlFor(article.mainImage).url() : 'https://picsum.photos/400/225'}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;