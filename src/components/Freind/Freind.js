import React from 'react';
import { Link } from 'react-router-dom';
import './Freind.css'
const Freind = ({freind}) => {
    console.log(freind);
    const {id, name, username, email} = freind;
    return (
        <div className='freind'>
            <h2>Name: {name} </h2>
            <p>Email: {email} </p>
            <p>Username: <Link to={`/freind/${id}`}><b>{username} </b></Link> </p>
        </div>
    );
};

export default Freind;