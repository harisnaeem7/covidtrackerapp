import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
  import Countries from './Components/Countries';
  import About from './Components/About';
  import Home from './Components/Home';

const Routing = () => {
    return(
    <Router>
<Routes> 
    <Route exact path="/" element={<Home/>}/>
    <Route path="/country" element={<Countries/>}/>
    <Route path="/about" element={<About/>}/>
</Routes>
    </Router>)
}
 
export default Routing;