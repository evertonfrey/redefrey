import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Img} from 'react-image';
// import Badge from "@material-ui/core/Badge";

import Grid from "@material-ui/core/Grid";

import "./styles.css"; // src/components/Ofertas/styles.css



import selo1 from "../../assets/img/Icone-oferta-segunda.png";
import selo2 from "../../assets/img/Icone-verde.png";
import selo3 from "../../assets/img/Icone-azul.png";
import selo4 from "../../assets/img/icone-sextou.png";

let ListaOfertas = [
  {
    descricao: "",
    validade: "",
    path: "",
    imagem: "",
  },
];

ListaOfertas.push({
  descricao: "Segunda e terça",
  imagem: "Icone-oferta-segunda.png",
  path: "../../assets/img/Icone-oferta-segunda.png",
});

console.log(ListaOfertas[1].path);
//  const pathimg = "../../assets/img/Icone-oferta-segunda.png"
//  const imagem = require(pathimg);

// const imagem = 'http://localhost:3000/src/assets/img/Icone-oferta-segunda.png'


const Ofertas = () => (
  <div className="ofertas">
    <Grid container spacing={12}>
      <Grid item xs={12} sm={2}>
        <img className="p-col" src={selo1} alt="Segunda e Terça" />
        {/* <Img src={require(`${pathimg}`)}></Img> */}
        {/* <img className="p-col" src={imagem} alt="Segunda e Terça" /> */}
        <p>20/07 a 21/07</p>
      </Grid>
      <Grid item xs={12} sm={2}>
        <img className="p-col" src={selo2} alt="Quarta e Quinta" />
        <p>20/07 a 21/07</p>
      </Grid>
      <Grid item xs={12} sm={2}>
        <img className="p-col" src={selo3} alt="Sexta e Sábado" />
        <p>20/07 a 21/07</p>
      </Grid>
      <Grid item xs={12} sm={2}>
        <img className="p-col" src={selo4} alt="Sextou Real" />
        <p>20/07 a 21/07</p>
      </Grid>

      {/* <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>xs=6 sm=3</Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>xs=6 sm=3</Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>xs=6 sm=3</Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>xs=6 sm=3</Paper>
      </Grid> */}
    </Grid>

    {/* <div>
      <img className="p-col" src={selo1} alt="Segunda e Terça" />
    </div>
    <div>
      <img className="p-col" src={selo2} alt="Quarta e Quinta" />
    </div>
    <div>
      <img className="p-col" src={selo3} alt="Sexta e Sábado" />
    </div>
    <div>
      <img className="p-col" src={selo4} alt="Sextou Real" />
    </div> */}
  </div>
);

export default Ofertas;
