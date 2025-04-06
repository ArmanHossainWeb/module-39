import React from 'react';

const User = ({user}) => {

    const {name,phone,username,website}= user;

    return (
        <div className='card'>
            <h4>Name: {name}</h4>
            <p>Phone: {phone}</p>
            <p>username: {username}</p>
            <p>website: {website}</p>
        </div>
    );
};

export default User;