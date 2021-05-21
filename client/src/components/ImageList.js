import React, { useState, useEffect } from 'react';
import Image from './Image.js';
import LoadingIcon from './LoadingIcon';
import UploadImageForm from './UploadImageForm';

const ImageList = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFail, setIsFail] = useState(false);

  const FetchData = () => {
    fetch("api/images")
      .then( res => res.json() )
      .then( res => {
        setImages( res );
        console.log( res[1] );
        setIsLoading( false );
      } )
      .catch( error => {
        console.log( error );
        setIsLoading( false );
        setIsFail( true );
      } ) ;
  }

  useEffect(() => {
    FetchData();
  }, [])

  return (
    <div>
      <UploadImageForm update={FetchData} />
      {isLoading ? <LoadingIcon/> : images.map((image) => <Image key={image._id} imgUrl={image.shortId} update={FetchData}/>)}
      {isFail && <p> something wrong when connecting to server!</p>}

    </div>
  )
}

export default ImageList;