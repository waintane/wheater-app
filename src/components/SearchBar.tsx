import getApi from "../functions/getApi";
import "./SearchBar.scss";

interface IPROPS{
    data: any,
    refreshData: Function,
}

const SearchBar = ({data, refreshData}:IPROPS) => {

    function search(){
        const city:any = document.querySelector("#search");
        if(city.value){
            getApi.fetchWeather(city.value)
            .then((res) => {
                    refreshData(res);
                    return(
                        <div> {res} </div>
                    )
                }
            )
        }
    }
    return(
        <div className="SearchBar">
            <form onSubmit={(event) => event.preventDefault()}>
                <input id="search" type="search" placeholder="Search city"/>
                <button type="submit" onClick={() => search()}><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" color="#000"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg></button>
            </form>
        </div>
    )
}

export default SearchBar;