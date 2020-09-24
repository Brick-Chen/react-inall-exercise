import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="nav-menu">
        <NavLink to="/" 
        style={{color: 'white', textDecoration: 'none', marginRight: '40px', marginTop: '20px'}}>
          HOME
        </NavLink>
  
        <NavLink to="/calculator" 
        style={{color: 'white', textDecoration: 'none', marginRight: '40px'}}>
          在线计算器
        </NavLink>
  
        <NavLink to="/counter" 
        style={{color: 'white', textDecoration: 'none', marginRight: '40px'}}>
          在线倒计时器
        </NavLink>
      </div>
    </div>);
}

export default Header;