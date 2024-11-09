let a=10;
let b=20
let c=a+b
console.log(a+b);


function find(arr){

    let total=0;
    
    for(let i=0;i<arr.length;i++){

        total=total+arr[i]
    }
    return total
}
const num=[1,2,3,4,5,6,7,8,9,10]

let sum=find(num)
console.log(sum);


// let array=[1,2,3,4,5]
// let sum1=0

// for(let i=0;i<array.length;i++){

//     sum=sum+array[i]
//     console.log(sum);
    
// }

// let array = [1, 2, 3, 4, 5];
// let sum1 = 0;

// for (let i = 0; i < array.length; i++) {
//     sum += array[i]; // Same as sum = sum + array[i];
// }

// console.log(sum); // This will print the total sum of the array


let name1='yashmi'
// let name1='kerthi'

let val=name1.charAt(0).slice(0,1).toUpperCase().concat()
