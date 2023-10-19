// ---------------------------------------------------------------------
//  Clon del juego T3TR1S ... By Juan Eguia
// 
// ---------------------------------------------------------------------
import { 
    constantes, 
    elementosDom,
    objeto,
    estado
} from "./constants.js";

import { 
    borraCanvas,
    instanciar_pieza
} from "./functions.js";

let eventoSel;
// ---------------------------------------------------------------------
//  Eventos Raton, Touch, Key
// ---------------------------------------------------------------------
for (let tipoEvento of constantes.eventos) {

    document.addEventListener(tipoEvento, (ev) => {

        if (estado.menu_principal && tipoEvento === eventoSel) {

            if (ev.target.id === 'comenzar') {
            }
        }
    });
}

// ---------------------------------------------------------------------
//  funcion INICIALIZADORA
// ---------------------------------------------------------------------
window.onload = () => {

    //fetching_records();

    eventoSel = constantes.eventos[1];
    console.log(eventoSel);

    elementosDom.ctx = elementosDom.canvas.getContext('2d');
    // let ctx = elementosDom.ctx;

    elementosDom.canvas.width = constantes.columnas * constantes.tileX;
    elementosDom.canvas.height = constantes.filas * constantes.tileY;
    elementosDom.canvas.style.border = '1px solid black';

    objeto.pieza = instanciar_pieza();

    // ---------------------------------------
    // const fps = constantes.fps;
    const fps = 2;
    setInterval(() => {
        bucle_principal();
    }, 1000 / fps);
}

// ---------------------------------------------------------------------
//  Bucle PRINCIPAL
// ---------------------------------------------------------------------
function bucle_principal() {

    borraCanvas();
    // console.log('bucle');

    objeto.pieza.dibuja_pieza();
}

