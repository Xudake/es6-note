let set = new Set(['red','green','blue']);

for(let item of set.keys()){
    console.log(item);
}
// red green blue

for(let item of set.values()){
    console.log(item);
}
// red green blue

for(let item of set.entries()){
    console.log(item);
}
// ['red':'red']
// ['green':'green']
// ['blue':'blue']

console.log(Set.prototype[Symbol.iterator] === Set.prototype.values);

for(let item of set){
    console.log(item);
}

let set2 = new Set([1,2,3,4]);
set2.forEach((value,key)=>{
    console.log(key + ':' + value);
})