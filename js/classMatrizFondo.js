// ---------------------------------------------------------------------
//  Clase MatrizFondo (0 = vacio, 1 = No vacio)
// ---------------------------------------------------------------------
import { 
    colores,
    constantes,
    elementosDom as ed,
    objeto
} from "./constants.js";

import { actualizar_matrizFondo } from "./functions.js";

// ------------------------------------------------------------------------
export class MatrizFondo {

    constructor(columna, fila) {

       this.columna = columna;
       this.fila = fila;
       this.valor = 0;

       if (this.fila === 2 && this.columna === 12) this.valor = 9;
    }

    static check_lineDone() {

        const matrizLinea = objeto.matrizFondo[19];
        //console.log(matrizLinea);

        let contador_cols = 0;

        for (let cols of matrizLinea) {
            if (cols.valor != 0) contador_cols ++; 
        }
        
        if (contador_cols === 14) {
            actualizar_matrizFondo();
            return true;
        }

        return false;
    }

    dibuja(i, ii) {

        const x = this.columna * constantes.tileX;
        const y = this.fila * constantes.tileY;
        const posMatriz = objeto.matrizFondo[i][ii];

        if (posMatriz.valor === 0) {

            ed.ctx.fillStyle = colores.fondo_canvas;
            ed.ctx.fillRect(x, y, constantes.tileX, constantes.tileY);

        } else if (posMatriz.valor != 0) {

            ed.ctx.fillStyle = colores.rastro_pieza;
            ed.ctx.fillRect(x, y, constantes.tileX, constantes.tileY);
        }
    }
}
