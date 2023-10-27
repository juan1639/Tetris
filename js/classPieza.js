// ---------------------------------------------------------------------
//  Clase Pieza ... ( 7 Piezas: z s l j o i t )
// ---------------------------------------------------------------------
import { 
    constantes,
    elementosDom as ed,
    controles,
    varias,
    estado
} from "./constants.js";

import { 
    check_colisiones,
    dejar_rastro_pieza
} from "./functions.js";

// ---------------------------------------------------------------------
export class Pieza {

    constructor(x, y, idPieza, coloresPieza) {

        console.log(x, y, idPieza);
        this.x = x;
        this.y = y;
        this.idPieza = idPieza;
        this.coloresPieza = coloresPieza;
        this.rotacion = 0;
    }

    static plantilla = {
        z: [[0, 0], [0, -1], [-1, -1], [1, 0],
            [0, 0], [0, -1], [-1, 0], [-1, 1],
            [0, 0], [0, -1], [-1, -1], [1, 0],
            [0, 0], [0, -1], [-1, 0], [-1, 1]
        ],
        s: [[0, 0], [0, -1], [1, -1], [-1, 0],
            [0, 0], [0, 1], [-1, -1], [-1, 0],
            [0, 0], [0, -1], [1, -1], [-1, 0],
            [0, 0], [0, 1], [-1, -1], [-1, 0]
        ],
        l: [[0, 0], [0, -1], [0, -2], [1, 0],
            [0, 0], [-1, 0], [1, 0], [1, -1],
            [0, 0], [0, -1], [0, -2], [-1, -2],
            [0, 0], [0, -1], [1, -1], [2, -1]
        ],
        j: [[0, 0], [1, 0], [1, -1], [1, -2],
            [0, 0], [0, -1], [-1, -1], [-2, -1],
            [0, 0], [0, -1], [0, -2], [1, -2],
            [0, 0], [0, -1], [1, 0], [2, 0]
        ],
        o: [[0, 0], [0, -1], [1, -1], [1, 0],
            [0, 0], [0, -1], [1, -1], [1, 0],
            [0, 0], [0, -1], [1, -1], [1, 0],
            [0, 0], [0, -1], [1, -1], [1, 0]
        ],
        i: [[0, 0], [-1, 0], [1, 0], [2, 0],
            [0, 0], [0, -1], [0, -2], [0, -3],
            [0, 0], [-1, 0], [1, 0], [2, 0],
            [0, 0], [0, -1], [0, -2], [0, -3]
        ],
        t: [[0, 0], [0, -1], [-1, 0], [1, 0],
            [0, 0], [0, -1], [0, -2], [-1, -1],
            [0, 0], [-1, 0], [1, 0], [0, 1],
            [0, 0], [0, -1], [0, -2], [1, -1]
        ],
    };

    dibuja_pieza() {

        this.actualiza_pieza();

        const idPieza = this.idPieza;
        const ancho = constantes.tileY;
        const alto = constantes.tileY;

        const parte_array = this.rotacion * 4;
        let rotacion_idPieza = idPieza.slice(parte_array, parte_array + 4);

        for (let relPos of rotacion_idPieza) {

            const x = (this.x + relPos[0]) * constantes.tileX;
            const y = (this.y + relPos[1]) * constantes.tileY;

            this.draw_canvas(x, y, ancho, alto);
        }
    }

    actualiza_pieza() {

        if (!estado.enJuego) return;

        if (controles.teclaIzquierda) {

            this.x --;
            const colision = check_colisiones(this.x, this.y, this.idPieza, this.rotacion);
            if (colision) this.x ++;
            controles.teclaIzquierda = false;
            
        } else if (controles.teclaDerecha) {

            this.x ++;
            const colision = check_colisiones(this.x, this.y, this.idPieza, this.rotacion);
            if (colision) this.x--;
            controles.teclaDerecha = false;

        } else if (controles.teclaAbajo) {

            this.y ++;
            const colision = check_colisiones(this.x, this.y, this.idPieza, this.rotacion);
            if (colision) {
                this.y--;
                varias.otra_pieza = true;
                dejar_rastro_pieza(this.x, this.y, this.idPieza, this.rotacion);
            }

            controles.teclaAbajo = false;

        } else if (controles.teclaRotar) {

            const bck_rotacion = this.rotacion;
            this.rotacion ++;
            if (this.rotacion >= 4) this.rotacion = 0;

            const colision = check_colisiones(this.x, this.y, this.idPieza, this.rotacion);
            if (colision) {
                console.log('No es posible rotar...');
                this.rotacion = bck_rotacion;
            }

            controles.teclaRotar = false;
        }
    }

    draw_canvas(x, y, ancho, alto) {

        ed.ctx.beginPath();
        ed.ctx.fillStyle = this.coloresPieza[2];
        ed.ctx.moveTo(x, y);
        ed.ctx.lineTo(x + ancho, y + alto);
        ed.ctx.lineTo(x, y + alto);
        ed.ctx.lineTo(x, y);
        ed.ctx.fill();
        ed.ctx.closePath();

        ed.ctx.beginPath();
        ed.ctx.fillStyle = this.coloresPieza[0];
        ed.ctx.moveTo(x, y);
        ed.ctx.lineTo(x + ancho, y);
        ed.ctx.lineTo(x + ancho, y + alto);
        ed.ctx.lineTo(x, y);
        ed.ctx.fill();
        ed.ctx.closePath();

        // ed.ctx.fillStyle = this.coloresPieza[0];
        // ed.ctx.fillRect(x, y, ancho - 1, alto - 1);
    }
}
