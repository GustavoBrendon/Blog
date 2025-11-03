import React, { useState, useEffect } from "react";
import { client, urlFor } from "../cliente.js";
import ArticleCard from "../components/ArticleCard/ArticleCard";
import "./Blog.css";

const query = `*[_type == "artigo"] | order(_createdAt desc) {
  _id,
  title,
  "slug": slug.current, // Pegamos o 'current' do slug
  summary,
  mainImage
}`;

function Blog() {
  const [artigos, setArtigos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(query)
      .then((data) => {
        setArtigos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar artigos:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="page-container">
        <h1>Artigos do Blog</h1>
        <p>A carregar artigos...</p>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h1>Artigos do Blog</h1>

      <div className="blog-grid">
        {artigos.map((article) => (
          <ArticleCard
            key={article._id}
            slug={article.slug}
            title={article.title}
            summary={article.summary}
            imageUrl={
              article.mainImage
                ? urlFor(article.mainImage).url()
                : "https://picsum.photos/400/225"
            }
          />
        ))}
      </div>
    </div>
  );
}

export default Blog;
