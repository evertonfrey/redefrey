import React from 'react';

import './styles.css'; // src/components/Ofertas/styles.css

import selo1 from '../../assets/img/Icone-oferta-segunda.png';
import selo2 from '../../assets/img/Icone-verde.png';
import selo3 from '../../assets/img/Icone-azul.png';
import selo4 from '../../assets/img/icone-sextou.png';

const Ofertas = () => (
    <div id="menu">
        <ul>
            <li>
                <img src={selo1}/>
                <p>Segunda e Terça</p>
            </li>
            <li>
                <img src={selo2}/>
                <p>Quarta e Quinta</p>
            </li>
            <li>
                <img src={selo3}/>
                <p>Sexta e Sábado</p>
            </li>
            <li>
                <img src={selo4}/>
                <p>Sextou do Real</p>
            </li>
             
        </ul>
    </div>
);

export default Ofertas;