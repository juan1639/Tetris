// ---------------------------------------------------------------------
//  Clon del juego T3TR1S ... By Juan Eguia
// 
// ---------------------------------------------------------------------
import { 
    constantes, 
    elementosDom,
    objeto,
    controles,
    estado,
    varias
} from "./constants.js";

import { 
    borraCanvas,
    instanciar_matrizFondo,
    instanciar_pieza
} from "./functions.js";

import { MatrizFondo } from "./classMatrizFondo.js";

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

        if ((estado.enJuego && tipoEvento === eventoSel) || (estado.enJuego && tipoEvento === 'keydown')) {
            console.log(ev.key, ev.keyCode);

            if (ev.key === 'z') {
                varias.bandera = true;
                objeto.pieza = instanciar_pieza();

            } else if (ev.key === 'ArrowLeft' || ev.keyCode === 37) {
                controles.teclaIzquierda = true;

            } else if (ev.key === 'ArrowRight' || ev.keyCode === 39) {
                controles.teclaDerecha = true;

            } else if (ev.key === 'ArrowDown' || ev.keyCode === 40) {
                controles.teclaAbajo = true;
            }
        }

        /* if ((estado.enJuego && tipoEvento === eventoSel) || (estado.enJuego && tipoEvento === 'keyup')) {
            console.log(ev.key, ev.keyCode);

            if (ev.key === 'z') {
                varias.bandera = true;
                objeto.pieza = instanciar_pieza();

            } else if (ev.key === 'ArrowLeft' || ev.keyCode === 37) {
                controles.teclaIzquierda = false;

            } else if (ev.key === 'ArrowRight' || ev.keyCode === 39) {
                controles.teclaDerecha = false;

            }
        } */
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

    objeto.matrizFondo = instanciar_matrizFondo();
    //objeto.pieza = instanciar_pieza();

    // ---------------------------------------
    const fps = constantes.fps;
    // const fps = 2;
    setInterval(() => {
        bucle_principal();
    }, 1000 / fps);

    // ---------------------------------------
    const caePieza = varias.dificultad_caer;
    setInterval(() => {
        if (constantes.gravedad) controles.teclaAbajo = true;
    }, caePieza);
}

// ---------------------------------------------------------------------
//  Bucle PRINCIPAL
// ---------------------------------------------------------------------
function bucle_principal() {

    // Renderiza el fondo (vacio o piezas acumulandose)...
    const filas = constantes.filas;
    const columnas = constantes.columnas;
    for (let i = 0; i < filas; i ++) {
        for (let ii = 0; ii < columnas; ii ++) {
            const fondo = objeto.matrizFondo[i][ii];
            fondo.dibuja(i, ii);
        }
    }

    // Renderiza las piezas -----------------------------------
    if (objeto.pieza) objeto.pieza.dibuja_pieza();

    // Instanciar Nueva Pieza ---------------------------------
    if (varias.otra_pieza) objeto.pieza = instanciar_pieza();
    
    // Check si hemos 'hecho linea' ---------------------------
    MatrizFondo.check_lineDone();
}
