let weather = {
    key: "5b46633ddeefdf7d239c6c38603766ea",
    fetchWeather: function(city:string) {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=5b46633ddeefdf7d239c6c38603766ea`
        ).then((res) => res.json())
        .then((data) => console.log(data.main.temp))
        .catch((error) => {
            console.log("nope");
            throw(error);
        })
    }
}

export default weather;