function move({x=0,y=0}={}){
    return [x,y];
}

console.log(move({x:3,y:8}))
console.log(move({x:3}))
console.log(move({}))
console.log(move())
// [3, 8]
// [3, 0]
// [0, 0]
// [0, 0]

function move2({x,y}={x:0,y:0}){
    return [x,y]
}

console.log(move2({x:3,y:8}))
console.log(move2({x:3}))
console.log(move2({}))
console.log(move2())
// [3, 8]
// [3, undefined]
// [undefined, undefined]
// [0, 0]