import React from "react";
import Api from "../helper/api";
import {useState, useEffect} from 'react';
import DataList from "./DataList";
import { TextField } from "@mui/material";


function Datastructure() {
    const api = new Api();
    let [items, setItems] = useState(null);
    let [searchWord, setSearchWord] = useState('');

    useEffect(() => {
        api.getItemsList()
        .then((result) => {
            if (result !== null && result.data !== null) {
                setItems(result?.data?.entries)
           }
        })
        .catch((err) => console.log(err));

        // Unmount of useEffect, clean up state
        return () => {
            setItems({});
        }
    },[]);

    const search = (input) => {
        setSearchWord(input.target.value.toLowerCase());
    }

    return(
        <>
            <div className="data-structure-wrapper">
                <h3>Datastructure searchbar:</h3>
                <div className="search-bar">
                    <TextField
                        onChange={search}
                        label="Search"
                    />
                </div>
                <div className="item-list">
                    <DataList
                        items={items}
                        input={searchWord}
                    />
                </div>
            </div>
        </>
    )
}

export default Datastructure;