import React from 'react';
import ReactDOM from 'react-dom/client';


function HorizontalNavbarClickHandler(text){
  alert(text);
}

function NavbarItem(props){
  
    return (
       <li className='nav-item'>
        <a className='nav-link' onClick={() => HorizontalNavbarClickHandler(props.text)} href="#">
          {props.text}
        </a>
       </li>
    );
  
}

export default function HorizontalNavbar(){
 
  const items = ["Home","Login","SignUp","Contact Us ","About", "Blog","Exit"]


    return (
      <nav class="navbar navbar-expand-sm bg-light justify-content-center">

          <ul className='navbar-nav'>
          {
            items.map((item) => <NavbarItem text={item} /> )
          }

          </ul>
       </nav>
    );
  
} 
