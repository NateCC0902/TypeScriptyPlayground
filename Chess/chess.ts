import { pice, board, oneMoveHistory } from './type';

function makeChessGame() {
    const pieces: { [key: string]: pice } = {
        'b1': { pic: '♟︎', currentPosition: [1, 3], color: 'BLACK', name: 'bishop', key: 'b1' },
        'B1': { pic: '♙', currentPosition: [8, 3], color: 'WHITE', name: 'bishop', key: 'B1' },
        'b2': { pic: '♟︎', currentPosition: [1, 6], color: 'BLACK', name: 'bishop', key: 'b2' },
        'B2': { pic: '♙', currentPosition: [8, 6], color: 'WHITE', name: 'bishop', key: 'B2' },

        'k1': { pic: '♚', currentPosition: [1, 5], color: 'BLACK', name: 'king', key: 'k1' },
        'K1': { pic: '♔', currentPosition: [8, 5], color: 'WHITE', name: 'king', key: 'K1' },

        'n1': { pic: '♞', currentPosition: [1, 2], color: 'BLACK', name: 'knight', key: 'n1' },
        'N1': { pic: '♘', currentPosition: [8, 2], color: 'WHITE', name: 'knight', key: 'N1' },
        'n2': { pic: '♞', currentPosition: [1, 7], color: 'BLACK', name: 'knight', key: 'n2' },
        'N2': { pic: '♘', currentPosition: [8, 7], color: 'WHITE', name: 'knight', key: 'N2' },

        'p1': { pic: '♟︎', currentPosition: [2, 1], color: 'BLACK', name: 'pawn', key: 'p1' },
        'p2': { pic: '♟︎', currentPosition: [2, 2], color: 'BLACK', name: 'pawn', key: 'p2' },
        'p3': { pic: '♟︎', currentPosition: [2, 3], color: 'BLACK', name: 'pawn', key: 'p3' },
        'p4': { pic: '♟︎', currentPosition: [2, 4], color: 'BLACK', name: 'pawn', key: 'p4' },
        'p5': { pic: '♟︎', currentPosition: [2, 5], color: 'BLACK', name: 'pawn', key: 'p5' },
        'p6': { pic: '♟︎', currentPosition: [2, 6], color: 'BLACK', name: 'pawn', key: 'p6' },
        'p7': { pic: '♟︎', currentPosition: [2, 7], color: 'BLACK', name: 'pawn', key: 'p7' },
        'p8': { pic: '♟︎', currentPosition: [2, 8], color: 'BLACK', name: 'pawn', key: 'p8' },

        'P1': { pic: '♙', currentPosition: [7, 1], color: 'WHITE', name: 'pawn', key: 'P1' },
        'P2': { pic: '♙', currentPosition: [7, 2], color: 'WHITE', name: 'pawn', key: 'P2' },
        'P3': { pic: '♙', currentPosition: [7, 3], color: 'WHITE', name: 'pawn', key: 'P3' },
        'P4': { pic: '♙', currentPosition: [7, 4], color: 'WHITE', name: 'pawn', key: 'P4' },
        'P5': { pic: '♙', currentPosition: [7, 5], color: 'WHITE', name: 'pawn', key: 'P5' },
        'P6': { pic: '♙', currentPosition: [7, 6], color: 'WHITE', name: 'pawn', key: 'P6' },
        'P7': { pic: '♙', currentPosition: [7, 7], color: 'WHITE', name: 'pawn', key: 'P7' },
        'P8': { pic: '♙', currentPosition: [7, 8], color: 'WHITE', name: 'pawn', key: 'P8' },

        'q1': { pic: '♛', currentPosition: [1, 4], color: 'BLACK', name: 'queen', key: 'q1' },
        'Q1': { pic: '♕', currentPosition: [8, 4], color: 'WHITE', name: 'queen', key: 'Q1' },

        'r1': { pic: '♜', currentPosition: [1, 1], color: 'BLACK', name: 'rook', key: 'r1' },
        'R1': { pic: '♖', currentPosition: [8, 1], color: 'WHITE', name: 'rook', key: 'R1' },
        'r2': { pic: '♜', currentPosition: [1, 8], color: 'BLACK', name: 'rook', key: 'r2' },
        'R2': { pic: '♖', currentPosition: [8, 8], color: 'WHITE', name: 'rook', key: 'R2' },

        'EPT1': { pic: ' ', currentPosition: [3, 1], color: 'NONE', name: 'empty', key: 'EPT1' },
        'EPT2': { pic: ' ', currentPosition: [3, 2], color: 'NONE', name: 'empty', key: 'EPT2' },
        'EPT3': { pic: ' ', currentPosition: [3, 3], color: 'NONE', name: 'empty', key: 'EPT3' },
        'EPT4': { pic: ' ', currentPosition: [3, 4], color: 'NONE', name: 'empty', key: 'EPT4' },
        'EPT5': { pic: ' ', currentPosition: [3, 5], color: 'NONE', name: 'empty', key: 'EPT5' },
        'EPT6': { pic: ' ', currentPosition: [3, 6], color: 'NONE', name: 'empty', key: 'EPT6' },
        'EPT7': { pic: ' ', currentPosition: [3, 7], color: 'NONE', name: 'empty', key: 'EPT7' },
        'EPT8': { pic: ' ', currentPosition: [3, 8], color: 'NONE', name: 'empty', key: 'EPT8' },
        'EPT9': { pic: ' ', currentPosition: [6, 1], color: 'NONE', name: 'empty', key: 'EPT9' },
        'EPT10': { pic: ' ', currentPosition: [6, 2], color: 'NONE', name: 'empty', key: 'EPT10' },
        'EPT11': { pic: ' ', currentPosition: [6, 3], color: 'NONE', name: 'empty', key: 'EPT11' },
        'EPT12': { pic: ' ', currentPosition: [6, 4], color: 'NONE', name: 'empty', key: 'EPT12' },
        'EPT13': { pic: ' ', currentPosition: [6, 5], color: 'NONE', name: 'empty', key: 'EPT13' },
        'EPT14': { pic: ' ', currentPosition: [6, 6], color: 'NONE', name: 'empty', key: 'EPT14' },
        'EPT15': { pic: ' ', currentPosition: [6, 7], color: 'NONE', name: 'empty', key: 'EPT15' },
        'EPT16': { pic: ' ', currentPosition: [6, 8], color: 'NONE', name: 'empty', key: 'EPT16' },
        'EPT17': { pic: ' ', currentPosition: [4, 1], color: 'NONE', name: 'empty', key: 'EPT17' },
        'EPT18': { pic: ' ', currentPosition: [4, 2], color: 'NONE', name: 'empty', key: 'EPT18' },
        'EPT19': { pic: ' ', currentPosition: [4, 3], color: 'NONE', name: 'empty', key: 'EPT19' },
        'EPT20': { pic: ' ', currentPosition: [4, 4], color: 'NONE', name: 'empty', key: 'EPT20' },
        'EPT21': { pic: ' ', currentPosition: [4, 5], color: 'NONE', name: 'empty', key: 'EPT21' },
        'EPT22': { pic: ' ', currentPosition: [4, 6], color: 'NONE', name: 'empty', key: 'EPT22' },
        'EPT23': { pic: ' ', currentPosition: [4, 7], color: 'NONE', name: 'empty', key: 'EPT23' },
        'EPT24': { pic: ' ', currentPosition: [4, 8], color: 'NONE', name: 'empty', key: 'EPT24' },
        'EPT25': { pic: ' ', currentPosition: [5, 1], color: 'NONE', name: 'empty', key: 'EPT25' },
        'EPT26': { pic: ' ', currentPosition: [5, 2], color: 'NONE', name: 'empty', key: 'EPT26' },
        'EPT27': { pic: ' ', currentPosition: [5, 3], color: 'NONE', name: 'empty', key: 'EPT27' },
        'EPT28': { pic: ' ', currentPosition: [5, 4], color: 'NONE', name: 'empty', key: 'EPT28' },
        'EPT29': { pic: ' ', currentPosition: [5, 5], color: 'NONE', name: 'empty', key: 'EPT29' },
        'EPT30': { pic: ' ', currentPosition: [5, 6], color: 'NONE', name: 'empty', key: 'EPT30' },
        'EPT31': { pic: ' ', currentPosition: [5, 7], color: 'NONE', name: 'empty', key: 'EPT31' },
        'EPT32': { pic: ' ', currentPosition: [5, 8], color: 'NONE', name: 'empty', key: 'EPT32' },

    };

    let myBoard: board = {
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

let isEmpty = function(board: board, targetIndex: number[]) {
    return board.cells[targetIndex[0]][targetIndex[1]].pic == ' ';
}

let isOcupied = function(board: board, targetIndex: number[]) {
    return !isEmpty(board, targetIndex);
}

function bishopMove(pice: pice, board: board){
    return [[0,0]];
}

function rookMove(pice: pice, board: board){
    return [[0,0]];
}

function queenMove(pice: pice, board: board){
    return [[0,0]]
}
function kingMove(pice: pice, board: board){
    return [[0,0]];
}

function knightMove(pice: pice, board: board){
    return [[0,0]];
}

function pawnMove(pice: pice, board: board){
    return [[0,0]];
}

let optionMove = function(pice: pice, board: board): number[][] {
    let myPice = pice;
    let myBoard = board;
    let result:number[][] = [[]];
    switch (myPice.name) {
        case 'bishop':
            result = bishopMove(myPice, myBoard);
        case 'king':
            result = kingMove(myPice, myBoard);
        case 'knight':
            result = knightMove(myPice, myBoard);
        case 'pawn':
            result = pawnMove(myPice, myBoard);
        case 'queen':
            result = queenMove(myPice, myBoard);
        case 'rook':
            result = rookMove(myPice, myBoard);
        default:
            result = [[0,0]];
    }

    return result;
}

// #TODO
let vaildMove = function(board: board, pice: pice, originIndex: number[], targetIndex: number[], currentPlayer: "WHITE" | "BLACK") {

    if (currentPlayer != pice.color) {
        console.log('not your pice');
        return false;
    }

    if (isDie(pice)) {
        console.log('you pick a Die pice');
        return false;
    }

    if (isEmpty(board, originIndex)) {
        console.log('you pick a empty cell');
        return false;
    }

    if (targetIndex[0] < 0 || targetIndex[0] > 7 || targetIndex[1] < 0 || targetIndex[1] > 7) {
        console.log('out of board');
        return false;
    }

    if (board.cells[targetIndex[0]][targetIndex[1]].color == currentPlayer) {
        console.log('you cant eat your own pice');
        return false;
    }

    //check if the pice can move to the target cells

    return true;
}

let flipPlayer = function(currentPlayer: "WHITE" | "BLACK") {
    return currentPlayer == "WHITE" ? "BLACK" : "WHITE";
}



export class app {
    board: board;
    currentPlayer: "WHITE" | "BLACK";
    moveHistory: oneMoveHistory[];
    moveTimes: number;

    constructor() {
        this.board = makeChessGame();
        this.currentPlayer = "WHITE";
        this.moveHistory = [];
        this.moveTimes = 0;
    }

    // #TODO
    loadGame(saveGame: oneMoveHistory[]) {
        this.moveHistory = saveGame;
    }
    // #TODO
    saveGame() {
    }

    movePiece(fromCoord: number[], to: number[]): boolean {
        if (fromCoord.length != 2 || to.length != 2) {
            console.log('wrong input');
            return false;
        }

        let originIndex: number[] = [fromCoord[0] - 1, fromCoord[1] - 1];
        let tagetIndex: number[] = [to[0] - 1, to[1] - 1];
        let piece = this.board.cells[originIndex[0]][originIndex[1]];
        let myBoard = this.board;
        let cuPlayer = this.currentPlayer;

        if (!vaildMove(myBoard, piece, originIndex, tagetIndex, cuPlayer)) {
            console.log('not vaild move');
            return false;
        }

        if (isOcupied(myBoard, tagetIndex)) {
            //update both currentPosition
            //move the target pice to die[0,0]
            myBoard.pices[myBoard.cells[originIndex[0]][originIndex[1]].key].currentPosition = tagetIndex;
            myBoard.pices[myBoard.cells[tagetIndex[0]][tagetIndex[1]].key].currentPosition = [0, 0];

            //then move origin pice to targetIndex 
            //TODO make the key better
            let key = this.moveTimes.toString() + "EMPTY";
            myBoard.cells[tagetIndex[0]][tagetIndex[1]] = myBoard.cells[originIndex[0]][originIndex[1]];
            myBoard.cells[originIndex[0]][originIndex[1]] = myBoard.pices[key] =
                { pic: ' ', currentPosition: [originIndex[0], originIndex[1]], color: 'NONE', name: 'empty', key: key };

            this.currentPlayer = flipPlayer(this.currentPlayer);
        } else {
            let temp = myBoard.cells[tagetIndex[0]][tagetIndex[1]];

            myBoard.pices[myBoard.cells[tagetIndex[0]][tagetIndex[1]].key].currentPosition = originIndex;
            myBoard.pices[myBoard.cells[originIndex[0]][originIndex[1]].key].currentPosition = tagetIndex;

            myBoard.cells[tagetIndex[0]][tagetIndex[1]] = myBoard.cells[originIndex[0]][originIndex[1]];
            myBoard.cells[originIndex[0]][originIndex[1]] = temp;

            this.currentPlayer = flipPlayer(this.currentPlayer);
        }
        this.moveTimes++;
        return true;
    }

    getPiceFromPices(key: string) {
        return this.board.pices[key];
    }

    getPiceFromBoard(coord: number[]) {
        let x = coord[0] - 1;
        let y = coord[1] - 1;
        return this.board.cells[[x][y]];
    }

}
/* 
//////////////////////////////////////////////////////////////////////
let myApp = new app();
let testBoard = myApp.board;

console.log(printBoard(testBoard));
let b = testBoard.pices['b1'];
console.log(b);
console.log(testBoard.cells[b.currentPosition[0] - 1][b.currentPosition[1] - 1]);

 */

