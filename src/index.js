import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/Style/Styles.scss';
import Home from '../src/Pages/Home'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Association from './Pages/Association';
import Team from './Pages/Team';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/association' element={<Association />} />
        <Route path='/team' element={<Team />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
