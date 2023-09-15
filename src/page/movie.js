import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/section.css'
import '../srcipt'
import logo from '../pictures/logo_movie.png';
import home from '../pictures/Home.png'
import movie from '../pictures/Movie Projector.png'
import tv from     '../pictures/TV Show.png'
import upcoming from '../pictures/Calendar.png'
import { useParams } from 'react-router-dom';

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const API_URL = "https://api.themoviedb.org/3/movie/";


const Section = ({ title, poster_path, release_date, overview, id }) => {
  const params = useParams()

  const [loading, setLoading] = useState(true)
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetch(API_URL + params.id + "?api_key=a7cd20e347b0e4fa05353b86231ba11b")
      .then((res) => res.json())
      .then(data => {
        setDetails(data);
      }).finally(() => {
        setLoading(false)
      })
  }, []);

  if(loading){
    return <p>loading</p>
  }



  return (
    <main className="section-head p-4 d-flex flex-md-row">
      <nav className='border p-3 rounded-end'>
      <div className='d-flex '>
          <img className="logo" src={logo} alt="MovieBox Logo" />
            <h3 className='ps-2'>Movie Box</h3>
      </div>
        <div class="section-list list-style-none pe-3 ">
            <ul>
              <li><img className='' src ={home} /><a href="#">Home</a></li>
              <li><img className='icon' src ={movie} /><a href="#">Movie</a></li>
              {/* <li>
                <a
                  href="https://github.com/Beutife/HNG-internship"
                  target="_blank"
                  data-testid="githubURL"
                  id="githubURL"
                >
                  Github URL
                </a>
              </li> */}
              <li><img src ={tv} /><a href="skills.html">TV</a></li>
              <li><img src ={upcoming} /><a href="contact.html">Upcoming</a></li>
            </ul>
        </div>
        <div className='mini-note container border rounded'>
        <p className='w-50'>Play movie quizes <br></br>and earn <br></br>free tickets</p>
        <button class="btn-btn-danger mb-3 p-2 rounded-pill">Start playing</button>
      </div>
      </nav>
      <div className='container'>
        <div>
          <img data-testid="movie-poster" className="card-img-top" src={API_IMG + poster_path} alt="" />
        </div>
       
        <div>
          <p>{id}</p>
          <img src={API_IMG + details.poster_path} />
          <div className='d-flex'>
          <h5>
            Top Gun: Maverick
            •
            2022
            •
            PG-13
            •
            2h 10m
          </h5>
          <div className='d-flex'>
            <p className='pe-5'>Action</p>
            <p>Drama</p>
          </div>
        </div>
          <p data-testid="movie-overview">{details.overview}</p>
          <h2 data-testid="movie-title">{details.title}</h2>
          <p  className = "release-date"> Release Date: 
           <span data-testid="movie-release-date"> {details.release_date}</span> </p>
           <p className="time">
  <span data-testid="movie-runtime">{details.runtime} minutes</span>
</p>

        </div>
      </div>
    </main>
  );
}

export default Section;
