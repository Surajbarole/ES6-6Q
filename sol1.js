// Problem 1
// Write a function isOdd which returns a boolean value based on the number is odd or not
// Use this function to print the odd numbers from 0 to a given limit(included)

function checkOdd(num){
  for(i=0;i<=num.length-1;i++){
    if(num%2==1){
      return true
    }
    return false;
  }
  
}
checkOdd(14)