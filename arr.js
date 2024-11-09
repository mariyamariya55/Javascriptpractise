

// const arr=[1,2,3,4,5]

// function myFunction(a,n){


   
// console.log(arr[2]);
    


    

    
// }

// myFunction([1,2,3,4,5,6])


let number=[1,2,3,4,5,6,7,8,9,10]

let even=[]
let odd=[]
 number.map((value=>{
    if(value%2==0){

       return even.push(value)
        
        }
        else{
        odd.push(value)
      
        }
      


}))
console.log(even);
console.log(odd);
// let star=''
// let f=5
// let g=1
// while(f>=g){
//     g++;
//     star+='*'
//     console.log(star);
// }


// let i=1
// let a=5
// let str=" ";

// while(i<=5){

  
//     str=str+"*"
//      i++
//      console.log(str)
// }


// n=5
// for(let i=1;i<=5;i++){


//     let str='*';
//     let space=' ';
//     console.log(space.repeat(n-i)+str.repeat(i));
// }

n=5
for(let i=5;i>=1;i-- ){

    let str='*';

    console.log(str.repeat(i))



}



// class firstclass{

//     add(){


//         console.log("first method");
        
//     }
// }
// class secondclass extends firstclass{


//     add(){


//         console.log(30*40);
        
//     }
// }
// class thirdclass extends secondclass{


//     add(){
//         console.log('fouth method');
        
//     }
// }
// let ob1=new firstclass();
// let ob2=new secondclass();
// let ob3=new thirdclass();

// ob1.add()
// ob2.add()
// ob3.add();


// let fruits=['apple','mango','lemon','orange']

//  var frutu=fruits.filter((e)=>{

//   return e=='lemon'


//   l


// })
// console.log(frutu);






// let arr2=[1,2,3,4,5,6,7,8]
// let num=[]
// var dsp=arr2.map((s)=>{

// return s*3


// })
// // console.log(dsp);
//  let fin=num.push(dsp)
// console.log(fin);

// let number=[1,2,3,4,5,6,7]
// let number2=[]
// number.map((n)=>{
//     console.log(n*2);
//   let result= (n*3);
//   number2.push(result)
// })

// console.log(number2);

// let mappedNumber= number.map((n)=>{
//     return n*3
 
// })
// console.log(mappedNumber);


let number3=[1,2,3,4,5,6,7,8,9]
let number4=[]

number3.map((d)=>{

console.log(d*4)


let result=d+"e"
number4.push(result)

})
console.log(number4);


let numbers=10

console.log(Math.random(Math.fround() *10));
console.log(numbers);

