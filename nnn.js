function showFunctionScope() {
    if (true) {
        var topic = "JavaScript";
    }
    console.log(topic);
}

showFunctionScope();


var j='{"name":"roselien","Email":"xyz","cn":"1234"}'

var data=JSON.parse(j)
// console.log(data);
console.log(data.Email);

// var j='{"name":"roselien","Email":"xyz","cn":"1234"}'


var data=JSON.stringify(j)
console.log(data);


// var removedJson=JSON.parse(j)
// console.log(removedJson);


var obj = {"first_name" : "Sammy", "last_name" : "Shark", "location" : "Ocean"}

var s = JSON.stringify(obj)
console.log(s);

var o=JSON.parse(s)
console.log(o.last_name)

var x = 1;

if (x === 1) {
//   var x = 2;

  console.log(x);
  // Expected output: 2
}

console.log(x);
// Expected output: 2
var bar = 111;
function doSomething() {
    console.log(bar); // undefined
  
    console.log(bar); // 111
  }

  myval=10

  function myfun(){
    console.log(myval);


  }
  myfun();
  
  sum=0

  for(let i=0;i<=10;i++){
    sum=sum+i;


  }


  console.log(sum);


  for(let i=1;i<=5;i++){

let str='5'

console.log(str.repeat(i));


  }


  function pattern(n){

for(let i=1;i<=5;i++){

let line=''
for(let j=1;j<=i;j++){

line=line+j

}
console.log(line);


}

  }
  pattern(5)
  

  let college='Gt SOFTWARE ACADEMY'

  let pattern1=/gt software academy/i

  let res=college.match(pattern1)
  console.log(res);


  let text='race course'
  let s3=text.search('course')
  console.log(s3);
  

  let text4 = "Visit W3Schools";
let n = text4.search(/w3schools/i);
console.log(n);

  function myfunction(){

let text5="please visit microsoft"
let ccc=text5.replace('microsoft' ,'javascript')
console.log(ccc);


  }
  myfunction()



  let letter='Hello world hi World'

  let fill=/hello world/gi
  let resss=letter.match(fill)
  console.log(resss);
  
  
let ggg=/rat/
let hhh=ggg.test('rat the animal')
console.log(hhh);


let kk=/abcdef/

let mmm=kk.exec('abcdefg')
console.log(mmm);




