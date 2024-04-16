import React from 'react';
import './Posts.css';

const Posts = () => {
  const posts = [
    {
      id: "1",
      title: "A Jornada da Programação",
      description: "Aprender a programar é como aprender uma nova língua...",
      imageUrl: "https://unsplash.com/photos/FHnnjk1Yj7Y",
      createdAt: "2024-03-19",
      timeRead: 5
    },
    
  ];

  return (
    <div>
      <div className="featured-section">
        <h2 className="featured-title">Título Destaque</h2>
        <p className="featured-description">Descrição do Destaque</p>
        <img className="featured-image" src="https://unsplash.com/photos/FHnnjk1Yj7Y" alt="Imagem Destaque" />
      </div>

      <div className="post-section container">
        {posts.map(post => (
          <div key={post.id} className="post">
            <div className="post-image">
              <img src={post.imageUrl} alt="Imagem do Post" />
            </div>
            <div className="post-content">
              <div className="post-info">
                <h3 className="post-title">{post.title}</h3>
                <p className="post-description">{post.description}</p>
                <div className="post-details">
                  <p>{post.createdAt}</p>
                  <p>{post.timeRead} min</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
