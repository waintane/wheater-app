import getApi from "../functions/getApi";
import React, { useState } from 'react';


const SearchBar = () => {

    const [data, refreshData] = useState();

    function search(){
        const city:any = document.querySelector("#search");
        if(city.value){
            console.log(city.value.toString());
            getApi.fetchWeather(city.value)
            .then((res) => {
                    refreshData(prev => res);
                }
            )
        }else{
            console.log("value null");
        }
    }

    return(
        <div className="SearchBar">
            <input id="search" type="search"/>
            <button onClick={() => search()}>re</button>

            <div> {data} </div>
        </div>
    )
}

export default SearchBar;