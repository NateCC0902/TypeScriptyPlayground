//interface pices{
//    name: string;
//    symbol: string;
//    id: string;
//    color: "Black" | "White" | "Empty";
//}
//
//interface board{
//    cells: pices[][];
//}
//
//interface Array<T>{
//    forColorm(): void;
//  }
//class ChessBoard{
//    board_a: board = {
//        cells: [],
//    };
//    constructor(){
//        let empty: pices ={
//            name: "empty",
//            id: "00",
//            color: "Empty",
//            symbol: "○"
//        }
//        let rock_b_1: pices = {
//            name: "rock",
//            id: "01",
//            color: "Black",
//            symbol: "♜"
//        }
//        let knight_b_1: pices = {
//            name: "knight",
//            id: "02",
//            color: "Black",
//            symbol: "♞"
//        }
//        let bishop_b_1: pices = {
//            name: "bishop",
//            id: "03",
//            color: "Black",
//            symbol: "♝"
//        }
//        let rock_b_2: pices = {
//            name: "rock",
//            id: "04",
//            color: "Black",
//            symbol: "♜"
//        }
//        let knight_b_2: pices = {
//            name: "knight",
//            id: "05",
//            color: "Black",
//            symbol: "♞"
//        }
//        let bishop_b_2: pices = {
//            name: "bishop",
//            id: "06",
//            color: "Black",
//            symbol: "♝"
//        }
//        let queen_b: pices = {
//            name: "queen",
//            id: "07",
//            color: "Black",
//            symbol: "♛"
//        }
//        let king_b: pices = {
//            name: "king",
//            id: "08",
//            color: "Black",
//            symbol: "♚"
//        }
//        let pawn_b_1: pices = {
//            name: "pawn",
//            id: "09",
//            color: "Black",
//            symbol: "♟︎"
//        }
//
//        for (let index = 0; index < 7; index++) {
//            this.board_a.cells[index] = [
//    empty,empty,empty,empty,empty,empty,empty,empty
//            ];
//        }
//    this.board_a.cells[0] = [
//            rock_b_1,knight_b_1,bishop_b_1,queen_b,king_b,bishop_b_2,knight_b_2,rock_b_2
//        ];
//        this.board_a.cells[1] = [
//            
//        ]
//    }
//    getBoard(){
//        return this.board_a;
//    }
//}
//
//
//let board = new ChessBoard().getBoard();
////console.log(board.cells)
//
//function printBoard(board: board){
//    let result:string[][]=[];
//    result[0] = ['1','2','3','4','5','6','7','8']
//    board.cells.forEach((row,i)=>{
//        result[i] = [];
//        row.forEach((item,k)=>{
//            result[i][k] = item.symbol;
//            if(k === 7){
//                result[i][k] += '\n';
//            }
//        })
//    });
//
//    return result;
//}
//
//Array.prototype.forColorm = function(){
//    this[0][0] = 22;
//    return this;
//};
//let arrayboard = printBoard(board);
//console.log(arrayboard.join(''));
//
//let arr = [[1,2,3,4],[4,5,6,7]];
//console.log(arr.forColorm())
