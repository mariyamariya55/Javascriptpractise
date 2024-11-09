let arr=[1,2,3,4,5,6,7,8,9,10]

let result=arr.sort((a,b) =>b-a)
    console.log(result);
    

    let array=[1,2,3,4,5,6,7,8,9,10]

    const sortedArray = array.slice().sort((a, b) => b - a);

    const secondlargst=sortedArray[1]
    console.log(secondlargst);
    

    const number=[2,4,6,8,9,10]

    let values=number.filter(e=>e !==4)

    console.log(values);
    

    function multiplication(n){

let table=[]

for(let i=1;i<=n;i++){

    let row=[]
    for(let j=1;j<=n;j++){

        row.push(i*j)
    }
    table.push(row)
}

for(let i=n-1;i>=0;i--){
    console.log(table[i].reverse().join('\t'));
    
}

    }
    multiplication(5)