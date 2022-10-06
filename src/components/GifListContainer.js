import React, {useState} from 'react'
import GifSearch from './GifSearch'
import GifList from './GifList'


function GifListContainer(){
    const [gifs, setGifs] = useState([])

    function onSubmit(searchTerm){
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=2hQYYIgvqChTNBM0royAyyt5E86ZOE29&rating=g`)
            .then(result => result.json())
            .then(data => {
                const gifsPick = []
                for(let i = 0; i < 3; i++){
                    gifsPick.push(data.data[i].images.original.url)
                }
                setGifs(gifsPick)
            })
    }

    return (
        <div style={{display: "flex", justifyContent: "space-between", width: "60vw", margin: "auto"}}>
            <GifList gifUrls={gifs}/>
            <GifSearch onSubmit={onSubmit}/>
        </div>
    )
}
export default GifListContainer