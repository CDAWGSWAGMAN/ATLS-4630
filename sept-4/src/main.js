import './style.css';
fetch('https://meowfacts.herokuapp.com/')
  .then(response => response.json())
  .then(json => console.log(json));

  const baseUrl = 'https://meowfacts.herokuapp.com/';

const fetchCatFactButton = document.getElementById('fetchCatFactButton');
  fetchCatFactButton.addEventListener('click', async ()=> {
  const response = await fetch('https://meowfacts.herokuapp.com/');
  const json = await response.json();
  const catFactTarget = document.getElementById('catFactTarget');
  catFactTarget.innerText = json.data[0];
});

const catFactsCount = document.getElementById('catsFactsCount');
const fetchCatFactsButton = document.getElementById('fetchCatFactsButton');
const catFactsTarget = document.getElementById('catFactsTarget');

fetchCatFactsButton.addEventListener('click', async () => {
  if (count < 1){
    return;
  }
  const count = catFactsCount.value;
  const response = await fetch(`${baseUrl}?count=${count}&lang=esp`);
  const json = await response.json();
  console.log(json);
  catFactsTarget.innerHTML = '';
  for (const catFact of json.data){
    //dont do this
   // catFactsTarget.innerHTML = `<li>${catFact}</li>`;
   
   const li = document.createElement('li');
   li.innerText = catFact;
   catFactsTarget.appendChild(li);
  }
});
