import React from 'react';
import './App.css';
import { useState, useEffect} from 'react'
import axios from 'axios';
import MovieCard from './Component/MovieCard';

//6a659cdf
// const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=6a659cdf';


// const API_URL = 'http://www.omdbapi.com?apikey=6a659cdf';
const API_URL = 'http://www.omdbapi.com?apikey=6a659cdf'

// const movie2 = 
//   {
//     "Title": "Italian Spiderman",
//     "Year": "2007",
//     "imdbID": "tt2705436",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BYWNiMmNlNmQtZTI2MS00MzAxLTgxM2QtNDY3ZGQxNDMwZDgzXkEyXkFqcGc@._V1_SX300.jpg"
// }



function App(){
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  const fetchTodos = async (title) => {
    const response = await axios.get(`${API_URL}&s=${title}`);
    setMovies(response.data.Search);
    console.log(response.data.Search);
  };

  useEffect(() => {
    fetchTodos()
  }, [])


  return (
    <div className='app'>

      <h1>Movie Land</h1>
      <div className='search'>
        <input placeholder='Search for movies...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />

        <button 
          onClick={() => fetchTodos(search)}
          style={{fontSize: "20px", textDecorationColor: 'Blue', color:"black", backgroundColor:  "#e2bd17ff", cursor: "pointer", borderRadius: "8px",fontFamily: "monospace"
          }}>
          Search
        </button>
      </div>

      <div>
        {
        movies?.length > 0 ? 
        (
          <div className='container'>{
            movies.map((movie) => (
              <MovieCard movie={movie}/>
            ))}
          </div>
        ) : (
          <div>
            <div className='empty'></div>
            <h2> No Movies Found </h2>
          </div>
            )
        }
      </div>
      
        

    </div>
  )
}

export default App;
