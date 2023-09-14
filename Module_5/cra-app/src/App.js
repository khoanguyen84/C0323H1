import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import CountAppJS from './components/CountAppJS';
import CountAppUseState from './components/CountAppUseState';
import TwoWayBindingJS from './components/TwoWayBindingJS';
import TwoWayBindingReact from './components/TwoWayBindingReact';
import TwoWayBindingReact_2 from './components/TwoWayBindingReact_2';
import TodoApp from './components/TodoApp';


function App() {
  return (
    <div className='container'>
        {/* <CountAppJS/>
        <CountAppUseState/> */}
        {/* <TwoWayBindingReact_2/> */}
        <TodoApp/>
    </div>
  );
}

export default App;
