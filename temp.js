let arr = [11, 12, 14, 26, 40, 41, 2, 23, 24];

// arr.reverse()

function reverseArray(arr, start, end) {
  while (start <= end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}
let n = arr.length;

reverseArray(arr, 0, n - 1);
console.log(arr.join(" "));

//////////////////

let arr = [11, 12, 14, 26, 40, 41, 2, 23, 24];

function SecondLargest(arr) {
  let firstMax = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstMax) {
      firstMax = arr[i];
    }
  }

  let secondMax = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != firstMax && arr[i] > secondMax) {
      secondMax = arr[i];
    }
  }
  console.log(secondMax);
}

SecondLargest(arr);

//////////////////
let max = Math.max(...arr);
console.log(max);

//////////////////////
let mmin = Math.min(...arr);

//////////////////////

arr.sort((a, b) => a - b);

let small = arr.shift();
let big = arr.pop();

console.log(small);
console.log(big);

//////////////////////

function getValue(a, b) {
  // console.log(a+b)
  return a + b;
}

let sum = getValue(10, 20);

console.log(sum);
//////////////////////

let arr = [1, 2, 3];
let a = "helloABC";
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i]+1

// }
// console.log(arr)

let x = a
  .split("")
  .map((c) => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()))
  .join("");
console.log(x);

let arrPlusOne = arr.map((val) => val + 1);

console.log(arrPlusOne);

//////////////////////

let arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i] + 1;
}
console.log(arr);

let arrPlusOne = arr.map((val) => val + 1);

console.log(arrPlusOne);

//////////////////////


const s = "abb_b_cc_d";
//         abbBCcD
let f = s.split("_").length

console.log(f);

//////////////////////

const s = "my name is srk";

let f = s.split(" ").length

console.log(f);

//////////////////////


const s = "S";


function lowerUpper(s) {
    // Write your code here
    return s === s.toUpperCase() ? "U" : "L";
  }

  console.log(lowerUpper(s));

//////////////////////



const passenger = "aNuRag";
const passengerLower = passenger.toLowerCase(); // "anurag"
const passengerCorrect =  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerLower[0]);
console.log(passengerLower.slice(1));
console.log(passengerCorrect);

//////////////////////

let firstname="shahrukh mustafa"

console.log(firstname.split(" "))

//////////////////////

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
                //  0      1        2       3          4
console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

//////////////////////

const months = ['Jan', 'March', 'April', 'June'];
months.splice(2, 2,);
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]


//////////////////////

let a=[8,67,5,4,23,2,13,11,3,5,4]

a.reverse()  
console.log(a)

//////////////////////

let a=[8,67,5,4,23,2,13,11,3,5,4]

a.sort((a, b) => (a-b))  
console.log(a)

//////////////////////

let num = [1, 2, 3, 4, 5, 6];
console.log(num, typeof num);

let b = num.toString();

console.log(b, typeof b);
let c = num.join("");
console.log(c, typeof c);
let r = num.pop();
console.log(num, r);
num.push(55);
console.log(num);
num.shift();
console.log(num);
num.unshift(34);
console.log(num);

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
console.log(myChildren);


//////////////////////


// main function star

    // initialise a List l1 
    List? l1 = ["Geeks","For","Geeks"]; 
        
    // initialize another List l2 using l1 
    List? l2=["Wow",...l1,"is","amazing"]; 
    
    // print List l2 
    print(l2); 

    
//////////////////////

a=5


console.log(`a : ${a}`);



//////////////////////
//////////////////////
//////////////////////
//////////////////////
//////////////////////
//////////////////////
//////////////////////
//////////////////////
//////////////////////
//////////////////////
//////////////////////
//////////////////////
//////////////////////
