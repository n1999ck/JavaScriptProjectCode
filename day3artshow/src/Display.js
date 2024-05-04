import axios from "axios";
import { useEffect, useState } from "react";

function Display(props) {
    console.log(props)

    return (
        <div className="container vh-100">
            <img src={props.art.primaryImage} alt="art" className="img-fluid h-75 d-inline-block" />
            <div>
                <p>Artist: {props.art.artistDisplayName}</p>
                <p>Title: {props.art.title}</p>
                <p>Date: {props.art.objectDate}</p>
                <p>Medium: {props.art.medium}</p>
            </div>
        </div>
    );
}

export default Display;