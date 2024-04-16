import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3031/posts')
            .then(response => response.json())
            .then(data => setPosts(data));
    }, []);

    return (
        <div className="posts-container">
            {/* Destaque do primeiro post */}
            {posts.length > 0 && (
                <div className="highlighted-post">
                    <Link to={`/post/${posts[0].id}`} className="post-link">
                        <h1>{posts[0].title}</h1>
                        <p>Aqui você ficará bem informado com nosso blog super top</p>
                    </Link>
                </div>
            )}
            {/* Outros posts */}
            <div className="other-posts">
                {posts.slice(1).map(post => (
                    <div key={post.id} className="post">
                        <Link to={`/post/${post.id}`} className="post-link">
                            <h2>{post.title}</h2>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Posts;
