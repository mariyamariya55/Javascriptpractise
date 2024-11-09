function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  
 
  console.log(capitalizeWords("yashmi,marya")); // Output: "Hello World From Javascript"




  let words="hi hlo vanakam"

  let result=words.split(' ')
 let value=result.charAt(0).toUpperCase()+result.slice(1).join('')

 console.log(value);
 