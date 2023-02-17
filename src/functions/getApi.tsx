import data from "../data/data.json"

let weather = {
    key: "5b46633ddeefdf7d239c6c38603766ea",
    fetchWeather: function(city:string) {
        return fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=5b46633ddeefdf7d239c6c38603766ea`
        ).then((res) => res.json())
        .then((info) => {
            return(info.main.temp)
        }
        )
        .catch((error) => {
            console.log("nope");
            return("There as been an error")
        })
    }
}

export default weather;