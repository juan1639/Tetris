// ---------------------------------------------------------------------
//  CONSTANTES & VARIABLES
// ---------------------------------------------------------------------
const constantes = {
    tileX: 20,
    tileY: 20,
    columnas: 10,
    filas: 25,
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
    turno: false,
    plantarse: false,
    contadorGeneral: 0,
    contadorJugador: 0,
    contadorCPU: 0,
    contadorOcultas: 0,
    contadorManos: 0,
    sumaJugador: 0,
    sumaCPU: 0,
    cuantosAsesJugador: 0,
    cuantosAsesCPU: 0,
    fichasJugador: constantes.fichasInicialesJugador,
    fichasCPU: constantes.fichasInicialesCPU,
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
    varias
};

