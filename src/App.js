import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Route} from 'react-router-dom'
import HouseList from './home/HouseList'
import Details from './home/Details'
import Index from './home/Index'

import './App.css';
const BaseLayout = () => (
<section id="facte"  className="wow fadeIn">
<div className="container">
<nav className="navbar navbar-expand-lg navbar-light ">
  <img
        src="https://i.imgur.com/YsPuzSV.png"
        width="100"
        height="60"
        className="d-inline-block "
        alt="React Bootstrap logo"
      />
  {/* <a class="navbar-brand" href="# ">Navbar</a> */}
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mx-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/" style={{ color:"palegreen",fontSize: "22px", fontWeight: "bolder" }}> <i className="fa fa-home"></i>  Home <span className="sr-only">(current)</span></a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="/projectt/" style={{ color:"palegreen",fontSize: "22px", fontWeight: "bolder" }}> <i className="fa fa-building"></i>  Building</a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="# " style={{ color:"palegreen",fontSize: "22px", fontWeight: "bolder" }}> <i className="fa fa-user"></i>  About </a>
      </li>
    </ul>
   
  </div>
</nav>
<hr className="hr" />

<div className="content">
    <Route path="/projectt/"  component={HouseList} />
    <Route exact path='/project/:pk' component={Details}/>
    <Route exact path='/'  component={Index}/>
</div>





</div>


 


</section>
 
)
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout/>
      </BrowserRouter>
    );
  }
}

export default App;
