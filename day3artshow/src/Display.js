import axios from "axios";
import {useState} from "react";

function Display(props) {
    const [image, setImage] = useState(null)
    const [searchUrl, setSearchUrl] = useState(null)
    const [artIdList, setArtIdList] = useState([])

    function getArtList(query) {
        setSearchUrl(`https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=${query}`)
        try {
            axios.get(searchUrl)
            .then((response) => {
            setArtIdList(response.data.objectIDs)
            const randomArtURL = getRandomArtURL(response.data)
            getArtPiece(randomArtURL)
        });
        } catch (error) {
            console.log(error)
        }
    }

    function getRandomArtURL() {
        var n = Math.floor(Math.random() * artIdList.total)
        console.log(n)
        console.log(artIdList.objectIDs[n])
        return `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artIdList.objectIDs[n]}`
    }

    function getArtPiece(randomArtURL) {
        if (artIdList.length === 0) {
            getArtList("dog");
            getRandomArtURL();
        } else {
            getRandomArtURL();
        }
        try {
            axios.get(randomArtURL)
            .then((response) => {
            console.log(response.data)
            setImage(response.data.primaryImage)
        });
        } catch (error) {
            console.log(error)
        }
    }    

  return (
    <div className="container">
    <img src={image} alt="art" className="img-fluid h-50 d-inline-block"/>
    <p></p>
    <button onClick={() => getArtPiece("dog")}>Next Piece</button>
    </div>
  );
}

export default Display;
