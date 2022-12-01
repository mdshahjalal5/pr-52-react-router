import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import './PostDetails.css';
const PostDetails = () => {
    const details = useLoaderData();
    const navigate = useNavigate();
    const handleNavigate =() =>{
        navigate(`/freind/${id}`)
    }
    const {id, title, body} = details;
    return (
        <div className='post-details'>
            <h2>{title} </h2>
            <p>{body} </p>
            <button onClick={handleNavigate}>See more</button>
        </div>
    );
};

export default PostDetails;