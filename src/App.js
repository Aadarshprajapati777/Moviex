
import { useEffect, useState} from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

const API_URL='http://www.omdbapi.com/?apikey=1856286e';
   




const App=()=>{
    const[movies,setmovies]=useState([])
    const[searchTerm, setsearchTerm]=useState("");



 useEffect(()=>{
 searchmovies('dhoom')
 },[]);
 


 const searchmovies=async(title)=>{
    const response= await fetch(`${API_URL}&s=${title}`);
    const data= await response.json();
    setmovies(data.Search);
 }

    return(
        <div className="app">
            <h1>MovieX</h1>
             
              <div className="search">
                <input
                placeholder="Search for movie"
                value={searchTerm}
                onChange={(e)=>setsearchTerm(e.target.value)}
                />
               <img
                    src={SearchIcon}
                     alt="search"
                    onClick={() => searchmovies(searchTerm)}
                />
              </div>
              {
                    movies?.length>0 ? (
                    <div className="container">
                        {movies.map((movie)=>(
                            <MovieCard movie={movie}/>
                        ))}
                    </div>
                    ) :(
                    <div className="empty">
                        <h2>Movie not found</h2>
                    </div>
                     ) }

        </div>   
    );
}
export default App;