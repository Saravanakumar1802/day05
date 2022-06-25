//1.a)Print odd numbers in an array

function oddnumberReturn (arr) {
    let resultArray = []
    for (let ele of arr) {
        if (ele % 2 !== 0) {
            resultArray.push(ele)
        }
    }
    return resultArray;
}
console.log(oddnumberReturn([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1019]));

//1.(b.Convert all the strings to title caps in a string array

function toTitleCase(str)  {
    return str.toLowerCase().split(' ').map(function (word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));   
    }).join(' ');
  }
  console.log(toTitleCase("im the hero of thousand stories"));


// 1.c)Sum of all numbers in an array

const add=(function(num){
	  sum=0;
	  for(let arr of num){
	  sum=sum+arr;
	}
	  console.log(sum)
  })
  add([1,2,5,6,7,79])

//1.(d)Return all the prime numbers in an array

const prime=(function(num){
	let isprime=[];
	for(let i of num){
		if(i%2!==0){
	}
	isprime.push(i);
}
return isprime
	
});
console.log(prime([3,5,7,9,2,4,6,87,8,10,17]))

//1.e)  Palindrome
const sk=(function(text){
  a=[];
   for(let key of text){
  output =key.split('').reverse().join('');
 if(output==key){
       a.push(output)
     }
 }
   console.log(a);    
});
 sk(['madam','121','123','malayalam','11011','hello']);

 //1.f) Return median of two sorted arrays of the same size

 let median=(function(value1,value2){
  arr=[...value1,...value2];
  
  for (a=0;a<arr.length;a++) {
    for (b=0;b<arr.length;b++) {
        if(arr[a]<arr[b])
        {
            temp=arr[a];
            arr[a]=arr[b];
            arr[b]=temp;
        }
    }    
  }
  index=arr.length/2;
  median=(arr[index]+arr[index+1])/2;
  return median;

});
console.log(median([1,2,3,4,5,6],[7,8,9,10]));

// 1.g)Remove duplicates from an array

function getUnique(arr){
  let uniqueArr = [...new Set(arr)];
  console.log(uniqueArr);
}
const array = [1, 2, 3, 2, 3];
getUnique(array);


//1.H)Rotate an array by k times

function RightRotate(a, n, k){
	k = k % n;

	for (let i = 0; i < n; i++) {
		if (i < k) {
			console.log(a[n + i - k] + " ");
		}
		else {
			console.log((a[i - k]) + " ");
		}
}
}
//Input
let Array = [1, 2, 3, 4, 5];
let N = Array.length;
let K = 2;

RightRotate(Array, N, K);


