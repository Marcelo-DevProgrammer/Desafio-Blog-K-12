import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3031/posts/${id}`)
            .then(response => response.json())
            .then(data => setPost(data));
        
        fetch(`http://localhost:3031/comments?post_id=${id}`)
            .then(response => response.json())
            .then(data => setComments(data));
    }, [id]);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div className="post-detail">
            <h2>{post.title}</h2>
            <img src={post.image_url} alt={post.title} />
            <p>{post.body}</p>
            <p>{post.created_at}</p>
            <p>{post.time_read} min read</p>
            
            <h3>Comments:</h3>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        <p>{comment.body}</p>
                        <p>By: {comment.author}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PostDetail;
