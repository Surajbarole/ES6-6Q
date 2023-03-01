// Problem 4
// Given a string swap the case and print the output
// Sample Input - Test
// Sample Output - tEST
// NOTE: Use multiple functions to achieve the result, NOT one single code block
function smallTobig(str){
//let str="Test"
let lower="abcdefghijklmnopqrstuvwxyz";
let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let bag="";
for(i=0;i<str.length;i++){
  for(j=0;j<26;j++){
    if(str[i]==lower[j]){
      bag+=upper[j]
    } else if(str[i]==upper[j]){
      bag+=lower[j]
    }
  } 
}
console.log(bag)
}
smallTobig("Test")