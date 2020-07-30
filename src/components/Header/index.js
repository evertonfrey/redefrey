import React from 'react';

import './styles.css';

import logo from '../../assets/img/logotipoGrande.jpg'  //  '/home/everton/projetos/redefrey/src/assets/img/logotipoGrande.jpg'

const Header = () => (
    <header id="main-header">Rede Frey
     <img src={logo} alt="Logotipo"/>
    </header> 
);

export default Header;