import React from "react"
import {Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home"
import Projects from "./components/Projects"
import Skills from "./components/Skills"


/*toggle dark mode btn*/ 
function App(){
    
    return (
            <Router>
                <ul className="nav-list" >
                    <li className="list-item home">
                        <Link to="/" >Home</Link>
                    </li>
                    <li className="list-item skills">
                        <Link to="/skills" >Skills</Link>
                    </li>
                    <li className="list-item projects">
                        <Link to="/projects" >Projects</Link>
                    </li>
                </ul>
                
               
           
            <Routes>
                
                <Route exact path="/" element={<Home />} /> 
               
                <Route path="/skills" element={<Skills/>} />
                
                <Route path="/projects" element={<Projects />} />
                
            </Routes>
         </Router>
    )
} 
  
export default App
