import React from 'react';
import './App.css';
import Home from './Components/Home';
import AfterLoginHome from './Components/AfterLoginHome';
import {BrowserRouter as Router ,Routes  ,Route} from "react-router-dom";

function App() {
  return (
   
    <Router>

    <Routes>
      <Route  path="/" element={<Home/>}/>
     <Route  path="/auth/feed" element={ <AfterLoginHome/>}/>
  
      
    </Routes>
  
  </Router>
  );
}

export default App;
