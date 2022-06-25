// 3.a)  Print odd numbers in an array

[1,2,3,4,7,9,8].forEach((num) => num % 2 !== 0 && console.log(num));

//3. b ) Convert all the strings to title caps in a string array

sk = (str) => {
  return str.toLowerCase().split(' ').map(function (word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}
console.log(sk("im the hero of thousand stories"));


//3(c.Sum of all numbers in an array

const add=((num)=>{
  let sum=0;
  for(let add of num){
  sum=sum+add;
  }
  return sum
});
console.log(add([1,2,3,4,5]));


// 3.(d  Return all the prime numbers in an array

numArray =(number) => {
  var arr=[];
  for(let n of number) {
    if (n % 2 !== 0) {
      arr.push(n)
    }
     
  }  
    console.log(arr);
  
   
};
numArray([1,2, 3, 4, 5, 6, 7, 8, 9, 10,]);

// 3.e) palindrome
const palindrome=((data)=>{
arr=[];
for(let str of data){
  let output=str.split('').reverse().join('')
  if(output===str){
  arr.push(output)
}
}
console.log(arr)
});
palindrome(['111','mam','hello','saravana',"able was i ere i saw elba"])

