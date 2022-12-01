import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './FreindDetails.css'
const FreindDetails = () => {
    const details = useLoaderData();
    const { phone, website, name, email, username } = details;
    return (
        <div className='freind-details'>
            <h2>Name: {name} </h2>
            <p>Phone: <b>{phone} </b> </p>
            <p>Email: <strong>{email} </strong> </p>
            <p>Username: <Link to='any'>{username} </Link> </p>
            <strong>Website:{website}  </strong>
        </div>
    );
};

export default FreindDetails;