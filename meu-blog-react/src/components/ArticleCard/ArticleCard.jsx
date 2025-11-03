import React from "react";
import { Link } from "react-router-dom";
import "./ArticleCard.css";

function ArticleCard({ slug, title, summary, imageUrl }) {
  const articleLink = `/blog/${slug}`;

  return (
    <article className="article-card">
      <Link to={articleLink} className="card-link">
        <div className="card-image-container">
          <img src={imageUrl} alt={title} className="card-image" />
        </div>
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-summary">{summary}</p>
          <span className="card-read-more">Ler mais &rarr;</span>
        </div>
      </Link>
    </article>
  );
}

export default ArticleCard;
