import './style.css';
fetch('https://meowfacts.herokuapp.com/')
  .then(response => response.json())
  .then(json => console.log(json));


const fetchCatFactButton = document.getElementById('fetchCatFactButton');
  fetchCatFactButton.addEventListener('click', async ()=> {
  const response = await fetch('https://meowfacts.herokuapp.com/');
  const json = await response.json();
  const catFactTarget = document.getElementById('catFactTarget');
  catFactTarget.innerText = json.data[0];
});