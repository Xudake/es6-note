for(let codePoint of 'foo'){
    console.log(codePoint);
}
//f
//o
//o

let s = '𠮷';

for(var i=0;i<s.length;i++){
    console.log(s[i]);
}

//�
//�

for(let code of s){
    console.log(code);
}

//𠮷
