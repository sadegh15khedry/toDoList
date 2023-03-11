import React from 'react';
import ReactDOM from 'react-dom/client';


function VerticalNavbarClickHandler(text){
  alert(text);
}

function VerticalNavbarItem(props){
  
    return (
       <li className='nav-item'>
        <a className='nav-link' onClick={() => VerticalNavbarClickHandler(props.text)} href="#">
          {props.text}
        </a>
       </li>
    );
  
}

export default function VerticalNavbar(){
 
  const items = ["Category 1","Category 2","Category 3","Category 4","Category 5",]


    return (


          <ul id='' className='nav flex-column'>
          {
            items.map((item) => <VerticalNavbarItem text={item} /> )
          }

          </ul>

    );
  
}