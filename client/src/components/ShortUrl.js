import React from 'react';

const ShortUrl = ({url, update}) =>{

    const removeUrl = () => {
        fetch("http://localhost:8000/urls/"+url._id, {
            method:"delete"
        })
        .then( res => console.log(res) )
        .then( () => update() )
        .catch( err => console.log(err) );
    }
    
    const showUrlItem = () => {
        console.log(url);
    }

    return (
        <div>
            <h4>
                <a href={"http://localhost:8000/urls/"+url.shortId}>{"/urls/"+url.shortId}</a>
                <button className='btn btn-primary' onClick={showUrlItem} style={{marginLeft:"5px"}}> Info </button>
                <button className='btn btn-danger' onClick={removeUrl} style={{marginLeft:"5px"}} > X </button>
            </h4>
            <hr/>
        </div>
    )
}

export default ShortUrl;