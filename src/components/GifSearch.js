import React, {useState} from 'react'

function GifSearch({onSubmit}){
    const [searchTerm, setSearchTerm] = useState("")

    function handleChange(event){
        setSearchTerm(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault()
        onSubmit(searchTerm)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div style={{display: "flex", flexDirection: "column", width: "30rem"}}>
                <label htmlFor='gif'>Enter A Search Term</label>
                <input name='gif' type="text" value={searchTerm} onChange={handleChange}/>
                <input type="submit" style={{backgroundColor: "green", color: "white", marginTop: "1rem", padding: "0.7rem", borderRadius: "5px", border: "none", outline: "none", width: "max-content"}} value="Find Gifs"/>
            </div>
        </form>
    )
}


export default GifSearch