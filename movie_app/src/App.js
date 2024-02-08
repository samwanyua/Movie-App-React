import { useEffect, useState } from 'react';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';
// 17533011
// http://www.omdbapi.com/?i=tt3896198&apikey=17533011

const API_URL = 'https://www.omdbapi.com?apikey=17533011'

const movie1 = {
  "Title": "Italian Spiderman",
  "Year": "2007",
  "imdbID": "tt2705436",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
}

function App() {
  const [movies, setMovies] = useState([])
  
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    setMovies(data.Search)

  }

  useEffect(() => {
    searchMovies('Batman')
  },[])
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input 
          type="text"
          placeholder='Search for movies'
          value="Superman"
          onChange={() =>{} }
        />
        <img 
          src={SearchIcon} 
          alt= "search"
          onClick={() => {}}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map(movie => (
            <MovieCard movie={movie}/>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
      
    </div>
  );
}

export default App;
