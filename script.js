//***********taking the html to js using DOM*****************
let toggleButton = document.querySelector(".light-dark-mode>button");
let body = document.querySelector("body");
//************************************************************
function searchEmoji() {
  let inputValue = document.querySelector("#input_field").value;
  displayResult(inputValue);
  return false;
}
// ********On the load of web page display this.**************
function displayResult(searchQuery = "") {
  let filterData = emojiList.filter((e) => {
    if (e.description.indexOf(searchQuery) != -1) {
      return true;
    }
    if (e.tags.some((elem) => elem.startsWith(searchQuery))) {
      return true;
    }
    if (e.aliases.some((elem) => elem.startsWith(searchQuery))) {
      return true;
    }
  });
  let tBody = document.querySelector(".emojee-container");
  tBody.innerHTML = " ";

  filterData.forEach((e) => {
    let div = document.createElement("div");
    let emojiDiv = document.createElement("div");
    let aliasText = document.createElement("p");
    let emojiDesc = document.createElement("p");
    emojiDiv.innerText = e.emoji;
    aliasText.innerText = e.aliases;
    emojiDesc.innerText = e.description;
    div.classList.add("createADiv");
    let random_color1 = randomColor();
    let random_color2 = randomColor();
    div.style.background =
      "linear-gradient( to top left," +
      random_color1 +
      "," +
      random_color2 +
      ")";
    div.appendChild(emojiDiv);
    div.appendChild(aliasText);
    div.appendChild(emojiDesc);
    tBody.appendChild(div);
  });
}
// ***********************************************************

// ***********for color generation.***************************
function randomColor() {
  let colors = "0123456789abcdef";
  let string = "#";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * colors.length);
    string += colors[index];
  }
  return string;
}
// ***********************************************************

// **************Dark mode and light mode functionality*******
toggleButton.addEventListener("click", () => {
  body.classList.toggle("toggle");
  let theShadowDiv = document.querySelectorAll(".createADiv");
  theShadowDiv.forEach((e) => {
    e.classList.toggle("toggleDiv");
  });
});
//************************************************************
document.getElementById("input_field").addEventListener("keyup", searchEmoji);
console.log(
  document.getElementById("input_field").addEventListener("keyup", searchEmoji)
);
window.onload = () => displayResult();
