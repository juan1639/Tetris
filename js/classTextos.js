// ---------------------------------------------------------------------
//  Clase Marcadores ( Lineas, nivel )
// ---------------------------------------------------------------------
import { 
    elementosDom as ed,
    estado
} from "./constants.js";

// ---------------------------------------------------------------------
export class Textos {

    constructor(x, y, txt, size, align, color, estado) {
        this.x = x;
        this.y = y;
        this.txt = txt;
        this.size = size;
        this.align = align;
        this.color = color;
        this.estado = estado;
    }

    mostrar_txt() {

        if (!estado[this.estado]) return;

        ed.ctx.font = this.size.toString() + 'px arial';
        ed.ctx.fillStyle = this.color;
        ed.ctx.textAlign = this.align;
        ed.ctx.fillText(this.txt, this.x, this.y);
    }
}
