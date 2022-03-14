import React from "react";
import Api from "../helper/api";
import {useState, useEffect} from 'react';


function Datastructure() {
    const api = new Api();
    let [items, setItems] = useState(null);

    useEffect(() => {
        api.getItemsList()
        .then((data) => setItems(data))
        .catch((err) => console.log(err));
    });

    console.log(items);

    return(
        <div className="data-structure-wrapper">Datastructure Wrapper</div>
    )
}

export default Datastructure;