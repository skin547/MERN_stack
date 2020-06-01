import React, { useState, useEffect } from 'react';
import ShortUrl from './ShortUrl.js';

const UrlList = () => {
  const [shortUrl, setShortUrl] = useState("");
  const [urlResult,setUrlResult] = useState("");
  const [urls, setUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFail, setIsFail] = useState(false);


  const convertShortUrl = () => {
    console.log(shortUrl);

    fetch('http://localhost:8000/urls/',
      {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "url": shortUrl
        })
      })
      .then(res => console.log(res))
      .then( () => FetchData() )
      .catch(err => console.log(err));

    document.getElementById('input_url').value = "";
  }

  const FetchData = () => {
    fetch("http://localhost:8000/urls")
      .then(res => res.json())
      // .then(res => res.data )
      .then(res => {
        setUrls(res);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
        setIsFail(true);
      });
  }


  const handleInputChange = (event) => {
    setShortUrl(event.target.value);
  }

  useEffect(() => {
    FetchData();
  }, [])



  return (
    <div>
      <h3>shorten your url</h3>
      <input className='form-control' type='text' id='input_url' onChange={handleInputChange} required></input>
      <p></p>

      <button className='btn btn-primary' onClick={convertShortUrl}>convert</button>
      <hr/>
      {isLoading ? <p>Loading...</p> : urls.map((url) => <ShortUrl key={url._id} url={url} update={FetchData}/>)}
      {isFail && <p> Some error occur when connecting to server!</p>}

    </div>
  )
}

export default UrlList;