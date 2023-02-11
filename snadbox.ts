class person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}
type indexable = {
    [key: string]: any;
}

let p1 = new person("John");
let p2 = new person("Cena");
let p3 = new person("Randy");
let p4 = new person("Orton");
let p5 = new person("The");

let dict: { [key: number]: person } = {};

dict[1] = p1;
dict[2] = p2;
dict[3] = p3;
dict[4] = p4;
dict[5] = p5;

for (let key in dict) {
    console.log(dict[key].name);
}

function squr(x: number): number {
    return x * x;
}

function memo(fn: Function) {
    // let cache: { [key: any] :string[]} = [];
    // if(cache[fn.arguments] != undefined){
    //     return cache[fn.arguments];
    // }else{
    //     cache[fn.arguments] = fn.apply(this,arguments);
    //     return fn
    // }
}


