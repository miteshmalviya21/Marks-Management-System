import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
//import './App.css';
import Registration from './Registration';
import Evaluation from './Evaluation';


function App() {
  return (
    <Router>
           <div className="App">
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/contact' element={< Contact />}></Route>
                 <Route exact path='/login' element={< Login />}></Route>
                 <Route exact path='/registration' element={< Registration />}></Route>
                 <Route exact path='/evaluation' element={< Evaluation />}></Route>


          </Routes>
          </div>
       </Router>
  );
}

export default App;
