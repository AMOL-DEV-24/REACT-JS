import { useEffect, useState } from 'react'

export default function Moviespot() {
    const [movies, setMovies] = useState([]); // State to hold movies
    const [loading, setLoading] = useState(true); // State to handle loading
  
    // Fetch movies using Promises

    //* First The setLoading true is show Loading....
    //* Then the after fectching api in the finally block define setLoading(false)
    //* If setLoading is false then the <ul> will be executed.
    useEffect(() => {
        setTimeout(()=>{
            setLoading(true); // Show loading spinner
            fetch("https://dummyapi.online/api/movies")
              .then((response) => {
                if (!response.ok) {
                  throw new Error("Failed to fetch movies");
                }
                return response.json();
              })
              .then((data) => {
                setMovies(data); // Update movie state
              })
              .catch((error) => {
                console.error("Error fetching movies:", error);
              })
              .finally(() => {
                setLoading(false); // Hide loading spinner
              });
        },4000)
    }, []);

    console.log(movies);
    
  
    return (
      <div style={{ padding: "20px" }}>
        <h1>Movie List</h1>
{/*   
        //* First The setLoading true is show Loading....
    //* Then the after fectching api in the finally block define setLoading(false)
    //* If setLoading is false then the <ul> will be executed. */}
        {loading ? (
          <p>Loading...</p> // Show loading indicator
        ) : (
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                <h2>{movie.movie}</h2>
                <p>{movie.image}</p>
                <p>{movie.imdb_url}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  