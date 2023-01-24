type pice = {
    pic: string;
    currentPosition: number[];
    color: "WHITE" | "BLACK" | "NONE";
    name: string;
    key: string;
}
type board = {
    cells: pice[][];
    pices: { [key: string]: pice };
}

type oneMoveHistory = {
    moveIndex: number,
    originIndex: number[],
    targetIndex: number[],
    pice: pice,
    currentPlayer: "WHITE" | "BLACK",
    isDie: boolean,
}
export {pice, board, oneMoveHistory};
