let str ="abcba";

let rev_str = "";

for(let x = str.length-1 ; x >= 0 ; x--){
    rev_str = rev_str + str[x];
}
if(str == rev_str){
    console.log("It is a Palindrome");
}else{
    console.log("It is not a Palindrome");
}