function printSquare(size) { 
    for (let i = 1; i <= size; i++) { 
        let line = ""; 
        for (let j = 1; j <= size; j++) { 
            line += '*'; 
        } 
        console.log(line); 
    } 
} 

printSquare(5)

 function printSquare(size){

    for(let i=1;i<=size;i++){


        let line="";
        for(let j=1;j<=size;j++){


line +="*";



        }

        console.log(line);
    }




}
printSquare(5)


let word="madam"
let rev=word.split('').reverse().join('')
if(word===rev){

    console.log("It s a palindrome");

    
    
}else{

    console.log('Its not a palindrome');
    
}

function createString() {
    const str = 'aBcDeF'; // Example string
    let result = '';

    for (let i = 0; i < str.length; i++) {
        if ((i + 1) % 2 !== 0) {
            result += str[i].toUpperCase(); // Odd positions (1-based index)
        } else {
            result += str[i].toLowerCase(); // Even positions (1-based index)
        }
    }

    return result;
}


console.log(createString())


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Find the number with the last digit of 0
// const lastdigit1 = numbers.find((num)=>{


//     result nummber%10==0
// })

// // Output the result
// console.log(result);