let str='letter'

let obj={

}

for(let char of str){
    console.log(char);
    

    obj[char]=obj[char] ? obj[char]+1 : 1
}
// obj['name']='yasmin'

console.log(obj);

