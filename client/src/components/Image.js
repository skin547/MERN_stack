import React, { useState, useEffect } from 'react';

const Image = ({imgUrl, update}) => {
    const [src, setSrc] = useState();

    useEffect( () => {
        setSrc( "api/images/" + imgUrl );
        update();
    }, []);
    
    return(
        <div>
            <img src={ src } loading="lazy" class="img-thumbnail" alt="Responsive" />
            <hr/>
        </div>
    )
}

export default Image;
