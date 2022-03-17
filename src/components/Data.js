import React from "react";

function Data(props) {

    return(
        <>
            <div className="item-wrapper">
                <div className="item-name-wrapper">Name: <span className="item-name">{props.name}</span></div>
                <div className="item-description-wrapper">Description: <span className="item-description">{props.description}</span></div>
                <div className="item-category-wrapper">Category: <span className="item-category">{props.category}</span></div>
            </div>
        </>
    )
}

export default Data;