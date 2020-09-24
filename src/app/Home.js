import React from 'react';
import './home.less';
import hero from '../images/hero-image.png';
import calculator from '../images/calculator.png';
import timer from '../images/timer.png';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      {/* This is Home. */}
      <div className="home-img">
        <img id="hero" src={hero}  alt='在线实用工具'></img>
        <div className="head-text">在线实用工具</div>
        <div className="tools">
          <img id="calculator" src={calculator} alt='calculator'></img>
          <img id= "timer" src={timer} alt='timer'></img>
        </div>
        <div className="tools-link">
          <NavLink to="/calculator" style={{color: 'white', paddingRight: "120px"}}>计算器</NavLink>
          <NavLink to="/counter" style={{color: 'white', paddingLeft: "120px"}}>倒计时器</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;