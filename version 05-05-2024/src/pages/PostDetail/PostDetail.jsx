import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PostDetail.css';

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3031/posts/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch post details');
                }
                return response.json();
            })
            .then(data => {
                setPost(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching post details:', error);
                setError('Failed to fetch post details');
                setLoading(false);
            });
        
        fetch(`http://localhost:3031/comments?post_id=${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch comments');
                }
                return response.json();
            })
            .then(data => setComments(data))
            .catch(error => console.error('Error fetching comments:', error));
    }, [id]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR', { month: 'long' , day: 'numeric', year: 'numeric' });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!post) {
        return <div>Post not found.</div>;
    }

    return (
        <div>
            <div className='post-postdetail'>
                <div className="post-detail">
                    <h2 className="post-title">{post.title}</h2>
                    <div className="highlight-info">
                        <p className="time-read">{post.time_read} Mins</p>
                        <div className='post-circle'/>
                        <p className="created-at">{formatDate(post.created_at).replace(' de ',' ').replace(' de ',', ').replace('março', 'Março')}</p>
                    </div>
                    <img className="post-image" src={post.image_url} alt={post.title} />
                    <p className="post-body">{post.body}</p>
                    <h3 className="comments-title">Comments:</h3>
                </div>
            </div>
            <div className="comments-container">
                {comments.map(comment => (
                    <div className="comment" key={comment.id}>
                        <img className="avatar" src={comment.avatar} alt={comment.username} />
                        <div className="comment-info">
                            <p className="user-info"><span className='highligth-comment'>User: </span>{comment.username.split('@')[0]} | {comment.username}</p>
                            <p className="message"><span className='highligth-comment'>Menssage: </span>{comment.comment}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PostDetail;
