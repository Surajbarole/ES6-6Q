// Problem 2
// Write code to calculate the average of an array
// If there are no items in the array it should return 0
// NOTE: Create a function to find the sum of elements in an array and use that function to find out the average

function average(){
let arr=[1,2,3,4,5];
let sum=0;
let avg=arr.length
for(i=0;i<=arr.length-1;i++){
  sum=sum+arr[i]; 
}
console.log(sum/avg) 
}
average()