// ---------------------------------------------------------------------
//  Clase Marcadores ( Lineas, nivel )
// ---------------------------------------------------------------------
import { elementosDom as ed } from "./constants.js";

// ---------------------------------------------------------------------
export class Marcadores {

    constructor(lineas, nivel) {
        this._lineas = lineas;
        this._nivel = nivel;
    }

    mostrar_marcadores() {

        // -----------------------------------------------------
        const sizeText = 15;
        let x = 10;
        let y = sizeText;
        const lineasTxt = 'Lineas: ' + this._lineas.toString();

        ed.ctx.font = sizeText.toString() + 'px arial';
        ed.ctx.fillStyle = 'yellow';
        ed.ctx.textAlign = 'left';
        ed.ctx.fillText(lineasTxt, x, y);

        // -----------------------------------------------------
        x = ed.canvas.width / 2;
        const nivelTxt = 'Nivel: ' + this._nivel.toString();

        ed.ctx.fillStyle = 'beige';
        ed.ctx.textAlign = 'center';
        ed.ctx.fillText(nivelTxt, x, y);
    }

    get lineas() {
        return this._lineas;
    }

    set lineas(updateLineas) {
        this._lineas = updateLineas;
    }

    get nivel() {
        return this._nivel;
    }

    set nivel(updateNivel) {
        this._nivel = updateNivel;
    }
}
