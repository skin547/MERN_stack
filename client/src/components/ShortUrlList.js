import React, { useState, useEffect } from 'react';
import ShortUrl from './ShortUrl.js';
import LoadingIcon from './LoadingIcon';

const UrlList = () => {
	const [shortUrl, setShortUrl] = useState("");
	const [urls, setUrls] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isFail, setIsFail] = useState(false);

	const shortenUrl = () => {
		console.log(shortUrl);

		fetch('api/urls/',{
			method: "POST",
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify( {
				"url": shortUrl
				} )
		})
		.then(res => res.text() )
		.then( text => alert(text) )
		.then( () => FetchData() )
		.catch( err => alert(err) );

		document.getElementById('input_url').value = "";
	}

	const FetchData = () => {
		fetch("api/urls")
		.then(res => res.json())
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
		<div className='container'>
			<h3>Short URL</h3>

			<div className='row'>
				<input className='form-control col-9' type='text' id='input_url' onChange={handleInputChange} placeholder="Shorten Your Link!" required></input>
				<button className='btn btn-primary col ml-1' onClick={shortenUrl}>Shorten</button>
			</div>

			<hr/>
			<div>
				{isLoading ? <LoadingIcon/> : urls.map( (url) => <ShortUrl key={url._id} url={url} update={FetchData}/>) }
				{isFail && <p> Some error occur when connecting to server!</p>}
			</div>

		</div>
  	)
}

export default UrlList;