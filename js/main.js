// ---------------------------------------------------------------------
//  T3TR1S ... By Juan Eguia
// 
// ---------------------------------------------------------------------
import { 
    constantes, 
    elementosDom,
    estado
} from "./constants.js";

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
    let ctx = elementosDom.ctx;

    elementosDom.canvas.width = constantes.columnas * constantes.tileX;
    elementosDom.canvas.height = constantes.filas * constantes.tileY;

}

// ---------------------------------------------------------------------
//  Bucle PRINCIPAL
// ---------------------------------------------------------------------
function bucle_principal() {

    borraCanvas();
    
}

