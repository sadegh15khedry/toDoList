
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import MyHeader from'./MyHeader';

function NavbarItem(props){
  
    return (
       <li className='nav-item'>
        <a className='nav-link' href="#">
          {props.text}
        </a>
       </li>
    );
  
}

function VerticalNavbar(){
 
  const items = ["Home", "Exit"]


    return (
      <nav class="navbar navbar-expand-sm bg-light">

        <div class="container-fluid">
          <ul className='navbar-nav'>
          {
            items.map((item) => <NavbarItem text={item} /> )
          }

          </ul>
        </div>
       </nav>
    );
  
} 

function App() {

  return (
    <div className="App">
        <MyHeader />
       <VerticalNavbar  />
    </div>
  );
}

export default App;
