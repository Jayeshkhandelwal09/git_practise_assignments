let num = 13;
let count =0;
for (let x = 0 ; x <= 13 ; x++){
    if(num%x==0){
        count++
    }
}
if(count==2){
    console.log(num,"is prime")
}else{
    console.log(num,"is not prime")
}