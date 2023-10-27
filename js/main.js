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
    varias,
    marcadores,
    sonido
} from "./constants.js";

import { 
    borraCanvas,
    instanciar_matrizFondo,
    instanciar_pieza
} from "./functions.js";

import { MatrizFondo } from "./classMatrizFondo.js";
import { Marcadores } from "./classMarcadores.js";
import { Textos } from "./classTextos.js";

let eventoSel;
// ---------------------------------------------------------------------
//  Eventos Raton, Touch, Key
// ---------------------------------------------------------------------
for (let tipoEvento of constantes.eventos) {

    document.addEventListener(tipoEvento, (ev) => {

        if (estado.menu_principal && tipoEvento === eventoSel) {

            if (ev.target.id === 'canvas') {
                estado.menu_principal = false;
                estado.enJuego = true;

                if (sonido.musicaFondo.paused) {
                    sonido.musicaFondo.play()
                } else {
                    sonido.musicaFondo.pause()
                }
            }
        }

        if ((estado.enJuego && tipoEvento === eventoSel) || (estado.enJuego && tipoEvento === 'keydown')) {
            console.log(ev.key, ev.keyCode);
            console.log(sonido.musicaFondo.paused);

            if (ev.key === 's' || ev.key === 'S') {
                //varias.bandera = true;
                //objeto.pieza = instanciar_pieza();
                //sonido.musicaFondo.play();
                if (sonido.musicaFondo.paused) {
                    sonido.musicaFondo.play()
                } else {
                    sonido.musicaFondo.pause()
                }

            } else if (ev.key === 'ArrowLeft' || ev.keyCode === 37) {
                controles.teclaIzquierda = true;

            } else if (ev.key === 'ArrowRight' || ev.keyCode === 39) {
                controles.teclaDerecha = true;

            } else if (ev.key === 'ArrowDown' || ev.keyCode === 40) {
                controles.teclaAbajo = true;

            } else if (ev.key === 'Control' || ev.keyCode === 17 || ev.keyCode === 32) {
                controles.teclaRotar = true;
            }
        }

        if (estado.enJuego && tipoEvento === eventoSel) {
            console.log(ev.target.id);

            if (ev.target.id === 'boton__le' || ev.target.id === 'flecha__le') {
                controles.teclaIzquierda = true;

            } else if (ev.target.id === 'boton__ri' || ev.target.id === 'flecha__ri') {
                controles.teclaDerecha = true;

            } else if (ev.target.id === 'boton__do' || ev.target.id === 'flecha__do') {
                controles.teclaAbajo = true;

            } else if (ev.target.id === 'boton__rotar') {
                controles.teclaRotar = true;

            } else if (ev.target.id === 'boton__menu') {
                if (sonido.musicaFondo.paused) {
                    sonido.musicaFondo.play()
                } else {
                    sonido.musicaFondo.pause()
                }
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

    // -------------------------------------------------------
    objeto.matrizFondo = instanciar_matrizFondo();

    const tx = Math.floor(elementosDom.canvas.width / 2);
    const ty = Math.floor(elementosDom.canvas.height / 2);
    objeto.textos = new Textos(tx, ty, 'Toque o haga click para comenzar...', 15, 'center', 'lightblue');
    objeto.scores = new Marcadores(marcadores.lineas, marcadores.nivel);

    objeto.pieza = instanciar_pieza();

    // -------------------------------------------------------
    const fps = constantes.fps;
    setInterval(() => {
        bucle_principal();
    }, 1000 / fps);

    // -------------------------------------------------------
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
            fondo.dibuja();
        }
    }

    // Renderiza las piezas -----------------------------------
    if (objeto.pieza) objeto.pieza.dibuja_pieza();

    // Instanciar Nueva Pieza ---------------------------------
    if (varias.otra_pieza) objeto.pieza = instanciar_pieza();
    
    // Check si hemos 'hecho linea' ---------------------------
    MatrizFondo.check_lineDone();

    // Render Scores ------------------------------------------
    objeto.scores.mostrar_marcadores();

    // Render Textos ------------------------------------------
    objeto.textos.mostrar_txt();
}
