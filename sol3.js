// Write a function to convert a character to lower case
// Use this function to convert a given word to lower case
// Use that function to convert an array of strings to array of lower case strings
// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"]

let arr= ["MA", "SA", "I", "SCH", "OOL"];
function change(arr){
  for(let i=0;i<arr.length;i++){
    let str=arr[i];
    let bag="";
    for(let j=0;j<str.length;j++){
      let val=str.charCodeAt(j);
      let ch=str.FromCharCode(val+32);
      s+=ch;
    }
    arr[i]=s;
  }
  return arr;
}
console.log(change(arr))