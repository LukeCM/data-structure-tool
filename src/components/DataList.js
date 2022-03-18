import React from "react";
import Data from "./Data";

function DataList(props) {

    const filteredItems = props?.items?.filter((item) => {
        if(props.item === '') {
            return item;
        } else {
            return item.API.toLowerCase().includes(props.input)
        }
    })

    console.log('filteredItems ', filteredItems);

    return(
        <>
            {filteredItems?.map((item, key) => {
                return(
                    <div key={key} className="item-list-element">
                        <Data
                            name={item.API}
                            description={item.Description}
                            category={item.Category} 
                        />
                    </div>
                )
            })}
        </>
    );

};

export default DataList;