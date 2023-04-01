//---------------------------Intro-----------------------------------------------------------------
console.log("I Like Pizza");
console.log("Its really good")
window.alert("Hi");
//this is a comment

--multiple comment


 

// -------------------------------Declaration variables---------------------------------
//number
let age;
age=10;
console.log(age)
//string
let name="21";
console.log(1+name);
//boolean 
let b=true;
console.log(b);
console.log("Hello bro u are",age,"years old")
document.getElementById("p1").innerHTML="Hello" + name;
document.getElementById("p2").innerHTML="You are"+age+"Years old;"
document.getElementById("p3").innerHTML="Enrolled:"+b




//-------------------------------Arithmetic expression-----------------------------
//combination of operands and operators(+ - * / %)
let a=6;
let b=5;
a=a+b
a+=4
console.log(a);
//operators precedence
 1.parenthesie()
   2.exponents
   3.multi & divi
   4.add & sub
///





//------------------------------window promt text box---------------------------------------------
// let username=window.prompt("Tell yr name");
// console.log(username)
let username;
    document.getElementById("mybotton").onclick=function(){
     username=document.getElementById("myText").value
console.log(username)
document.getElementById("mylable").innerHTML="Hello "+username;
    }


    //------------------------Type-Conversiob-----------------------------------------------
 let age=window.prompt("hwo old are u");
 age=Number(age);
 age+=1;
 console.log("Hay",age,"ndns")
 console.log(typeof age);
 


 //-----------------------constants----------------------------------------------------

 const pi=3.14;//fixed
 let radius;
 let circumference;
 radius=window.prompt("ENter the radius");
 radius=Number(radius);
 circumference=2*pi*radius;
 console.log(circumference);
 



 //---------------------Math----------------------------------------------------------
 let x=3.14;
 x=Math.round(x);
 x=Math.pow(x,2);
 x=Math.ceil(x);
 x=Math.floor(x);
 x=Math.sqrt(x);
 x=Math.abs(x);
 x=Math.max(7,8,9,10);
 x=Math.min(7,8,9,10);
 x=Math.PI;
console.log(x);


//examples 1
// let a;
// let b;
// let c;
// a=window.prompt("Enter side a");
// a=Number(a);
// b=window.prompt("Enter side b");
// b=Number(b)
// c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
// console.log(c)
let a;
let b;
let c;
document.getElementById("submi").onclick=function()
{
      a=document.getElementById("at").value;
    b=Number(document.getElementById("bt").value);
    c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
    document.getElementById("Lable3").innerHTML="Side c :"+ c;
    
}

//example 2
//counter programs

let count=0;
document.getElementById("db").onclick=function(){
    count-=1;
    document.getElementById("lb").innerHTML=count
}
document.getElementById("res").onclick=function(){
    count=0;
    document.getElementById("lb").innerHTML=count
}
document.getElementById("inc").onclick=function(){
    count+=1;
    document.getElementById("lb").innerHTML=count
}*/




//----------------------------String------------------------------------------------------
let name="SUresh";
val=name.length;
val=name.charAt(0);
val=name.indexOf('U')
val=name.lastIndexOf('U')
val=name.trim();
val=name.toUpperCase();
val=name.replaceAll('U',"1")
console.log(val);



//-----------------slice-------------------------------------------------------
let f="suresh";
k=f.slice(0,2);
console.log(k)






//---------------------------------Method chaining-------------------------------------
//calling one method after another in continuos line of code
let u="Hello";
u=u.toLowerCase().charAt(0)
console.log(u);




//-----------------------------------------------If StateMent------------------------------------
let age=2;
if(age>=18){
    console.log("you are an adult");
}
else if(age<0)
{
    console.log("not born yet");
}
else
{
    console.log("child")
}




//------------------------------------operation with  checkbox---------------------
document.getElementById("submit").onclick=function(){
    if(document.getElementById("checkbox").checked)
    {
        console.log("Yor are not subscribed");
    }else console.log("Not clicked")
}



//-------operation with radio----------------------------------
document.getElementById("submit").onclick=function(){
const a=document.getElementById("a");
const b=document.getElementById("b");
const c=document.getElementById("c");
if(a.checked)console.log("A tounched");
else if(b.checked)console.log("B touc")
else if(c.checked)console.log("C touched");
else console.log("tounch any card");
}




//-------------------switch-----------------------------------------
let grade="c";
switch(grade){
    case "a":
        console.log("A");
        break;
    case "b":
        console.log("B");
        break;
    default:
        console.log("Not touched");
}




// -------------------logical // Gives us the ability to check more than 1 condition concurrently
// && AND (BOTH conditions must be true)
// || OR (Either condition can be true)

let temp = 15;
let sunny = false;

if(temp > 0 && temp < 30 && sunny){
    console.log('The weather is good!');
}
else{
    console.log('The weather is bad!');
}

// ! NOT logical operator
// typically used to reverse a condition's boolean value
// true -> false  false -> true

let temp = 15;
let sunny = false;

if(!(temp > 0)){
    console.log("It's cold outside");
}
else{
    console.log("It's warm outside");
}

if(!sunny){
    console.log("It's cloudy outside");
}
else{
    console.log("It's sunny outside");
}



//---------------------while loop-------------------------------------------------
// while loop = repeat some code 
//                       while some condition is true
//                       potentially infinite

let userName = "";

while(userName == "" || userName == null){
    userName = window.prompt("Enter your name");
}

console.log("Hello", userName);

// do while loop = do something,
//                             then check the condition,
//                             repeat if condition is true

let userName;

do{
    userName = window.prompt("Enter your name");
}while(userName == "")

console.log("Hello", userName);







//------------------for loops----------------------------------------
// for loop = repeat some code a 
//            certain amount of times

for(let i = 1; i <= 10; i+=1){
    console.log(i);
}

for(let i = 10; i > 0; i-=1){
    console.log(i);
}

console.log("HAPPY NEW YEAR!");

// break = breaks out of a loop entirely
// continue = skip an iteration of a loop

for(let i = 1; i <= 20; i+=1){
    if(i == 13){
        //break;
        //continue;
    }
    console.log(i);
}


//nexted loop---------->loop inside another loop



//----------------------------function---------------------------------------------------------
//function = Define code once, and use it many times.
//                   To perform some code, call the function name.

startProgram();

function startProgram(){
    let userName = "Bro";
    let age = 21;
    
    happyBirthday(userName, age);
}

function happyBirthday(userName, age){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log("Happy birthday dear", userName);
    console.log("Happy birthday to you!");
    console.log("You are", age,"years old!");
}

// return statements returns some values

//ternary operator 
// ternary operator = Shortcut for an 'if/else statement'
//                                  Takes 3 operands
 
//                    1. a condition with ?
//                    2. expression if True :
//                    3. expression if False






//------------------------------variable scope---------------------------------------
// variable scope = where a variable is accessible

// let = variables are limited to block scope {}
// var = variables are limited to a function(){}

for(let i = 1; i <= 3; i+=1){
    //console.log(i);
}
for(var i = 1; i <= 3; i+=1){
    //console.log(i);
}

console.log(i);
*/



//--------------------------template literals-----------------------------------
// Template literals = delimited with (`)
//                                   instead of double or single quotes
//                                   allows embedded variables and expressions

//console.log("Hello", userName);
//console.log("You have", items, "items in your cart");
//console.log("Your total is $", total);


//console.log(`Hello ${userName}`);
//console.log(`You have ${items} items in your cart`);
//console.log(`Your total is $${total}`);
*/

//toLocaloeString("en-Us")




//---------------------------------ARRAYS-------------------------------------------------------
// array = think of it as a variable 
//              that can store multiple values

let fruits = ["apple", "orange", "banana"];

//fruits[2] = "coconut";

//fruits.push("lemon");      //add an element
//fruits.pop();                     //removes last element
//fruits.unshift("mango"); //add element to beginning
//fruits.shift();                   //removes element from beginning

//let length = fruits.length;
//let index = fruits.indexOf("kiwi");

console.log(fruits);


//---------FOR OF-----
let prices = [5, 10, 15, 20, 25];


for(let i = 0; i < prices.length; i+=1){
    console.log(prices[i]);
}


for(let price of prices){
    console.log(price);
}
//------------------------------------------------SORT----------------
let fruits = ["banana", "apple", "orange", "mango"];

fruits = fruits.sort();
//fruits = fruits.sort().reverse();

for(let fruit of fruits){
    console.log(fruit);
}



//------------------------------2D-ARRAY----------------------------------------------------
let fruits =           ["apples", "oranges", "bananas"];
let vegetables = ["carrots", "onions", "potatoes"];
let meats =         ["eggs", "chicken", "fish"];

let groceryList = [fruits, vegetables, meats];

groceryList[2][2] = "steak";

for(let list of groceryList){
    for(let food of list){
        console.log(food);
    }
}





//---------------------------------SPREAD OPERATOR-----------------
// spread operator = allows an iterable such as an 
// ...                             array or string to be expanded 
//                                 in places where zero or more 
//                                 arguments are expected
//                                (unpacks the elements)

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let maximum = Math.max(...numbers);
console.log(maximum);




let class1 = ["Spongebob", "Patrick", "Sandy"];
let class2 = ["Squidward", "Mr.Krabs", "Plankton"];
class1.push(...class2);
console.log(...class1);






//----------------------------REST PARAMETER----------------------------------
// rest parameters = represents an indefinite number
// ...                             of parameters
//                                (packs arguments into an array)

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum(a, b, c, d, e));

function sum(X,Y,...numbers){
    let total = 0;
    for(let number of numbers){
        total += number
    }
    return total
}






//------------------------CALLBACK----------------------------------------------------
// callback = a function passed as an argument
//                    to another function.
 
//    Ensures that a function is not going
//    to run before a task is completed.
//    Helps us develop asynchronous code.
//    (When one function has to wait for another function)
//    that helps us avoid errors and potential problems
//    Ex. Wait for a file to load

sum(2, 3, displayConsole);

function sum(x, y, callBack){
  let result = x + y;
  callBack(result);
}

function displayConsole(output){
  console.log(output);
}

function displayDOM(output){
  document.getElementById("myLabel").innerHTML = output;
}



//-----------------------------aRRAY.FOREACH()----------------------------------------
//array.forEach() = executes a provided callback function
//                              once for each array element

let students = ["spongebob", "patrick", "squidward"];
students.forEach(capitalize);
students.forEach(print);

function capitalize(element, index, array){
    array[index] = element[0].toUpperCase() + element.substring(1);
}

function print(element){
    console.log(element);
}






//-----------------------------------------------------ARRAY.MAP()-----------------------------------
//array.map() = executes a provided callback function
//                         once for each array element
//                         AND creates a new array

let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(square);
let cubes = numbers.map(cube);

//numbers.forEach(print);
//squares.forEach(print);
//cubes.forEach(print);

function square(element){
    return Math.pow(element, 2);
}
function cube(element){
    return Math.pow(element, 3);
}
function print(element){
    console.log(element);
}






//-------------------------------ARRAY.FILTER()-----------------------------------------------------
//array.filter() = creates a new array with all elements 
//                         that pass the test provided by a function

let ages = [18, 16, 21, 17, 19, 90];
let adults = ages.filter(checkAge);

adults.forEach(print);

function checkAge(element){
    return element >= 18;
}
function print(element){
    console.log(element);
}





//------------------------------------ARRAY.REDUCE()-----------------------------------------
//array.reduce() = reduces an array to a single value            

let prices = [5, 10, 15, 20, 25, 30];
let total = prices.reduce(checkOut);

console.log(`The total is: $${total}`);

function checkOut(total, element){
    return total + element;
}




//-----------------------------------------FUNCTION EXPRESSION--------------------------------------
// function expression = function without a name (anonymous function)
//                                        avoid polluting the global scope with names
//                                        write it, then forget about it
// ------------ Example 1 ------------
const greeting = function(){
    console.log("hello");
}
greeting();
// ------------ Example 2 ------------
let count = 0;

document.getElementById("increaseButton").onclick = function(){
    count+=1;
    document.getElementById("myLabel").innerHTML = count;
}
document.getElementById("decreaseButton").onclick = function(){
    count-=1;
    document.getElementById("myLabel").innerHTML = count;
}




// ----------------ARROW FUNCTION----------------------------
// arrow function expression = compact alternative to a traditional function expression
//      =>

const grades = [100, 50, 90, 60, 80, 70];

grades.sort((x, y) => y - x);
grades.forEach((element) => console.log(element));
*/




//--------------------NESTED FUNCTION--------------------------------
// nested functions = Functions inside other functions.
//                                   Outer functions have access to inner functions.
//                                   Inner functions are "hidden" from outside.
//                                   used in closures (future video topic)
 
let userName = "Bro";
let userInbox = 0;

login();

function login(){
    displayUserName();
    displayUserInbox();

    function displayUserName(){
        console.log(`Welcome ${userName}`);
    }
    function displayUserInbox(){
        console.log(`You have ${userInbox} new messages`);
    }
}





//------------------------------------CLOSURE FUNCTION--------------------------------------
// closure =  A function with preserved and private data.
//                   Gives you access to an outer function’s scope,
//                   from an inner function.

document.getElementById("loginButton").onclick = login();

//userInbox = 420.69;

function login(){
    let userName = "Bro";
    let userInbox = 1;

    function alertUser(){
        alert(`${userName} you have ${userInbox} new messages!`);
        userInbox = 0;
    }

    return alertUser;
}


//----------------------------------MAP------------------------------------------
// Map = object that holds key-value pairs of any data type

const store = new Map([
  ["t-shirt", 20],
  ["jeans", 30],
  ["socks", 10],
  ["underwear", 50]
]);

//store.get("t-shirt");
//store.set("hat", 40);
//store.delete("hat");
//console.log(store.has("underwear"));
//console.log(store.size);

store.forEach((value, key) => console.log(`${key} $${value}`));
























