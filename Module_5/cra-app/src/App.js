import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import CountAppJS from './components/CountAppJS';
import CountAppUseState from './components/CountAppUseState';


function App() {
  return (
    <div className='container'>
        <CountAppJS/>
        <CountAppUseState/>
    </div>
  );
}

export default App;
