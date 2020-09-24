import React, {Component} from 'react';
import './app.less';
import {Route, BrowserRouter} from "react-router-dom";
import Home from "./Home";
import Calculator from './Calculator';
import Counter from './Counter';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Header />
          <Route exact path='/' component={Home}/>
          <Route exact path='/calculator' component={Calculator}/>
          <Route exact path='/counter' component={Counter}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
