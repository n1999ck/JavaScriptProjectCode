import React from "react";
import axios from "axios";

function NextPiece(props) {
    return (
        <button onClick={props.action}>Next Piece</button>
    )
}

export default NextPiece;