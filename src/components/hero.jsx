import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../pictures/logo_movie.png';
import search from '../pictures/Search.png';
import ellipse from '../pictures/Ellipse 1.png';
import menu from '../pictures/Menu alt 4.png';
import imbd from '../pictures/imbd.png';
import apple from '../pictures/apple.png';
import play from '../pictures/Play (1).png';

const Hero = () => {
  return (
    <div className="body-bg  h-100 ">
      <div className="container">
          <div className="header justify-content-between pt-4">
              <div className="d-flex flex-row justify-content-around">
                  <img className="logo" src={logo} alt="MovieBox Logo" />
                  <p className=" fs-3">MovieBox</p>
              </div>
              <div className="button"><button type="button" class="btn btn-outline-secondary">What do you want to watch <img src={search} alt="search button" /></button></div>
              <div className="d-flex flex-row justify-content-around">
                <p className="container">Sign In</p>
                <div className="icon ">
                    <img className = "ellip"src = {ellipse} alt="ellipse" />
                    <img className="menu" src = {menu} alt="menu" />
                </div>
              </div>
          </div>
          <div>
          <h3>
              John Wick 3 : <h3>Parabellum</h3>
              </h3>
          </div>
          <div className="d-flex flex-row ">
          <img className="pe-4 imdb" src = {imbd} alt="imbd" />
          <p className="pe-5">86.0 / 100</p>
          <img className="ps-2 h-100"src = {apple} alt="apple" />
          </div>
          <p className="w-25">John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>   
      </div>
      <div className="container" >
      <button className="btn-btn-danger bckg justify-content-center">
           <p className=""> <img className="ps-2"src = {play} alt="play" /> WATCH TRAILER</p>
      </button>
      </div>
    </div>
  );
};

export default Hero;
