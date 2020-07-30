import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import imagem1 from '../../assets/img/*.jpg';

const Carrosel = () => (
    <Carousel>
        <div>
            <img src={imagem1[0]} alt='Imagem 1'/>
            <p className="legend">Imagem 1</p>
        </div>
        <div>
            <img src="'../../assets/img/328915.jpg" alt='Imagem 2'/>
            <p className="legend">Imagem 2</p>
        </div>
        <div>
            <img src="'../../assets/img/328981.jpg" alt='Imagem 3' />
            <p className="legend">Imagem 3</p>
        </div>

    </Carousel>

);

export default Carrosel;