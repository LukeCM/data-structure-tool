import React from "react";

function Data(props) {

    return(
        <>
            <div className="item-name">Name: <span>{props.name}</span></div>
            <div className="item-cat-desc">Description: <span>{props.description}</span></div>
            <div className="item-cat-desc">Category: <span>{props.category}</span></div>
        </>
    )
}

export default Data;