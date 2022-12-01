import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            {posts.map(post=><Post post={post} key={post.id}></Post>)}
            <h2>Post js. {posts.length} </h2>
            <Link to='holding'>Click here</Link>
        </div>
    );
};

export default Posts;