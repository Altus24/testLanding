import React from 'react';
import './NewsCard.modules.css'; 

const NewsCard = ({ title, description, image }) => {
  return (
    <div className="news-card">
      <img src={image} alt={title} className="news-card-image" />
      <div className="news-card-content">
        <h3 className="news-card-title">{title}</h3>
        <p className="news-card-description">{description}</p>
      </div>
    </div>
  );
};

export default NewsCard;