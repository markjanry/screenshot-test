//what will be logged to the console?
var a = ['dog', 'cat', 'hen'];
a[100] = 'fox';
console.log(a.length);// 101 is the output,highest index is 100 

//next test
let animals = [{type:"lion" }, "tiger"];
let clones = animals.slice();

clones[0].type = "bear";
clones[1] = "sheep";

console.log(animals[0].type, clones[0].type);
console.log(animals[1], clones[1]); //output will be "bear bear tiger sheep"

//what is the diffrence between the map() and the forEach() methods on the array prototype?
// the correct answer is the 1st one: map() methods returns new array and forEach() does not

//what is this code print to the console?
const myFunc = () => {
  const a = 2;
  return () => console.log("a is " + a);
};
const a = 1;
const test = myFunc();
test();// output is " a is 2"

//what will be this code log to the onsole?

const myNumbers = [1, 2, 3, 4, 5, 6, 7];
const myfunction = arr => {
  return arr.map(x => x +3).filter(x => x < 7);
}
console.log(myfunction(myNumbers));// the correct output is [4,5,6]

//which line could you add to this code to print "wild animals" to the console?

let animals = ["kangaroo", "bear", "coyote"];
//Missing line 
if(animals.map(key).join("") === "key") {
  console.log("wild animals");
} //output const key = animals.reduce((acc, animal) => acc + animal[0], "");

//which statement isa applicable to the "defer" attirubte of the HTML <script> tag?
// output is- it allows the browser to continue the page while the script loads in the background

//which choice is a valid of an arrow function,assuming returned is defined in the outer scope?
a,b =>{
  return;
}

//which line is missing from this code if you expect the code to evaluate to true?
var compare = fucntion(test1, test2) {
// return test1===test2;
}
compare(1078,"1078");// yeilds true

//which choice is not "array" method?
/* the corrrect answer is array.raplace() becuase it does not exist.
samples are :
array.shift, array.pop , array.slice, array.unshift, array.concat, array.map, array.filter, array.splice, array.reduce
array.push*/

//which method of  a class is called to initialized an object of the class?
class MyClass {
  constructor(parameter1, parameter2) {
    // This is the constructor method.
    // It initializes the object's properties.
    this.property1 = parameter1;
    this.property2 = parameter2;
  }

  // Other methods can be defined within the class as well.
  myMethod() {
    // Method logic here
  }
}

// Creating an object of MyClass using the constructor
const myObject = new MyClass('value1', 'value2');

//what does thos code print to the console?
const x = [1,2];
const y = [5,7];
const z = [...x, ...y];
console.log(z); // [1,2,5,7] output

  //which method call is chained to handle successful response returned by fetch()?
  //output is then() allows you to create a sequence of actions to perform when the fetch operation succeeds.


