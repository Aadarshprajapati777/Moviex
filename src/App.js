import { useEffect } from "react";

const API_URL='http://www.omdbapi.com/?apikey=1856286e';
const App=()=>{
 const searchmovies=async(title)=>{
    const response= await fetch(`${API_URL}&s={title}`);
    const data= await response.json();
    console.log(data.Search);
 }

 useEffect(()=>{
searchmovies('Spiderman')
 },[])


    return(
        <div>
            <h1>My First React App</h1>
        </div>   
    );
}
export default App;