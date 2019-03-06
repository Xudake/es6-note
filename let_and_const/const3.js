var constant = (obj)=>{
    Object.freeze(obj);
    // console.log(Object.keys(obj));
    Object.keys(obj).forEach((key,i)=>{
        if(typeof obj[key] == 'object'){
            constant(obj[key]);
        }
    })
    return obj;
}

const a = constant({
    name: 'xk',
    interest: {
        test: 1
    }
})

a.name=123;
a.interest.test= 333;
console.log(a);