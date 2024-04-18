import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Posts.css';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3031/posts')
            .then(response => response.json())
            .then(data => setPosts(data));
    }, []);

    return (
        <div className="posts-container">
            <div className="highlight">
                {posts.length > 0 && (
                    <div className="highlight-post">
                        <h1 className="highlight-title">{posts[0].title}</h1>
                        <p className="highlight-description">Aqui você ficará bem informado com nosso blog super top</p>
                        <img src={posts[0].image_url} alt={posts[0].title} className="highlight-image" />
                        <p className="highlight-body">{`${posts[0].body.split(' ').slice(0, 16).join(' ')}...`}</p>
                        <div className="highlight-info">
                            <p>{`${posts[0].time_read} min - ${posts[0].created_at}`}</p>
                        </div>
                    </div>
                )}
            </div>

            <div className="post-list">
                {posts.slice(1).map(post => (
                    <Link to={`/post/${post.id}`} className="post-link" key={post.id}>
                        <div className="post">
                            <img src={post.image_url} alt={post.title} className="post-image" />
                            <div className="post-details">
                                <h2 className="post-title">{post.title}</h2>
                                <p className="post-body">{`${post.body.split(' ').slice(0, 16).join(' ')}...`}</p>
                                <div className="post-info">
                                    <p>{`${post.time_read} min`}</p>
                                    <p>{post.created_at}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Posts;
