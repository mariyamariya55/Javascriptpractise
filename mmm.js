function polindrome(num){



    let res=num.toString()
    let numstar=res.split('').reverse().join('');
    return res===numstar
}

console.log(polindrome(121));
console.log(polindrome(124));


function polindrome1(string){

const result=string.split('').reverse().join('')

console.log(result);


}
polindrome1('mariya')
polindrome1('madam')
console.log(1214121);


let number=641
let fin=number.toString().split('').reverse().join('')
console.log(fin);



let word='look'

let str=word.toString()

let www=str.split('').reverse().join('')

console.log(str,www);
if(str===www){

    console.log(`${word}"this is a palindrome"`);
    
}else{


    console.log(`${word}"this is not a palindrome`);
    
}
let arr=[1,2,3,4,5,6,7,8,9,10]

let sum=0

for(let i=0;i<=arr.length;i++){

sum=sum+i


}

console.log(sum);

// const number2=prompt('Enter a number')

// if(number%2==0){

//     console.log('the number is even');
    
// }else{


//     console.log('the number odd');
    
// }
const  num = prompt("Enter a number: ");

//check if the number is even
if(num % 2 == 0) {
    console.log("The number is even.");
}

// if the number is odd
else {
    console.log("The number is odd.");
}


