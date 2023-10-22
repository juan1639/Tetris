// ---------------------------------------------------------------------
//  Clase MatrizFondo (0 = vacio, 1 = No vacio)
// ---------------------------------------------------------------------
import { 
    colores,
    constantes,
    elementosDom as ed,
    objeto
} from "./constants.js";

// ------------------------------------------------------------------------
export class MatrizFondo {

    constructor(columna, fila) {

       this.columna = columna;
       this.fila = fila;
       this.valor = 0;

       //if (this.fila === 2 && this.columna === 12) this.valor = 9;
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
