import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css'
const Post = ({post}) => {
    const {id, title, body} = post;
    return (
        <div className='post'>
            <h2>Title: {title} </h2>
            <p><strong>{body} </strong> </p>
            <p><b>Author: <Link to={`/post/${id}`}>{id} </Link> </b></p>
        </div>
    );
};

export default Post;