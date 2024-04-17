import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PostDetail.css';

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
            <h2 className='post-title'>{post.title}</h2>
            <div className="post-info">
                <p className='post-read-time'>{post.time_read} min  {post.created_at}</p>
            </div>
            <img src={post.image_url} alt={post.title} />
            <p className="post-body">{post.body}</p>
            <div className="comments">
                <h3 className="comments-title">Comentários</h3>
                <div className="comments-container">
                    {comments.map(comment => (
                        <div key={comment.id} className="comment">
                            <img src={comment.avatar} alt="Avatar" className="avatar" />
                            <div className="comment-info">
                                <p className="user-info">User: {comment.username.replace(/@gmail.com/g, '')} | {comment.email}</p>
                                <p className="message">{comment.comment}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PostDetail;
