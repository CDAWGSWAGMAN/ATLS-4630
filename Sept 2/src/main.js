import './style.css'

//Basic Error Handeling
try{
throw new Error('Hello World');
} catch (e){
console.error(e);
} finally{
  console.log('in finally block');
}

console.log("after the error");


//Element not found
const app = document.getElementById('appp');

/*if(!app){
  throw new Error ('Cant find element with id "app"');
}
*/

try{
app.addEventListener('click', () =>
  console.log("Hello from event listener")
);
} catch (e){
console.error(e);
}

//timeout
function addOne(num){
  return num + 1;
}

function logNum(num){
  console.log(num);
}

function addOneTooLog(){
  const result = addOne(1);
  logNum(result);
}

setTimeout( addOneTooLog, 1000);


//async
async function myAsync(num) {
  return num + 1;
}

const resultSync = addOne(1);
console.log(resultSync);

myAsync(2).then(result => console.log(result));
myAsync(3).then(logNum);