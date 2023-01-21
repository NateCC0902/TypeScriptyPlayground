type pice = {
    pic: string;
    currentPosition: number[];
    color: "WHITE" | "BLACK" | "NONE";
    name: string;
}
type board = {
    cells: pice[][];
    pices: { [key: string]: pice };
}
function makeChessGame() {
    var pieces: { [key: string]: pice } = {
        'b1': { pic: '♟︎', currentPosition: [1, 3], color: 'BLACK', name: 'bishop' },
        'B1': { pic: '♙', currentPosition: [8, 3], color: 'WHITE', name: 'bishop' },
        'b2': { pic: '♟︎', currentPosition: [1, 6], color: 'BLACK', name: 'bishop' },
        'B2': { pic: '♙', currentPosition: [8, 6], color: 'WHITE', name: 'bishop' },

        'k1': { pic: '♚', currentPosition: [1, 5], color: 'BLACK', name: 'king' },
        'K1': { pic: '♔', currentPosition: [8, 5], color: 'WHITE', name: 'king' },

        'n1': { pic: '♞', currentPosition: [1, 2], color: 'BLACK', name: 'knight' },
        'N1': { pic: '♘', currentPosition: [8, 2], color: 'WHITE', name: 'knight' },
        'n2': { pic: '♞', currentPosition: [1, 7], color: 'BLACK', name: 'knight' },
        'N2': { pic: '♘', currentPosition: [8, 7], color: 'WHITE', name: 'knight' },

        'p1': { pic: '♟︎', currentPosition: [2, 1], color: 'BLACK', name: 'pawn' },
        'p2': { pic: '♟︎', currentPosition: [2, 2], color: 'BLACK', name: 'pawn' },
        'p3': { pic: '♟︎', currentPosition: [2, 3], color: 'BLACK', name: 'pawn' },
        'p4': { pic: '♟︎', currentPosition: [2, 4], color: 'BLACK', name: 'pawn' },
        'p5': { pic: '♟︎', currentPosition: [2, 5], color: 'BLACK', name: 'pawn' },
        'p6': { pic: '♟︎', currentPosition: [2, 6], color: 'BLACK', name: 'pawn' },
        'p7': { pic: '♟︎', currentPosition: [2, 7], color: 'BLACK', name: 'pawn' },
        'p8': { pic: '♟︎', currentPosition: [2, 8], color: 'BLACK', name: 'pawn' },

        'P1': { pic: '♙', currentPosition: [7, 1], color: 'WHITE', name: 'pawn' },
        'P2': { pic: '♙', currentPosition: [7, 2], color: 'WHITE', name: 'pawn' },
        'P3': { pic: '♙', currentPosition: [7, 3], color: 'WHITE', name: 'pawn' },
        'P4': { pic: '♙', currentPosition: [7, 4], color: 'WHITE', name: 'pawn' },
        'P5': { pic: '♙', currentPosition: [7, 5], color: 'WHITE', name: 'pawn' },
        'P6': { pic: '♙', currentPosition: [7, 6], color: 'WHITE', name: 'pawn' },
        'P7': { pic: '♙', currentPosition: [7, 7], color: 'WHITE', name: 'pawn' },
        'P8': { pic: '♙', currentPosition: [7, 8], color: 'WHITE', name: 'pawn' },

        'q1': { pic: '♛', currentPosition: [1, 4], color: 'BLACK', name: 'queen' },
        'Q1': { pic: '♕', currentPosition: [8, 4], color: 'WHITE', name: 'queen' },

        'r1': { pic: '♜', currentPosition: [1, 1], color: 'BLACK', name: 'rook' },
        'R1': { pic: '♖', currentPosition: [8, 1], color: 'WHITE', name: 'rook' },
        'r2': { pic: '♜', currentPosition: [1, 8], color: 'BLACK', name: 'rook' },
        'R2': { pic: '♖', currentPosition: [8, 8], color: 'WHITE', name: 'rook' },

        'EPT1': { pic: ' ', currentPosition: [3, 1], color: 'NONE', name: 'empty' },
        'EPT2': { pic: ' ', currentPosition: [3, 2], color: 'NONE', name: 'empty' },
        'EPT3': { pic: ' ', currentPosition: [3, 3], color: 'NONE', name: 'empty' },
        'EPT4': { pic: ' ', currentPosition: [3, 4], color: 'NONE', name: 'empty' },
        'EPT5': { pic: ' ', currentPosition: [3, 5], color: 'NONE', name: 'empty' },
        'EPT6': { pic: ' ', currentPosition: [3, 6], color: 'NONE', name: 'empty' },
        'EPT7': { pic: ' ', currentPosition: [3, 7], color: 'NONE', name: 'empty' },
        'EPT8': { pic: ' ', currentPosition: [3, 8], color: 'NONE', name: 'empty' },
        'EPT9': { pic: ' ', currentPosition: [6, 1], color: 'NONE', name: 'empty' },
        'EPT10': { pic: ' ', currentPosition: [6, 2], color: 'NONE', name: 'empty' },
        'EPT11': { pic: ' ', currentPosition: [6, 3], color: 'NONE', name: 'empty' },
        'EPT12': { pic: ' ', currentPosition: [6, 4], color: 'NONE', name: 'empty' },
        'EPT13': { pic: ' ', currentPosition: [6, 5], color: 'NONE', name: 'empty' },
        'EPT14': { pic: ' ', currentPosition: [6, 6], color: 'NONE', name: 'empty' },
        'EPT15': { pic: ' ', currentPosition: [6, 7], color: 'NONE', name: 'empty' },
        'EPT16': { pic: ' ', currentPosition: [6, 8], color: 'NONE', name: 'empty' },
        'EPT17': { pic: ' ', currentPosition: [4, 1], color: 'NONE', name: 'empty' },
        'EPT18': { pic: ' ', currentPosition: [4, 2], color: 'NONE', name: 'empty' },
        'EPT19': { pic: ' ', currentPosition: [4, 3], color: 'NONE', name: 'empty' },
        'EPT20': { pic: ' ', currentPosition: [4, 4], color: 'NONE', name: 'empty' },
        'EPT21': { pic: ' ', currentPosition: [4, 5], color: 'NONE', name: 'empty' },
        'EPT22': { pic: ' ', currentPosition: [4, 6], color: 'NONE', name: 'empty' },
        'EPT23': { pic: ' ', currentPosition: [4, 7], color: 'NONE', name: 'empty' },
        'EPT24': { pic: ' ', currentPosition: [4, 8], color: 'NONE', name: 'empty' },
        'EPT25': { pic: ' ', currentPosition: [5, 1], color: 'NONE', name: 'empty' },
        'EPT26': { pic: ' ', currentPosition: [5, 2], color: 'NONE', name: 'empty' },
        'EPT27': { pic: ' ', currentPosition: [5, 3], color: 'NONE', name: 'empty' },
        'EPT28': { pic: ' ', currentPosition: [5, 4], color: 'NONE', name: 'empty' },
        'EPT29': { pic: ' ', currentPosition: [5, 5], color: 'NONE', name: 'empty' },
        'EPT30': { pic: ' ', currentPosition: [5, 6], color: 'NONE', name: 'empty' },
        'EPT31': { pic: ' ', currentPosition: [5, 7], color: 'NONE', name: 'empty' },
        'EPT32': { pic: ' ', currentPosition: [5, 8], color: 'NONE', name: 'empty' },

    };

    var myBoard: board = {
        cells: [],
        pices: pieces,
    };
    Object.entries(pieces).forEach(([key, value]) => {
        if (myBoard.cells[value.currentPosition[0] - 1] === undefined) {
            myBoard.cells[value.currentPosition[0] - 1] = [];
        }
        myBoard.cells[value.currentPosition[0] - 1][value.currentPosition[1] - 1] = value;
    });


    myBoard.pices = pieces;

    return myBoard;
}
function printBoard(myBoard: board) {
    let result: string[][] = [];
    result[0] = ['X', '1', '2', '3', '4', '5', '6', '7', '8']

    myBoard.cells.forEach((row, i) => {
        result[i + 1] = [];
        result[i + 1][0] = (i + 1).toString();
        row.forEach((item, k) => {
            result[i + 1][k + 1] = item.pic;
            if (k == 7) {
                result[i][k + 1] += '\n';
            }

        })
    });

    return result.join('');
}

//////////////////////////////////////////////////////////////////////

let isDie = function(pices: pice) {
    return pices.currentPosition[0] == 0 && pices.currentPosition[1] == 0;
}

let isEmpty = function(board: board, position: number[]) {
    return board.cells[position[0]][position[1]].pic == ' ';
}

let isOcupied = function(board: board, position: number[]) {
    return !isEmpty(board, position);
}

// #TODO
let vaildMove = function(board: board, pice: pice, from: number[], to: number[], currentPlayer: "WHITE" | "BLACK") {

    if (currentPlayer != pice.color) {
        console.log('not your pice');
        return false;
    }

    if (isDie(pice)) {
        console.log('you pick a Die pice');
        return false;
    }

    if (isEmpty(board, from)) {
        console.log('you pick a empty cell');
        return false;
    }

    if (to[0] < 0 || to[0] > 7 || to[1] < 0 || to[1] > 7) {
        console.log('out of board');
        return false;
    }

    return true;
}

class app {
    board: board;
    currentPlayer: "WHITE" | "BLACK";

    constructor() {
        this.board = makeChessGame();
        this.currentPlayer = "WHITE";
    }
    // #TODO
    movePiece(from: number[], to: number[]): boolean {
        if (from.length != 2 || to.length != 2) {
            console.log('wrong input');
            return false;
        }

        let orig: number[] = [from[0] - 1, from[1] - 1];
        let taget: number[] = [to[0] - 1, to[1] - 1];
        let piece = this.board.cells[orig[0]][orig[1]];
        let myBoard = this.board;
        let cuPlayer = this.currentPlayer;

        if (!vaildMove(myBoard, piece, orig, taget, cuPlayer)) {
            console.log('not vaild move');
            return false;
        }


        if (isOcupied(myBoard, taget)) {

            return true;
        } else {

            return true;
        }

    }
}

//////////////////////////////////////////////////////////////////////
let testBoard = makeChessGame();
console.log(testBoard.cells.length);
console.log(testBoard.cells[0].length);

console.log(printBoard(testBoard));
console.log(testBoard.pices["p1"]);

let testPice: pice = {
    pic: '♟︎',
    currentPosition: [0, 0],
    color: 'BLACK',
    name: 'bishop'
}
console.log(isDie(testPice));
