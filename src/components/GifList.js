import React from 'react'
import {v4 as uuid} from 'uuid'

function GifList({gifUrls}){

    const gifImages = gifUrls.map(gifUrl => <li key={uuid()} ><img src={gifUrl} alt="gif"/></li>)

    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <ul>
                {gifImages}
            </ul>
        </div>
    )
}

export default GifList
