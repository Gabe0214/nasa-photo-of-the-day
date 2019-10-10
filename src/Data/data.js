import React, {useState, useEffect} from "react"
import axios from "axios"
import CardInfo from "../cardComponent/card"

export default function Data () {
    const [imgDescripton, setImageDescription] = useState([]);
    const [getData, setData] = useState([])
    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=Atf5ZPuYT5xDhd9Kw9Fi6p7cXIwqLMwKuMSHzzf7')
     .then(response => {
        console.log(response); 
        setImageDescription(response.data.explanation);
        setData(response.data); 
    })
    .catch(error => {
        console.log("error in the data", error);
    })
    }, [])
    return (
        <div>
            <CardInfo image = {getData.hdurl} copyright = {getData.copyright} title = {getData.title} description = {imgDescripton}/>
        </div>
    )
}
