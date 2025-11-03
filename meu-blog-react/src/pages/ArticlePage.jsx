import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { client, urlFor } from '../cliente.js'; // 1. Importar o nosso cliente Sanity
import PortableText from 'react-portable-text'; // 2. Importar o leitor de "Conteúdo Rico"
import './ArticlePage.css'; // 3. Importar o CSS

// 4. Query GROQ para buscar UM artigo específico pelo seu slug
// Usamos $slug para injetar o parâmetro da URL na query
// Também pedimos o nome do autor
const query = `*[_type == "artigo" && slug.current == $slug][0] {
  _id,
  title,
  mainImage,
  body, // O conteúdo rico
  "authorName": author->name // Ir buscar o nome do autor relacionado
}`;

function ArticlePage() {
  const { slug } = useParams(); // 5. Ler o ':slug' da URL
  const navigate = useNavigate();
  
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return; // Não faz nada se o slug não estiver presente

    client.fetch(query, { slug }) // 6. Passar o 'slug' como parâmetro para a query
      .then((data) => {
        setArticle(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar artigo:", error);
        setLoading(false);
      });
  }, [slug]); // 7. A dependência é o [slug], se o slug mudar, busca de novo

  if (loading) {
    return <div className="page-container"><p>A carregar artigo...</p></div>;
  }

  // 8. O que fazer se o artigo não for encontrado
  if (!article) {
    return (
      <div className="page-container">
        <h1>Artigo não encontrado</h1>
        <button onClick={() => navigate('/blog')} className="back-button">
          &larr; Voltar para todos os artigos
        </button>
      </div>
    );
  }

  // 9. Se o artigo for encontrado, exibe-o
  return (
    <article className="article-page-container">
      <button onClick={() => navigate('/blog')} className="back-button">
        &larr; Voltar para todos os artigos
      </button>

      <h1 className="article-title">{article.title}</h1>
      
      {article.authorName && (
        <p className="article-author">Por: {article.authorName}</p>
      )}

      {article.mainImage && (
        <img 
          src={urlFor(article.mainImage).url()} 
          alt={article.title} 
          className="article-main-image" 
        />
      )}
      
      <div className="article-body">
        {article.body && <PortableText content={article.body} />}
      </div>
    </article>
  );
}

export default ArticlePage;