
const url = Deno.args[0];
console.log(url)
let ar = [1, 2, 3, 4, 5, 6, 7, 8];

function swap(arr:number[], i:number, j:number) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
console.log(ar);
console.log(swap(ar, 0, 7));
console.log(ar);
