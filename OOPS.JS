//----------------------------OBJECT ORIENTED PROGRAMMING---------------------------------------------------------------------------------------
// object = A group of properties and methods
//                properties = what an object has
//                methods = what an object can do
//                use . to access properties/methods

const car1 = {
    model:"Mustang",
    color:"red",
    year:2023,

    drive : function(){
        console.log("You drive the car");
    },
    brake : function(){
        console.log("You step on the brakes");
    }
}
const car2 = {
    model:"Corvette",
    color:"blue",
    year:2024,

    drive : function(){
        console.log("You drive the car");
    },
    brake : function(){
        console.log("You step on the brakes");
    }
}

console.log(car1.model);
console.log(car1.color);
console.log(car1.year);
car1.drive();
car1.brake();




//--------------THIS KEYWORD----------------------------------
// this = reference to a particular object
//           the object depends on the immediate context

const car1 = {
    model:"Mustang",
    color:"red",
    year:2023,

    drive : function(){
        console.log(`You drive the ${this.model}`);
    }
}
const car2 = {
    model:"Corvette",
    color:"blue",
    year:2024,

    drive : function(){
        console.log(`You drive the ${this.model}`);
    }
}

car1.drive();
car2.drive();





//----------------------CLASSES---------------------
----------------
// class = a blueprint for creating objects
//              define what properties and methods they have
//              use a constructor for unique properties

class Player{

    score = 0;

    pause(){
        console.log("You paused the game");
    }
    exit(){
        console.log("You exited the game");
    }
}

const player1 = new Player();
const player2 = new Player();
const player3 = new Player();
const player4 = new Player();

player1.score += 1;

console.log(player1.score);
console.log(player2.score);

player1.pause();
player2.exit();




//----------------------CONSTRCUTOR----------------------------------------------------
/ constructor = a special method of a class,
//                          accepts arguments and assigns properties

class Student{

    constructor(name, age, gpa){
        this.name
 = name;
        this.age = age;
        this.gpa = gpa;
    }
    study(){
        console.log(`${this.name} is studying`);
    }
}

const student1 = new Student("Spongebob", 30, 3.2);
const student2 = new Student("Patrick", 35, 1.5);
const student3 = new Student("Sandy", 27, 4.0);

console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);
student1.study();

console.log(student2.name);
console.log(student2.age);
console.log(student2.gpa);
student2.study();

console.log(student3.name);
console.log(student3.age);
console.log(student3.gpa);
student3.study();




//--------------------------STATIC-------------------------------------------
/ static = belongs to the class, not the objects
//               properties: useful for caches, fixed-configuration
//               methods:    useful for utility functions

class Car{

    static numberOfCars = 0;

    constructor(model){
        this.model = model;
        Car.numberOfCars += 1;
    }
    static startRace(){
        console.log("3...2...1...GO!");
    }
}

const car1 = new Car("Mustang");
const car2 = new Car("Corvette");
const car3 = new Car("BMW");

console.log(Car.numberOfCars);
Car.startRace();



//--------------------INHERITANCE--------------------------------------------------------------------
// inheritance = a child class can inherit all the 
//                        methods and properties from another class

class Animal{

    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{

    name = "rabbit";

    run(){
        console.log(`This ${this.name} is running`);
    }
}
class Fish extends Animal{

    name = "fish";

    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}
class Hawk extends Animal{

    name = "hawk";

    fly(){
        console.log(`This ${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();




//--------------------------SUPER-----------------------------------------------------
// super = Refers to the parent class. 
//               Commonly used to invoke constructor of a parent class

class Animal{
    
    constructor(name, age){
        this.name
 = name;
        this.age = age;
    }
}
class Rabbit extends Animal{

    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }
}
class Fish extends Animal{

    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
}
class Hawk extends Animal{

    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }
}

const rabbit = new Rabbit("rabbit", 1, 40);
const fish = new Fish("fish", 2, 80);
const hawk = new Hawk("hawk", 3, 200);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);




//-----------------GETTER AND SETTER----------------------------------------
// get = binds an object property to a function 
//          when that property is accessed
// set = binds an object property to a function
//          when that property is assigned a value

class Car{
    constructor(power){
        this._gas = 25;
        this._power = power;
    }
    get power(){
        return `${this._power}hp`;
    }
    get gas(){
        return `${this._gas}L (${this._gas / 50 * 100}%)`;
    }
    set gas(value){
        if(value > 50){
            value = 50;
        }
        else if(value < 0){
            value = 0;
        }
        this._gas = value;
    }
}

let car = new Car(400);

car.gas = 100;

console.log(car.power);
console.log(car.gas);



//-----------------------ERROR HANDLING-------------------------------------------------------------

// error = object with a description of 
//             something that went wrong

// throw = executes a user-defined error

try{
    let x = window.prompt("Enter a #");
    x = Number(x);
  
    if(isNaN(x)) throw "That wasn't a number!";
    if(x == "") throw "That was empty!";
  
    console.log(`${x} is a number`);
  }
  catch(error){
    console.log(error);
  }
  finally{
    console.log("This always executes");
  }


//-------------------------SETTIMEOUT()---------------------------------------------
// setTimeout() = invokes a function after a number of milliseconds            
//                            asynchronous function (doesn't pause execution) 

let item = "cryptocurrency";
let price = 420.69;

let timer1 = setTimeout(firstMessage, 3000, item, price);
let timer2 = setTimeout(secondMessage, 6000);
let timer3 = setTimeout(thirdMessage, 9000);

function firstMessage(item, price){
    alert(`Buy this ${item} for $${price}`);
}
function secondMessage(){
    alert(`This is not a scam!`);
}
function thirdMessage(){
    alert(`DO ITT!`);
}
document.getElementById("myButton").onclick = function(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert(`Thanks for buying <3`);
}



//---------------------------------SETTIMEINTERVAL--------------------------------------------------------
// setInterval() = invokes a function repeatedly after no. of milliseconds
//                          asynchronous function (doesn't pause execution) 

let count = 0;
let max = window.prompt("Count up to what #?");
max = Number(max);
const myTimer = setInterval(countUp, 1000);

function countUp(){
    count+=1;
    console.log(count);
    if(count >= max){
        clearInterval(myTimer);
    }
}



//----------------DATD CLASS-------------------------------------------
/ The Date object is used to work with dates & times

let date = new Date();
//let date = new Date(0);
//let date = new Date(2023, 0, 1, 2, 3, 4, 5);
//let date = new Date("January 1, 2023 00:00:00");
/*
let year = date.getFullYear();
let dayOfMonth = date.getDate();
let dayOfWeek = date.getDay();
let month = date.getMonth();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let ms = date.getMilliseconds();
*/
/*
date.setFullYear(2024);
date.setMonth(11);
date.setDate(31);
date.setHours(23);
date.setMinutes(1);
date.setSeconds(30);
date.setMilliseconds(0);
*/

date = date.toLocaleString();
document.getElementById("myLabel").innerHTML = date;

function formatDate(date){
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${month}/${day}/${year}`
}
function formatTime(date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amOrPm = hours >= 12 ? "pm" : "am";

    hours = (hours % 12) || 12;

    return `${hours}:${minutes}:${seconds} ${amOrPm}`
}


//--------------------------------------------SYNCHRONOUS-----------
//--------------------------------------------ASYNCHRONOUS----------
// synchronous code = In an ordered sequence.
//                                      Step-by-step linear instructions
//                                     (start now, finish now)
 
// asynchronous code = Out of sequence.
//                                        Ex. Access a database
//                                              Fetch a file
//                                              Tasks that take time
//                                        (start now, finish sometime later)

// synchronous
console.log("START");

// asynchronous
setTimeout(() => console.log("This is asynchronous"), 5000);

// synchronous
console.log("END");



//-----------------------PROMISE------------------------------
// promise = object that encapsulates the result of an asynchronous operation
//                   let asynchronous methods return values like synchronous methods
//                   "I promise to return something in the future"

//           the STATE is 'pending' then: 'fulfilled' or 'rejected'
//           the RESULT is what can be returned
//           2 parts producing & consuming

// ------------- Example 1 -------------
const promise = new Promise((resolve, reject) => {
 
    let fileLoaded = false;
 
    if(fileLoaded){
        resolve("File loaded");
    }
    else{
        reject("File NOT loaded");
    }
});
 
promise.then(value => console.log(value))
              .catch(error => console.log(error));

// ------------- Example 2 -------------
/*
const wait = time => new Promise(resolve => {
    setTimeout(resolve, time);
});

wait(3000).then(() => console.log("Thanks for waiting!"));
*/




//-------------------ASYNC && AWAIT------------------------------
// async = makes a function return a Promise
// await = makes a function wait for a Promise
 
async function loadFile(){
    let fileLoaded = true;
 
    if(fileLoaded){
        return "File loaded";
    }
    else{
        throw "File NOT loaded";
    }
  }
 
loadFile().then(value => console.log(value))
                 .catch(error => console.log(error));

                 // async = makes a function return a Promise
                 // await = makes a function wait for a Promise
                 
                 async function loadFile(){
                 
                   const promise = new Promise((resolve, reject) => {
                     let fileLoaded = true;
                 
                     if(fileLoaded){
                         resolve("File loaded");
                     }
                     else{
                         reject("File NOT loaded");
                     }
                   })
                 
                   try{
                     document.getElementById("myH1").innerHTML = await promise;
                   }
                   catch(error){
                     document.getElementById("myH1").innerHTML = error;
                   }
                 }
                 loadFile();