
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

function shoot(){
  alert("shoot");
}
class MyHeader extends React.Component{
  render(){
    return(
    <img src="images/header.jpg" alt='header image' id="header" onClick={shoot}/>
    )
  }
}

class CartItem extends React.Component{
  
  render(){
    return(
      <h3>
        this is a CartItem
      </h3>
    )
  }
}

class Cart extends React.Component{
  constructor(props){
    super(props)
    this.state={
      Id : 1,
      sumtotal: "0",
      date : "1401/12/16"
    }
  }

  render(){
    return(
    <h2>
      this is a cart and total is  { this.state.sumtotal }
    </h2>
    );
  }
}



function App() {

  return (
    <div className="App">
        <MyHeader />
        <Cart />
    </div>
  );
}

export default App;
