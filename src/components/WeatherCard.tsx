import SearchBar from "./SearchBar";
import React, { useState } from 'react';
import "./WeatherCard.scss";

const WeatherCard = () => {

    const [data, refreshData] = useState<any>([]);


    return(
        <div className="WeatherCard">
            <SearchBar data = {data} refreshData = {refreshData} />
            <div className="content">
                <div>
                    <h1>
                        Wheater in {data.main? data.name : "no city"}
                    </h1>
                </div>
                <div>
                    <p className="temp">{data.main? Math.round(data.main.temp) : ""} °C</p>
                </div>
                <div>
                    <p className="fell">Feels like {data.main? Math.round(data.main.feels_like) : ""} °C</p>
                </div>
                <div className="icon">
                    <div className={data.main? data.weather[0].main : ""}></div>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard;