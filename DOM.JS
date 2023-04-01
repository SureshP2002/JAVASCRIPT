//DOM= Document Object Model(API)
//     An interface for changing the contect of a page

console.dir(document);
console.log(document.URL);
console.log(document.title);

document.title="SURESH";
//document.location="http://google.com"
document.getElementById("myDiv").innerHTML="HELLO";




//------------------------selecting elemenst int html--------------------------------

let element = document.getElementById("myTitle");
element.style.backgroundColor = "lightgreen";


let fruits = document.getElementsByName("fruits");
fruits.forEach(fruit => {
    if(fruit.checked){
        console.log(fruit.value);
    }
})

let vegetables = document.getElementsByTagName("li");
vegetables[0].style.backgroundColor = "lightgreen";

let desserts = document.getElementsByClassName("desserts");
desserts[0].style.backgroundColor = "lightgreen";

let element = document.querySelector("[for]");
element.style.backgroundColor = "lightgreen";

let elements = document.querySelectorAll("[for]");
elements.forEach(element => {
    element.style.backgroundColor = "lightgreen";
})


//-------------------------DOM TRAVERSAL TECHNIQUE-----------------------------------------
let element = document.querySelector("#fruit");
let child = element.firstElementChild;
child.style.backgroundColor = "lightgreen";

// .firstElementChild
// .lastElementChild
// .parentElement
// .nextElementSibling
// .previousElementSibling
// .children[]
// Array.from(.children)


//----------------ADD HTML ELEMENST-----------------------------------------------
//  add change HTML elements
// .innerHTML (vulnerable to XSS attacks)
// .textContent (more secure)

const nameTag = document.createElement("h1");
nameTag.textContent = "Bro";
document.body.append(nameTag);

//const myList = document.querySelector("#fruit");
//const listItem = document.createElement("li");
//listItem.textContent = "mango";
//myList.append(listItem);
//myList.prepend(listItem);
//myList.insertBefore(listItem, myList.getElementsByTagName("li")[1]);



//---------- CHANGING CSS PROPERTY--------------------------------------

const title = document.getElementById("myTitle");

title.style.backgroundColor = "#222222";
title.style.color = "rgb(50, 200, 250)";
title.style.fontFamily = "consolas";
title.style.textAlign = "center";
title.style.border = "2px solid";
title.style.display = "block";


//-----------------EVENTS------------------------------------------------
//const element = document.getElementById("myButton");
//const element = document.body;
//const element = document.getElementById("myText");
const element = document.getElementById("myDiv");

//element.onclick = doSomething;
//element.onload = doSomething;
//element.onchange = doSomething;
//element.onmouseover = doSomething;
//element.onmouseout = doSomethingElse;
element.onmousedown = doSomething;
element.onmouseup = doSomethingElse;

function doSomething(){
    //alert("You did something!");
    element.style.backgroundColor = "red";
}
function doSomethingElse(){
    //alert("You did something!");
    element.style.backgroundColor = "lightgreen";
}







//--------------------------EVENT LISTENER-----------------------------------
// .addEventListener(event, function, useCapture)
// You can add many event handlers to one element.
// Even the same event that invokes different functions

const innerDiv = document.getElementById("innerDiv");
const outerDiv = document.getElementById("outerDiv");

innerDiv.addEventListener("click", changeBlue);
outerDiv.addEventListener("click", changeBlue, true);

function changeBlue(){
    alert(`You selected ${this.id}`);
    this.style.backgroundColor = "lightblue"
}





//----------------------SHOWING AND HIDDDING-----------------------------
const myButton = document.querySelector("#myButton");
const myImg = document.querySelector("#myImg");

myButton.addEventListener("click", () => {

    if(myImg.style.visibility == "hidden"){
        myImg.style.visibility = "visible";
    }
    else{
        myImg.style.visibility = "hidden";
    }
})



//--------------------DETECT KEY---------------------------------------------
const myDiv = document.getElementById("myDiv");
window.addEventListener("keydown", move);
let x = 0;
let y = 0;

function move(event){
    
    switch(event.key){
        case "ArrowDown":
            y+=5;
            myDiv.style.top
 = y + "px";
            break;
        case "ArrowUp":
            y-=5;
            myDiv.style.top
 = y + "px";
            break;
        case "ArrowRight":
            x+=5;
            myDiv.style.left = x + "px";
            break;
        case "ArrowLeft":
            x-=5;
            myDiv.style.left = x + "px";
            break;
        default:
            break;
    }
}



//-----------------------ANIMATIONS--------------------------------------------------------------
const myButton = document.getElementById("myButton");
const myAnimation = document.getElementById("myDiv");

myButton.addEventListener("click", slide);
//myButton.addEventListener("click", rotate);
//myButton.addEventListener("click", scale);

function slide(){
    let timerId = null;
    let x = 0;
    let y = 0;

    timerId = setInterval(frame, 5);

    function frame(){
        if(x >= 200 || y >= 200){
            clearInterval(timerId);
        }
        else{
            x+=1;
            y+=1;
            myAnimation.style.top
 = y + 'px';
            myAnimation.style.left = x + 'px';
        }
    }
}
function rotate(){
    let timerId = null;
    let degrees = 0;
 
    timerId = setInterval(frame, 5);

    function frame(){
        if(degrees >= 360){
            clearInterval(timerId);
        }
        else{
            degrees+=1;
            myAnimation.style.transform = "rotateZ("+degrees+"deg)";
        }
    }
}
function scale(){
    let timerId = null;
    let scaleX = 1;
    let scaleY = 1;
 
    timerId = setInterval(frame, 5);

    function frame(){
        if(scaleX <= 0.1 || scaleY <= 0.1){
            clearInterval(timerId);
        }
        else{
            scaleX-=0.01;
            scaleY-=0.01;
            myAnimation.style.transform = "scale("+scaleX+","+scaleY+")";
        }
    }
}



//------------------CANVAS API--------------------------------------------

let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
/*
//DRAW LINES
context.strokeStyle = "purple";
context.lineWidth = 10;
context.beginPath();
context.moveTo(0, 0);
context.lineTo(250, 250);
context.lineTo(250, 500);
context.moveTo(500, 0);
context.lineTo(250, 250);
context.stroke();
*/
/*
//DRAW TRIANGLE
context.strokeStyle = "grey";
context.fillStyle = "yellow";
context.lineWidth = 10;
context.beginPath();
context.moveTo(250, 0);
context.lineTo(0, 250);
context.lineTo(500, 250);
context.lineTo(250, 0);
context.stroke();
context.fill();
*/
/*
//DRAW RECTANGLE
context.fillStyle = "black";
context.fillRect(0, 0, 250, 250);
context.strokeStyle = "black";
context.strokeRect(0, 0, 250, 250);

context.fillStyle = "red";
context.fillRect(0, 250, 250, 250);
context.strokeStyle = "black";
context.strokeRect(0, 250, 250, 250);

context.fillStyle = "green";
context.fillRect(250, 250, 250, 250);
context.strokeStyle = "black";
context.strokeRect(250, 250, 250, 250);

context.fillStyle = "blue";
context.fillRect(250, 0, 250, 250);
context.strokeStyle = "black";
context.strokeRect(250, 0, 250, 250);
*/
/*
//DRAW CIRCLE
//(x, y, r, sAngle, eAngle, counterclockwise)
context.fillStyle = "lightblue";
context.strokeStyle = "darkblue";
context.lineWidth = 10;
context.beginPath();
context.arc(250, 250, 200, 0, 2 * Math.PI);
context.stroke();
context.fill();
*/
//DRAW TEXT
context.font = "50px MV Boli";
context.fillStyle = "grey";
context.textAlign = "center";
context.fillText("YOU WIN!", canvas.width / 2, canvas.height / 2);








//-----------------------WINDOW OBJECT-----------------------------------
// window = interface used to talk to the web browser
//                   the DOM is a property of the window

const myButton = document.querySelector("#myButton");

//console.dir(window);
//console.log(window.innerWidth);
//console.log(window.innerHeight);
//console.log(window.scrollX);
//console.log(window.scrollY);

//console.log(window.location.href);
//window.location.href = "https://google.com
";
//console.log(window.location.hostname);
//console.log(window.location.pathname);

//myButton.addEventListener("click", () => window.open("https://google.com
"));
//myButton.addEventListener("click", () => window.close());
//myButton.addEventListener("click", () => window.print());

//window.alert("Hello!");
//window.confirm("Press OK to coninue!");
/*
let age = window.prompt("Enter your age");
if(age < 18){
    window.alert("You must be 18+ to visit this site");
    window.close();
}
*/


//--------------------COOKIES---------------------------------------------------------------------------
const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitBtn = document.querySelector("#submitBtn");
const cookieBtn = document.querySelector("#cookieBtn");

submitBtn.addEventListener("click", () => {
    setCookie("firstName", firstText.value, 365);
    setCookie("lastName", lastText.value, 365);
});
cookieBtn.addEventListener("click", () => {
    firstText.value = getCookie("firstName");
    lastText.value = getCookie("lastName");
});

function setCookie(name, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime() +  (daysToLive * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`
}
function deleteCookie(name){
    setCookie(name, null, null);
}
function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;
    
    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1)
        }
    })
    return result;
}