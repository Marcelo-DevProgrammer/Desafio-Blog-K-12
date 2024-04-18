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

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString('pt-br', { month: 'long' });
        const year = date.getFullYear();
        return `${month}-${day}-${year}`;
    };

    return (
        <div className="posts-container">
            <div className="highlight">
                {posts.length > 0 && (
                    <Link to={`/post/${posts[0].id}`} className="highlight-link">
                        <div className="highlight-post">
                            <h1 className="highlight-title"> {posts[0].title}</h1>
                            <p className='highlight-text'>Aqui você ficará bem informado com nosso blog super top</p>
                            <img src={posts[0].image_url} alt={posts[0].title} className="highlight-image" />
                            <p className="highlight-body">{`${posts[0].body.split(' ').slice(0, 16).join(' ')}...`}</p>
                            <div className="highlight-info">
                                <p className="time-read">
                                    {posts[0].time_read} Mins
                                </p>
                                <div className='post-circle'/>
                                <p className="created-at">{formatDate(posts[0].created_at).replace('-',' ').replace('-', ', ').replace('março', 'Março')}</p>
                            </div>
                        </div>
                    </Link>
                )}
            </div>

            <div className="post-list-post">
                {posts.slice(1).map(post => (
                    <Link to={`/post/${post.id}`} key={post.id} className="post-link">
                        <div className="post">
                            <img src={post.image_url} alt={'Imagem do post'} className="post-image" />
                            <div className="post-details-post">
                                <h2 className="post-title-post">{post.title}</h2>
                                <p className="post-body-post">{`${post.body.split(' ').slice(0, 16).join(' ')}...`}</p>
                                <div className="post-info-post">
                                    <p className="time-read-post">{post.time_read} Mins </p>
                                    <div className="post-circle-post"></div>
                                    <p className="created-at-post"> {formatDate(post.created_at).replace('-',' ').replace('-', ', ').replace('março', 'Março')}</p>
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
