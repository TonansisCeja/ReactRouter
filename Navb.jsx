import { Routes, Route, Link } from "react-router-dom";
import Blue from "./Blue.jsx";
import Red from ".Red.jsx";
import Yellow from './Yellow.jsx';
import Purple from './Purple.jsx';
import Home from './Home.jsx';


export default function Navb(){
    return(
        <>
              <div id="container">
             <div id="navbar">
                 <Link to="/Blue">blue</Link>
                 <Link to="/Red">red</Link>
                 <Link to="/Yellow">yellow</Link>
                 <Link to ="/Purple">purple</Link>
                 <Link to="/">Home</Link>
            </div>

         
      </div>
        </>
    )
}