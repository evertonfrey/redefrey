import React from 'react';

import './header.css';

import logo from '../../assets/img/marca-Frey-home-2.png'; 

const Header = () => (
    <header id="main-header">
     <img className='logotipo' src={logo} alt="Logotipo"/>
    </header> 
);

export default Header;