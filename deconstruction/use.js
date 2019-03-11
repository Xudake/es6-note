let x = 1;
let y = 2;
[x, y] = [y, x];
console.log(x, y);

function example(){
    return [1,2,3];
}

let [a,b,c] = example();
console.log(a,b,c);

function example2() {
    return {
        foo: 1,
        bar: 2
    }
}

let [foo,bar] = example();
console.log(foo,bar);

let jsonData = {
    id: 42,
    status: 'ok',
    data: [888,999]
}

let {id,status,data:number} = jsonData;
console.log(id,status,number);//42 'ok' [ 888, 999 ]