var ispalindrome=function(x){
let x=121
let reverse=0
if(x<0){

return false

}
while(x<0){


reverse=reverse *10 + x%10
x=parseInt(x/10)

}
return x===reverse

}


