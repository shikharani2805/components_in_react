
import React, {Component} from "react"
import logo from './logo.svg'; 
import './App.css';
import ReactDOM from 'react-dom';

//Merging Components
class App extends React.Component{
  render()
  {
    return (
      <section>
      <Header />
      <Navbar />
      <Body />
      <Footer />
      </section>
    )
  }
}

// Header Component
class Header extends React.Component{
  render()
  {
    return (
      <div className = "Header">
      <h1>Header Section</h1> 
      </div>
    )
    
  }
}
// Navbar Component2
class Navbar extends React.Component{
  render()
  {
    return (
      <div>
      <div className = "Navbar">
      <p>Nav bar Section</p>
      </div>
      <br/>
      </div>
    )
  }
}

//Body Component3
class Body extends React.Component{
  render()
  {
    return (
    <div>
      <br/>
      <div className = "Body">
      <h2>Body Section</h2>
      </div>
      <br/>
    </div>
    )
  }
}
//Footer Component4
class Footer extends React.Component{
  render()
  {
    return (
      <div>
        <br/>
      <div className = "Footer">
      <h1>Footer Section</h1> 
      </div>
      </div>
    )
  }
}

export default App