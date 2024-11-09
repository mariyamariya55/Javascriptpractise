function isprime(n){
if(n<=1){

    return false
}
for(let i=2;i<n;i++){

    if(n%i==0){

        return false
       
    }
} return true

}
isprime(4)
?console.log('true')
:console.log("false")


let str=''
let i=1;
n=5
while(i<=5){
    str=str+'*'



i++;
console.log(str)
}


let letter="mind,power,mix"

let erp=letter.substring(11,14)

console.log(erp);

let eef="red,rose,black,brown"

let fds=eef.substr(4,4)
console.log(fds);

let str1="mouse,teeh,ear,hand,ice,fingure"

let pet=str1.replace("ice","leaf")
console.log(pet);


let fruit="mango,'lemon,orange,banana,apple,apple"

let gdf=fruit.replaceAll("apple","tomoto")
console.log(gdf);


const user={
    'name':"kerthi",
    'age':25,
    'color':'red',
    



}
const {name}=user
console.log(name);


const arr = [1, 2, 3, 4, 5];

const first = arr[0]; // Extracting the first element
const grt = arr.slice(2); // Collecting the rest of the elements

console.log(grt);


// console.log("First element:", first); // 1
//  console.log("Rest of the elements:"); // [2, 3, 4, 5]


let camel="gt software college"
let res=camel.toUpperCase()
console.log(res);

let name1='MARIYA ROSE IMLDA'
let res1=name1.toLowerCase()
console.log(res1);

let name2='gt software college';
let name3="glacier technology"

console.log(name2.concat(name3));

let call="   kerthiyashmi    "

let nll=call.trim()
console.log(call.length);

console.log(nll.length);


let str11="  power"
console.log(str11);

let ptr=str11.trimStart()
console.log(ptr);


let str12="kerthi   "

console.log(str12);

let ptr1=str12.trimEnd()
console.log(ptr1);



let str43= "Chennai";

str43=str43.padStart(12, "Salam");
    
console.log(str43);



// Define a string variable 
let stone = "Soul";

// Use the padStart() method to add padding characters "Mind "
//to the beginning of the string 'stone' 
stone = stone.padStart(9, "Mind ");

// Output the resulting string after padding
console.log(stone);


let brand='city'

brand= brand.padEnd(7 ,"car")
console.log(brand);


let brand1="gt sofrware college"

let sell="academy in gt"

console.log(brand1.charAt(3));

console.log(sell.charAt(5).toUpperCase())


let coll="kg college of arts and science"
console.log(coll.split(","));





// let date=new Date()
// console.log(date);
// let minutes=new Date()
// console.log(minutes);



let today=new Date()

let minutes=today.getDay()
console.log(minutes);



