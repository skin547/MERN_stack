import React, {useState, useEffect} from 'react';


const UploadImageForm = () => {
  const [imgUrl,setImgUrl] = useState();

  const handleChange = (event) => {
    try{
      	const reader = new FileReader();
      	reader.readAsDataURL(event.target.files[0]);
      	reader.onloadend = function (e) {
          setImgUrl(reader.result);
      	};
    }catch( error ){
    	alert("your need to select image to upload");
    }
  }
  
    return (
        <div>
          <label className="form-check-label">Select image:</label>

          <input className='form-control-file' type="file" id="img" name="img" accept="image/*" onChange={handleChange}/>
          
          <img src={imgUrl} alt={""}/>
        </div>
    )
}

export default UploadImageForm;