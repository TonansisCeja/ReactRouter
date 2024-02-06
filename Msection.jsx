import Blue from './components/Blue.jsx';
import Red from './components/Red.jsx';
import Yellow from './components/Yellow.jsx';
import Purple from './components/Purple.jsx';
import Home from './components/Home.jsx';

import { Routes, Route, Link } from "react-router-dom";


export default function Msection(){
    return(
        <>
                <div id="main-section">
                   <Routes>
                         
                         <Route path="/Blue" element={<Blue/>}/>
                         <Route path="/Yellow" element={<Yellow/>} />
                         <Route path="/Purple" element={<Purple/>} />
                         <Route path="/Red" element={<Red/>}/>
                         <Route path="/" element={<Home/>} />
                         
                    </Routes>
                </div>
        </>
        
        )
    } 