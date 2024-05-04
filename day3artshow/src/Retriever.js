import axios, { all } from "axios";
import { useEffect, useState } from "react";
import Display from "./Display";

function Retriever(props) {
    const [artPiece, setArtPiece] = useState({});
    useEffect(() => {        
    }, []);
   
    function getArtList() {
    const query = "cat";
    const searchUrl = `https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=${query}`;
        try {
            axios.get(searchUrl).then((response) => {
                console.log(response.data);
                getRandomArt(response.data);
            });
        } catch (error) {
            console.log(error);
        }
    }

    function getRandomArt(data) {
        const n = Math.floor(Math.random() * data.total);
        const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${data.objectIDs[n]}`;
        try {
            axios.get(url).then((response) => {
                if (response.data.primaryImage !== "") {
                    setArtPiece(response.data);
                }
            });
        } catch (error) {
            console.log(error);
        }
    
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-8">
                    <Display art={artPiece} />
                </div>
                <div className="col-4">
                    <button onClick={() => getArtList()}>Next Piece</button>
                </div>
            </div>
        </div>
    );
}

export default Retriever