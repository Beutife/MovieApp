import { useEffect, useState } from "react";
import Hero from "../components/hero"
import MovieCard from '../components/MovieCard';
import chevron from '../../src/pictures/Chevron right.png'

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=a7cd20e347b0e4fa05353b86231ba11b";

const Landing = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      fetch(API_URL)
        .then((res) => res.json())
        .then(data => {
          console.log(data);
          setMovies(data.results);
        });
    }, []);
  

    return(
        <>
            <Hero />
            <div className="container">
                <div className='d-flex flex-row justify-content-between m-3'>
                <h2>Features</h2>
                <p>See more <img src={chevron}></img></p>
                </div>
                <div className="grid">
                {movies.map((movie) => (
                    <div key={movie.id} className="col-md-4">
                    <MovieCard
                        id={movie.id}
                        poster_path={movie.poster_path}
                        vote_average={movie.vote_average}
                        release_date={movie.release_date}
                        title={movie.title}
                        overview={movie.overview}
                    />
                    </div>
                ))}
                </div>
            </div>
        </>
    )
}

export default Landing