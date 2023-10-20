// ---------------------------------------------------------------------
//  Funciones varias
// ---------------------------------------------------------------------
import {
    elementosDom as ed,
    colores,
    constantes,
    objeto,
} from './constants.js';

import { Pieza } from './classPieza.js';
import { MatrizFondo } from './classMatrizFondo.js';

// =============================================================================
function instanciar_matrizFondo() {

    const filas = constantes.filas;
    const columnas = constantes.columnas;

    const matriz = new Array(filas);

    for (let i = 0; i < matriz.length; i ++) {

        matriz[i] = new Array(columnas).fill(0);
        
    }

    console.log(matriz);
    objeto.matrizFondo = matriz;

    for (let i = 0; i < filas; i ++) {
        for (let ii = 0; ii < columnas; ii ++) {

            objeto.matrizFondo[i][ii] = new MatrizFondo(ii, i);

        }
    }

    return objeto.matrizFondo;
}

// =============================================================================
function instanciar_pieza() {

    const x = constantes.xInicial;
    const y = constantes.yInicial;
    const piezas = constantes.piezas;
    const color = colores.colorPiezas2;

    const nro_rnd = Math.floor(Math.random() * piezas.length);
    // const elegida = piezas[nro_rnd];
    const elegida = piezas.charAt(nro_rnd);
    const idPieza = Pieza.plantilla[elegida];

    const coloresPieza = color[nro_rnd];

    const pieza = new Pieza(x, y, idPieza, coloresPieza);

    return pieza;
}

// =============================================================================
function borraCanvas() {

    ed.ctx.fillStyle = colores.fondo_canvas;
    ed.ctx.fillRect(0, 0, ed.canvas.width, ed.canvas.height); 
}

// =============================================================================
async function fetching_records() {

    const endpoint = constantes.endPoint;

    try {
        const response = await fetch(endpoint);
        console.log(response);

        if(response.ok){
            const jsonResponse = await response.json();
            console.log(jsonResponse);

            // Ordenar los records...
            const tabla = jsonResponse.jugadores.sort((a, b) => a.nroManos > b.nroManos ? 1 : -1);
            console.log(tabla);

            constantes.listaRecords = jsonResponse;

            //funcion para mostrar la informacion de la lista de records
            mostrar_records(constantes.listaRecords);
            //mostrar_records(jsonResponse);
        }

    } catch (error) {
        console.log(error);
    }
}

// =============================================================================
function mostrar_records(jsonResponse) {

    console.log(jsonResponse);

    for (let i = 0; i < jsonResponse.jugadores.length; i ++) {

        const indice = i + 1;
        const nombre = jsonResponse.jugadores[i]['nombre'];
        const ganadas = jsonResponse.jugadores[i]['ganadas'];
        const nroManos = jsonResponse.jugadores[i]['nroManos'];

        creaElementoDom(indice.toString() + '.', 'center');
        creaElementoDom(nombre.toString(), 'left');
        creaElementoDom(ganadas.toString(), 'right');
        creaElementoDom(nroManos.toString(), 'right');
    }
}

// =============================================================================
function creaElementoDom(txt, justificar) {
    
    const elemento = document.createElement('p');
    elemento.style.justifySelf = justificar;
    elemento.innerHTML = txt;
    objeto.contenedorRecords[0].appendChild(elemento);
}

// =============================================================================
function borrarTodosChild(contenedorPadre) {
    
    while (contenedorPadre.firstChild) {
        contenedorPadre.removeChild(contenedorPadre.firstChild);
    }
}

// =============================================================================
function borrarLastChild(contenedorPadre) {
    
    contenedorPadre.removeChild(contenedorPadre.lastChild);
}

// =============================================================================
function check_entrarEnMejores10() {

    const endpoint = constantes.endPoint;
    
    const agregaScore = {
        nombre: "Jugador",
        ganadas: 1,
        nroManos: marcadores.contadorManos
    }

    constantes.listaRecords.jugadores.push(agregaScore);
    console.log(constantes.listaRecords);

    const tabla = constantes.listaRecords.jugadores.sort((a, b) => a.nroManos > b.nroManos ? 1 : -1);
    console.log(tabla);

    constantes.listaRecords.jugadores.pop();
    console.log(constantes.listaRecords);

    const todos_menosBotonVolver = 36;

    for (let i = 0; i < todos_menosBotonVolver; i ++) {
        borrarLastChild(objeto.contenedorRecords[0]);
    }

    mostrar_records(constantes.listaRecords);
    
    /* try {
        const response = await fetch(endpoint, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(agregaScore)
        });

        if (response.ok) {

            const jsonResponse = await response.json();
            console.log(jsonResponse);
        }
    
    } catch (error) {
         console.log(error);
    } */
}

export {
    borraCanvas,
    instanciar_matrizFondo,
    instanciar_pieza
};

