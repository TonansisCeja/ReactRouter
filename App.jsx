import Blue from './components/Blue.jsx';
import Red from './components/Red.jsx';
import Yellow from './components/Yellow.jsx';
import Purple from './components/Purple.jsx';
import Home from './components/Home.jsx';

import { Routes, Route, Link } from "react-router-dom";

import './App.css'


function App() {

  return (
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




      <div id="main-section">
                   <Routes>
                         
                         <Route path="/Blue" element={<Blue/>}/>
                         <Route path="/Yellow" element={<Yellow/>} />
                         <Route path="/Purple" element={<Purple/>} />
                         <Route path="/Red" element={<Red/>}/>
                         <Route path="/" element={<Home/>} />
                         
                  </Routes>
        </div>
<footer >
  <br></br>
  <br></br>
  <br></br>
     <hr></hr>
          <Link to="/Blue">    blue      </Link>
          <Link to="/Red">      red      </Link>
          <Link to="/Yellow">      yellow     </Link>
          <Link to ="/Purple">      purple     </Link>
          <Link to="/">Home</Link> 
    <hr></hr>
</footer>

      
  </>
  )
}


export default App
