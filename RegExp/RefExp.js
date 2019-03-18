var str = '234 dsf 456fsfewr 123dde--789lsdf';
var tmp = '';
var arr = [];
for(var i=0;i<str.length;i++){
    if(str.charAt(i)>='0' && str.charAt(i)<='9'){
        tmp += str.charAt(i);
    }else{
        if(tmp){
            arr.push(tmp);
            tmp='';
        }
    }
}

console.log(arr);
console.log(str.match(/\d+/g));