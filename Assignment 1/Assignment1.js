
//Change color of box on click
const box = document.getElementById("box");
const button = document.getElementById("colorBtn");


//Now going to allow for colors to swith back and fourth (CSS)
button.addEventListener("click", () => {
  if (box.style.backgroundColor === "rgb(36, 23, 115)" || box.style.backgroundColor === "#241773"){
    box.style.background = "gray";
  }else {
    box.style.background = "#241773";
  }
});


//Change logo back and fourth on click (Non-CSS)
logoBtn.addEventListener("click", () => {
  if (logo.getAttribute("src") === "ravens.png") {
    logo.setAttribute("src", "ravens_old.webp");
    logo.setAttribute("alt", "Old Ravens Logo");
  } else {
    logo.setAttribute("src", "ravens.png");
    logo.setAttribute("alt", "Updated Ravens Logo");
  }
});


//Event listener on key pressed
const headline = document.getElementById("headline");
document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    event.preventDefault();
    if (headline.textContent === "Sko Vens") {
      headline.textContent = "Go Ravens";
    } else {
      headline.textContent = "Sko Vens";
    }
  }
});

//Event listner with input
const nameInput = document.getElementById("nameInput");
document.addEventListener("input",() =>{
headline.textContent = nameInput.value||"Go Ravens";
});





