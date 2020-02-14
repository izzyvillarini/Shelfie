import React, {Component} from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import Product from './Components/Product/Product';
import Axios from 'axios';

import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      inventory:[]
    }
  }
  
  render(){
  return (
    <div>
      <Header/>
      <Dashboard/>
      <Form/>
      <Product/>
    </div>
  );
}
}

export default App;
