import React from "react";
import facebook from '../pictures/fa-brands_facebook-square (1).png';
import instagram from '../pictures/fa-brands_instagram.png';
import twitter from '../pictures/fa-brands_twitter.png';
import youtube from '../pictures/fa-brands_youtube.png';
import '../styles/footer.css'

const Footer= () =>{
    return(
       <>
       <div className="container icons d-flex mt-5 pt-5">
        <img className="ps-5 pe-5" src ={facebook} alt="facebook" />
        <img className=" pe-5" src ={instagram} alt="instagram" />
        <img className=" pe-5" src ={twitter} alt="twitter" />
        <img className=" pe-5" src ={youtube} alt="youtube" />
       </div>
       <div className="container icons d-flex">
        <p className="pe-5">Conditions of Use</p>
        <p className="pe-5">Privacy & Policy</p>
        <p className="pe-5">Press Room</p>
       </div>
       <div className="container icons d-flex">
        <p>© 2021 MovieBox by Adriana Eka Prayudha  </p>
       </div>
       </>
    )
}

export default Footer;