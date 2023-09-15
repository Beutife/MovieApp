import { Modal } from "react-bootstrap";
import React from "react";
import imbd from '../pictures/imbd.png';
import apple from '../pictures/apple.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
const API_IMG="https://image.tmdb.org/t/p/w500/";
const MovieCard =({id, title, poster_path, vote_average,release_date, overview})=>{
    return(
    <><Link to={`/movies/${id}`} className="card text-center" data-testid="movie-card">
        <div className="card style ">
          <img className="card-img-top" src={API_IMG+poster_path} />
          <div className="">
            <div>
            <h5 data-testid="movie-title">{title}</h5>
            <p data-testid="movie-release-date">Release Date: {release_date}</p>
              <div className="d-flex flex-row ms-0 ">
          <img className="ps-0 pe-1 imdb" src = {imbd} alt="imbd" />
          <p className="pe-2">86.0/100</p>
          <img className="ps-1 h-100"src = {apple} alt="apple" />
          </div>
            </div>
            {/* <button type="button" className="btn btn-dark">View more</button> */}
            {/* <Modal>
                <Modal.Header closeButton>
                    <Modal.Title> </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <img className="card-img-top" src={API_IMG+poster_path} />
                </Modal.Body>
            </Modal> */}
          </div>
        </div>
        {/* <h2 data-testid="movie-title">{title}</h2> */}
        {/* <img src={API_IMG+poster_path} alt={`Movie Poster for ${title}`} data-testid="movie-poster"></img> */}
        {/* <p data-testid="movie-release-date">Release Date: {release_date}</p> */}
        {/* <p>{overview}</p> */}
    </Link> 


     </>
    
    )
}

export default MovieCard;