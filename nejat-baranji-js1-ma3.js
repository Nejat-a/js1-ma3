// question 1
(a, b) => a - b;

// question 2
const mainUrl = "https://api.rawg.io/api/games?genres=sports";

fetch(mainUrl)
  .then(response => response.json())

  .then(json => {
    for (let games of json.results) {
      console.log(games.name);
    }
  })

  .catch(function(error) {
    error, (document.location.href = "error.html");
  });

// question 3
const myString = "These cats are outrageous.";
const newString = myString.replace("cats", "giraffes");

// question 4
const urlString = "https://my.site.com?userId=7";
const url = new URL(urlString);
if (url.searchParams.has("userId") && url.searchParams.get("userId") < 10) {
  document.location.href = "first.html";
  console.log("ok.less than 10");
} else if (
  url.searchParams.has("userId") &&
  url.searchParams.get("userId") >= 10
) {
  document.location.href = "second.html";
  console.log("ok.greater than 10");
} else {
  document.location.href = "third.html";
  console.log("no result");
}

const getUserId = url.searchParams.get("userId");
console.log(getUserId);

// question 5
const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
container.removeChild(btn);

// question 6
const newListItem = document.createElement("li");
newListItemTxt = document.createTextNode("Parrots");
newListItem.classList.add("parrots");
newListItem.appendChild(newListItemTxt);
const listItems = document.querySelector(".animals");
listItems.insertBefore(newListItem, listItems.childNodes[2]);
console.log(listItems);

// question 7
const newUrl = "https://api.rawg.io/api/games/3801";
fetch(newUrl)
  .then(response => response.json())

  .then(json => {
    let ratingDiv = document.querySelector(".rating");
    const ratingValue = json.rating;
    ratingDiv.innerHTML = ratingValue;
  })

  .catch(error => error);
