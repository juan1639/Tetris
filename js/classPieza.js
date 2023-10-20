// ---------------------------------------------------------------------
//  Clase Pieza ... ( 7 Piezas: z s l j o i t )
// ---------------------------------------------------------------------
import { 
    constantes,
    elementosDom as ed,
    colores
} from "./constants.js";

// ---------------------------------------------------------------------
export class Pieza {

    constructor(x, y, idPieza, coloresPieza) {

        console.log(x, y, idPieza);
        this.x = x;
        this.y = y;
        this.idPieza = idPieza;
        this.coloresPieza = coloresPieza;
    }

    static plantilla = {
        z: [[0, 0], [0, -1], [-1, -1], [1, 0]],
        s: [[0, 0], [0, -1], [1, -1], [-1, 0]],
        l: [[0, 0], [0, -1], [0, -2], [1, 0]],
        j: [[0, 0], [1, 0], [1, -1], [1, -2]],
        o: [[0, 0], [0, -1], [1, -1], [1, 0]],
        i: [[0, 0], [-1, 0], [1, 0], [2, 0]],
        t: [[0, 0], [0, -1], [-1, 0], [1, 0]],
    };

    dibuja_pieza() {

        const idPieza = this.idPieza;
        const ancho = constantes.tileY;
        const alto = constantes.tileY;

        for (let relPos of idPieza) {

            const x = (this.x + relPos[0]) * constantes.tileX;
            const y = (this.y + relPos[1]) * constantes.tileY;

            ed.ctx.fillStyle = this.coloresPieza[1];
            ed.ctx.fillRect(x, y, ancho - 1, alto - 1);
            
            ed.ctx.fillStyle = this.coloresPieza[0];
            ed.ctx.fillRect(x + 2, y + 2, ancho - 6, alto - 6);
        }
    }
}
