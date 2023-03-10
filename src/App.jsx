
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import MyHeader from'./MyHeader';
import HorizontalNavbar from "./HorizontalNavbar"
import VerticalNavbar from "./VerticalNavbar"

function App() {

  return (
    <div className="Container-fluid">
      <div className='row'>
        <div className='col-sm-12'>
          <MyHeader />
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-12'>
          <HorizontalNavbar  />
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-2'>
          <VerticalNavbar />
        </div>
        <div className='col-sm-10'>
          
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
