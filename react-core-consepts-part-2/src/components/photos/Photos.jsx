import React, { use } from 'react';
import Photo from '../photo/Photo';

const Photos = ({fetchPhotos}) => {
    const photos = use(fetchPhotos)
    return (
        <div>
            <h1>photos:  {photos.length}</h1>
            {
                photos.map(photo => <Photo key={photo.id} photo={photo} ></Photo>)
            }
        </div>
    );
};

export default Photos;