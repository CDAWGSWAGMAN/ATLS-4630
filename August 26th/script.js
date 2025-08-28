// comment

//Variables
let myVar = 2;
console.log(myVar);
myVar = 3;
console.log(myVar);

//Constants *Cannot be Changed*
const myConst = 'dog';
console.log(myConst);


//Strings and template literals
console.log('This is a string with "double quotes" inside of it');
console.log("This is a string with 'double quotes' inside of it");
console.log(`this string has myVar in it... myVar: ${myVar}`);

//Arrays
const myArray = ['dogs', 'cats', 'horses'];
console.log(myArray[1]);
console.log(myArray.length);
console.log(myArray);
myArray.push('birds');
console.log(myArray);


//objects
const Classroom = {
    build: 'Atlas',
    room: '104',
}
console.log(Classroom.build);
console.log(Classroom.room);
Classroom.building = 'Atlassss';
console.log(Classroom.building);
console.log(Classroom);


//Conditionals

//if statements
if (myVar === 2){
console.log('myVar is 2');
} else{
    console.log('myVar is not 2');
}

//While loops
let myWhileVar = 1;
while(myWhileVar < 5){
    console.log(myWhileVar);
    myWhileVar++;
}

//For loop
for (let i = 1; i < 5; i++){
    console.log(i);
}

for (let i = 0; i < myArray.length; i++){
console.log(myArray[i]);
}

//for - of
for (const animal of myArray){
    console.log(animal);
}

//for - in


//functions
function myLog(Variable){
    console.log(Variable);
}

const addAndLog = (Varaible1, Variable2) => {
const addedVariables = Varaible1 + Variable2;
console.log(addedVariables);
};

const plusOne = input => input +1;

const plusOneWithExtraSyntax = input =>{
    return input + 1;
};

//.forEach
myArray.forEach(animal => console.log(animal));
myArray.forEach(myLog);
myArray.forEach(plusOneWithExtraSyntax);


//Anonymous iife
(function(){
    console.log("abc");
})();
(()=>{
    console.log("def");
})();


//DOM
const mySpecialItem = document.getElementById("mySpecialItem");
console.log(mySpecialItem);
const myListItems = document.getElementsByClassName("ListItem");
console.log(myListItems);
const myListItemsQuerySelector = document.querySelector(".ListItem");

const myH1 = document.querySelector("h1");
console.log(myH1);

const firstListItem = document.querySelector(".listItem: first-child");
console.log(firstListItem);

//element attriubutes
console.log(firstListItem.textContent);
firstListenItem.textContent = `myVar: ${myVar}`;

myH1.style.backgroundColor = "#ff0000";

myH1.addEventListener('click', () =>{
    const red = Math.random() * 255;
    const blue = Math.random() * 255;
    const green = Math.random() * 255;
    myH1.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
});