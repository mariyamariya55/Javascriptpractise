// let pattern=/[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,}/
// let mail='mariya@gmail.com'
// let mail1='maric12@gmail.c'
// console.log(pattern.test(mail1));


// let arr=[1,2,3,4,5,6,7,8,9,10]

// sum=0

// for(let i=1;i<=arr.length;i++){

// sum=sum+i


// }

// console.log(sum);

// let arr1=[1,2,3,4,5,6,7,8,9,10]

// let sum=0


// for(i=1;i<=arr1.length;i++){

//     if(i%2==0){

//         sum=sum+i
        
//     }
// }
   
//     console.log(sum)

    let arr1=[1,2,3,4,5,6,7,8,9,10]

    let sum=0
    
    
    for(i=1;i<=arr1.length;i++){
    
        if(i%2!==0){
    
            sum=sum+i
            
        }
    }
       
        console.log(sum)


    let number='123'
    let final=number.split('').reverse().join('')
    console.log(final);



    
    



    
    

    
    

let num=646;


let lastdigit=num%10

console.log(lastdigit);




// let mobile={

// name:'redmi',
// color:'blue',
// price:18000,
// ram:'18gp',
// sim:"airtel",

// }

// console.log(mobile.name);
// console.log(mobile.color);
// console.log(mobile['sim']);


function createstring(){


    let word='mariya'

    let result=''

    for(let i=0;i<word.length;i++){

if((i+1)%2 !==0){
result+=word[i].toUpperCase()

}else{


    result+=word[i].toLowerCase()
}



}

return result


}
console.log(createstring());


    

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const element=numbers.findLast((element)=>element==10)

console.log(element);




let a=1245;
let b=1200;

let gcd;

while(a!=b){


    if(a>b){

        a=a-b
    }else{

        b=b-a
    }
}
gcd=a
console.log(gcd);

