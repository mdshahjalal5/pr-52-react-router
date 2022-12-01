import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Freind from '../Freind/Freind';

const Freinds = () => {
    const freinds = useLoaderData();
    return (
        <div>
            <h2>So many freinds. {freinds.length} </h2>
            {freinds.map((freind, index)=>
                <Freind freind={freind} key={index}></Freind>
            )}
        </div>
    );
};

export default Freinds;