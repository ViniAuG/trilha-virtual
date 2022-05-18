const SHARP_COLORS = {
    0: '#4169E1', // azul
    1: '#8B0000', // vermelho
    default: '#000000'
};

const STATES = {
    UNAVAILABLE: 0,
    AVAILABLE: 1,
    PURPLE: "P",
    YELLOW: "Y"
};

const MOVE = {
    ROW: null,
    COL: null,
    COLOR: null,
    BOARD: null,
    SHIFT: null,
    SHIFTROW: null,
    SHIFTCOL: null
};

function makeMoveProp(row, col, turn, shift, shiftRow, shiftCol, board) {
    return {
        ROW: row,
        COL: col,
        TURN: turn,
        SHIFT: shift,
        SHIFTROW: shiftRow,
        SHIFTCOL: shiftCol,
        BOARD: board
    }
}

const ERRORS = {
    invalidMove: "Movimento inválido"
};

const DIALOG = {
    purpleTurn: "Turno do azul",
    yellowTurn: "Turno do vermelho"
};

const PURPLE_PLAYER = {
    AVAILABLE: 9,
    PLACED: 0,
    MILLPIECES: 0
};

const YELLOW_PLAYER = {
    AVAILABLE: 9,
    PLACED: 0,
    MILLPIECES: 0
};

const PURPLE_TURN = 0;
const YELLOW_TURN = 1;

class Coordinate {
    constructor(x, y) {
        this.X = x;
        this.Y = y;
    }
}

export { SHARP_COLORS, STATES, makeMoveProp, ERRORS, DIALOG, PURPLE_PLAYER, YELLOW_PLAYER, PURPLE_TURN, YELLOW_TURN, Coordinate };