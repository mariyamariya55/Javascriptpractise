// function prime(num){

//     if(num<=1){
//         return false
//     }
//     for(let i=2;i<=num;i++){

//         if(num%2==0){

//             return false
//         }
    
// return true
// }


// }
// prime(7)
// ?console.log("this is a prime")
// :console.log("nota a prime");


function fiboncci(numbers){


    let a=0;
    let b=1;
    
    console.log(a);
    console.log(b);
    
    
    for(let i=2;i<numbers;i++){
        c=a+b;
        console.log(c);
        a=b;
        b=c;
        
    }
    
   
}
fiboncci(5)

function polinrome(name){
    return name.split('').reverse().join('')
    
}
const val="anna"
console.log(polinrome(val));

function findDuplicates(arr) {

return arr.filter((item,index)=>
    arr.indexOf(item) !==index
)
}

const num=[1,2,3,4,5,1,2,6,7,3]
console.log(findDuplicates(num));


function validate(email){

    return email.test()
}
let pattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log(validate(pattern));


