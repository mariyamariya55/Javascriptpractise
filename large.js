function largest(str){

    let word=str.split('')

    let longword=''

    for(let i of word){
        if(word.length>longword){
            longword=word
        }
    }
}