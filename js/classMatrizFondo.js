// ---------------------------------------------------------------------
//  Clase MatrizFondo (0 = vacio, 1 = No vacio)
// ---------------------------------------------------------------------
import { 
    colores,
    constantes,
    elementosDom as ed
} from "./constants.js";

// ---------------------------------------------------------------------
export class MatrizFondo {

    constructor(columna, fila) {

       this.columna = columna;
       this.fila = fila;
    }

    dibuja() {

        const x = this.columna * constantes.tileX;
        const y = this.fila * constantes.tileY;

        ed.ctx.fillStyle = colores.fondo_canvas;
        ed.ctx.fillRect(x, y, constantes.tileX, constantes.tileY);
    }
}
