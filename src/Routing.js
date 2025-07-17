import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
  import Countries from './Components/Countries';
  import About from './Components/About';
  import MainPage from './MainPage';

const Routing = () => {
    return(
    <Router>
<Routes> 
    <Route exact path="/" element={<MainPage/>}/>
    <Route path="/country" element={<Countries/>}/>
    <Route path="/about" element={<About/>}/>
</Routes>
    </Router>)
}
 
export default Routing;