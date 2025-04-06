import React from 'react';

const Photo = ({photo}) => {
    const {title,thumbnailUrl} =photo
    return (
        <div>
            <h5>title: {title}</h5>
            <img src={thumbnailUrl} alt="" />
        </div>
    );
};

export default Photo;