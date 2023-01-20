type pice = {
    pic: string;
    currentPosition: number[];
}
type board = {
    cells: pice[][];
    pices: {[key:string]:pice};
}
function makeChessGame() {
    var pieces:{[key:string]:pice} = {
        'b1': {pic: '♟︎', currentPosition: [1, 3]},
        'B1': {pic: '♙', currentPosition: [8, 3]},
        'b2': {pic: '♟︎', currentPosition: [1, 6]},
        'B2': {pic: '♙', currentPosition: [8, 6]},

        'k1': {pic: '♚', currentPosition: [1, 5]},
        'K1': {pic: '♔', currentPosition: [8, 5]},

        'n1': {pic: '♞', currentPosition: [1, 2]},
        'N1': {pic: '♘', currentPosition: [8, 2]},
        'n2': {pic: '♞', currentPosition: [1, 7]},
        'N2': {pic: '♘', currentPosition: [8, 7]},

        'p1': {pic: '♟︎', currentPosition: [2, 1]},
        'p2': {pic: '♟︎', currentPosition: [2, 2]},
        'p3': {pic: '♟︎', currentPosition: [2, 3]},
        'p4': {pic: '♟︎', currentPosition: [2, 4]},
        'p5': {pic: '♟︎', currentPosition: [2, 5]},
        'p6': {pic: '♟︎', currentPosition: [2, 6]},
        'p7': {pic: '♟︎', currentPosition: [2, 7]},
        'p8': {pic: '♟︎', currentPosition: [2, 8]},

        'P1': {pic: '♙', currentPosition: [7, 1]},
        'P2': {pic: '♙', currentPosition: [7, 2]},
        'P3': {pic: '♙', currentPosition: [7, 3]},
        'P4': {pic: '♙', currentPosition: [7, 4]},
        'P5': {pic: '♙', currentPosition: [7, 5]},
        'P6': {pic: '♙', currentPosition: [7, 6]},
        'P7': {pic: '♙', currentPosition: [7, 7]},
        'P8': {pic: '♙', currentPosition: [7, 8]},

        'q1': {pic: '♛', currentPosition: [1, 4]},
        'Q1': {pic: '♕', currentPosition: [8, 4]},

        'r1': {pic: '♜', currentPosition: [1, 1]},
        'R1': {pic: '♖', currentPosition: [8, 1]},
        'r2': {pic: '♜', currentPosition: [1, 8]},
        'R2': {pic: '♖', currentPosition: [8, 8]},

        'EPT1': {pic: ' ', currentPosition: [3,1]},
        'EPT2': {pic: ' ', currentPosition: [3,2]}, 
        'EPT3': {pic: ' ', currentPosition: [3,3]},
        'EPT4': {pic: ' ', currentPosition: [3,4]},
        'EPT5': {pic: ' ', currentPosition: [3,5]},
        'EPT6': {pic: ' ', currentPosition: [3,6]},
        'EPT7': {pic: ' ', currentPosition: [3,7]},
        'EPT8': {pic: ' ', currentPosition: [3,8]},
        'EPT9': {pic: ' ', currentPosition: [6,1]},
        'EPT10': {pic: ' ', currentPosition: [6,2]},
        'EPT11': {pic: ' ', currentPosition: [6,3]},
        'EPT12': {pic: ' ', currentPosition: [6,4]},
        'EPT13': {pic: ' ', currentPosition: [6,5]},
        'EPT14': {pic: ' ', currentPosition: [6,6]},
        'EPT15': {pic: ' ', currentPosition: [6,7]},
        'EPT16': {pic: ' ', currentPosition: [6,8]},
        'EPT17': {pic: ' ', currentPosition: [4,1]},
        'EPT18': {pic: ' ', currentPosition: [4,2]},
        'EPT19': {pic: ' ', currentPosition: [4,3]},
        'EPT20': {pic: ' ', currentPosition: [4,4]},
        'EPT21': {pic: ' ', currentPosition: [4,5]},
        'EPT22': {pic: ' ', currentPosition: [4,6]},
        'EPT23': {pic: ' ', currentPosition: [4,7]},
        'EPT24': {pic: ' ', currentPosition: [4,8]},
        'EPT25': {pic: ' ', currentPosition: [5,1]},
        'EPT26': {pic: ' ', currentPosition: [5,2]},
        'EPT27': {pic: ' ', currentPosition: [5,3]},
        'EPT28': {pic: ' ', currentPosition: [5,4]},
        'EPT29': {pic: ' ', currentPosition: [5,5]},
        'EPT30': {pic: ' ', currentPosition: [5,6]},
        'EPT31': {pic: ' ', currentPosition: [5,7]},
        'EPT32': {pic: ' ', currentPosition: [5,8]},

    };

    var myBoard:board = {
        cells: [],
        pices: pieces,
    };
    Object.entries(pieces).forEach(([key, value]) => {
        if(myBoard.cells[value.currentPosition[0]-1] === undefined) {
            myBoard.cells[value.currentPosition[0]-1] = [];
        }
        myBoard.cells[value.currentPosition[0]-1][value.currentPosition[1]-1] = value;
    });


    myBoard.pices = pieces;

    return myBoard;
}
function printBoard(myBoard:board){
    let result:string[][]=[];
    result[0] = ['X','1','2','3','4','5','6','7','8']

    myBoard.cells.forEach((row,i)=>{
        result[i+1] = [];
        result[i+1][0] = (i+1).toString();
        row.forEach((item,k)=>{
            result[i+1][k+1] = item.pic;
            if(k==7){
                result[i][k+1] += '\n';
            }

        })
    });

    return result.join('');
}

//////////////////////////////////////////////////////////////////////


let rockMove = function(board: board, x:number, y:number) {
    
}

class app{
    board: board;

    constructor(){
        this.board = makeChessGame();
    }

    movePiece(piece:String,from:number,to:number){
            
    }
}
let testBoard = makeChessGame();
console.log(printBoard(testBoard));
const add = (num:number) => num + 100;
console.log(add(100));


const xf = (num:number) => num + 100;

const bb = xf;

console.log(bb(100));
