const add = (num: number) => num + 100;

console.log(add(100));

const xf = (num: number) => num + 100;

const bb = xf;

console.log(bb(100));


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function tryPure(arr: number[]) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] + 10);
    }

    return result;
}

function sideFun(arr:number[]){
    for (let i = 0; i < arr.length; i++) {
        arr[i] += 10;
    }
    return arr;
}

console.log(sideFun(arr));
console.log(arr);

var memo = function (f:Function) {
    var cache = new Map();

    return function (...args:any[]) {
        var key:string = JSON.stringify(args);
        if (cache.get(key)) {
        } else {
            var val = f.apply(null, args);
            cache.set(key, val);
        }
        return cache.get(key);
    }
}

var sqr = memo(function (x:number,y:number) {
    return x * y;
});

console.log(sqr(4,5));
console.log(sqr(4,5));
