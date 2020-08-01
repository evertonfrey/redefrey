import React from 'react';

import Header from './components/Header';
import Carrossel from './components/Carrossel'
import './styles.css';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import Ofertas from './components/Ofertas';



const App = () => (
   <div>
     <Header/>
     <Carrossel/>
     <Ofertas/>
   </div>
);



export default App;
