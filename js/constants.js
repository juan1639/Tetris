// ---------------------------------------------------------------------
//  CONSTANTES & VARIABLES
// ---------------------------------------------------------------------
const constantes = {
    tileX: 20,
    tileY: 20,
    columnas: 14,
    filas: 20,
    fps: 60,
    gravedad: 1,
    eventos: ['touchstart', 'click', 'keydown', 'keyup'],
    endPoint: './mejoresResultados.json',
    listaRecords: null,
}

const elementosDom = {
    contenedor2do: document.getElementsByClassName('contenedor__2do'),
    canvas: document.getElementById('canvas'),
    ctx: null,
}

const marcadores = {
    lineas: 0,
    nivel: 1,
}

const estado = {
    menu_principal: false,
    enJuego: true,
    entreNiveles: false,
    game_over: false
}

const varias = {
    bandera: false,
}

const colores = {
    fondo_canvas: "rgb(73, 73, 73)",
}

const sonido = {
    gameOverVoz: new Audio('./sonidos/gameover.mp3'),
}

// -----------------------------------------------------------------------------
export {
    constantes,
    elementosDom,
    marcadores,
    estado,
    sonido,
    varias,
    colores
};

