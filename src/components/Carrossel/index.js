import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import './carrossel.css'

import imagem1 from '../../assets/img/Banner-500-x-1920-Ex1.jpg';
import imagem2 from '../../assets/img/Banner-500-x-1920-Ex2.jpg';

const Carrosel = () => (
    <div className="imagem">
        <Carousel showThumbs={false}  autoPlay interval={5000} showStatus={false} transitionTime={1000} infiniteLoop>
            <div>
                <img src={imagem1} alt='Imagem 1' />
            </div>
            <div>
                <img src={imagem2} alt='Imagem 2' />
            </div>
        </Carousel>
    </div>

);

export default Carrosel;