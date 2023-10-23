// ---------------------------------------------------------------------
//  CONSTANTES & VARIABLES
// ---------------------------------------------------------------------
const constantes = {
    tileX: 20,
    tileY: 20,
    columnas: 14,
    filas: 20,
    xInicial: 7,
    yInicial: 2,
    piezas: 'zsljoit',
    fps: 60,
    gravedad: true,
    eventos: ['touchstart', 'click', 'keydown', 'keyup'],
    endPoint: './mejoresResultados.json',
    listaRecords: null,
}

const elementosDom = {
    contenedor2do: document.getElementsByClassName('contenedor__2do'),
    canvas: document.getElementById('canvas'),
    ctx: null,
}

const objeto = {
    matrizFondo: [],
    pieza: null,
    scores: null,
}

const controles = {
    teclaIzquierda: false,
    teclaDerecha: false,
    teclaAbajo: false,
    teclaRotar: false,
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
    dificultad_caer: 1100,
    otra_pieza: false,
}

const colores = {
    fondo_canvas: "rgb(73, 73, 73)",
    rastro_pieza: "rgb(150, 150, 150)",
    colorPiezas: [
        'beige',
        'orange',
        'yellow',
        'cyan',
        'royalblue',
        'orangered',
        'seagreen'
    ],
    colorPiezas2: [
        ['rgb(255, 204, 0)', 'rgb(202, 162, 2)', 'rgb(227, 182, 2)', 'rgb(254, 219, 78)'],
        ['rgb(242, 55, 55)', 'rgb(190, 14, 14)', 'rgb(222, 16, 16)', 'rgb(244, 113, 113)'],
        ['rgb(131, 89, 149)', 'rgb(98, 67, 112)', 'rgb(121, 83, 138)', 'rgb(155, 117, 172)'],
        ['rgb(204, 204, 204)', 'rgb(166, 166, 166)', 'rgb(187, 187, 187)', 'rgb(221, 221, 221)'],
        ['rgb(159, 206, 49)', 'rgb(133, 172, 40)', 'rgb(149, 192, 46)', 'rgb(179, 216, 90)'],
        ['rgb(255, 174, 201)', 'rgb(255, 91, 145)', 'rgb(255, 119, 164)', 'rgb(255, 132, 172)'],
        ['rgb(74, 191, 240)', 'rgb(20, 165, 226)', 'rgb(52, 182, 237)', 'rgb(122, 207, 243)']
    ],
}

const sonido = {
    gameOverVoz: new Audio('./sonidos/gameover.mp3'),
}

// -----------------------------------------------------------------------------
export {
    constantes,
    elementosDom,
    objeto,
    controles,
    marcadores,
    estado,
    sonido,
    varias,
    colores
};
