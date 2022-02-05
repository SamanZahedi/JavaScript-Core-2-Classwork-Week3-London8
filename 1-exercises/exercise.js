/*
  To complete these exercises use vscode-live-server plugin to get live updates of your changes.
  - Install the Live Server plugin
  - Right click on index.html and select "Open with Live Server"
*/

/*
Task 1
=======

Write JavaScript below that console.logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotronText"
    --> should log the "#jumbotronText" node

    4. all the "p" elements of contained inside the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
let pElements = document.querySelectorAll("p");
console.log(pElements);

let divElements = document.querySelector(".site-header");
console.log(divElements);

let textElements = document.querySelector("#jumbotronText");
console.log(textElements);

let pPrimaryElements = document.querySelectorAll(".primary-content p");
// OR
//let primaryContentParagraphsSolution2 = document.querySelector(".primary-content").querySelectorAll("p");
console.log(pPrimaryElements);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let alertBtn = document.querySelector("#alertBtn");
alertBtn.addEventListener("click", () => {
  alert("Thanks for visiting Bikes for Refugees!");
});

/*
Task 3
=======

When a user clicks the 'Change colour' button, the background colour of the page should change to red.
Hint: can you do this with a CSS class instead of adding styles to the element?
*/
let changeBtn = document.querySelector("#bgrChangeBtn");
changeBtn.addEventListener("click", () => {
  let body = document.querySelector("body");
  body.style.backgroundColor = "red";
});
// OR
// let changeBgBtn = document.querySelector("#bgrChangeBtn");
// changeBgBtn.addEventListener("click", () => {
//   let body = document.querySelector("body");
//   body.classList.add("background--red");
// });
/*
Task 4
======

When a user clicks the 'Larger links!' button, the text of all links on the page should increase.
*/
let largerLinkBtn = document.querySelector("#largerLinksBtn");
largerLinkBtn.addEventListener("click", () => {
  let links = document.querySelectorAll("a");
  for (let link of links) {
    link.style.fontSize = "25px";
  }
});
/*
Task 5
======

When a user clicks the 'Add some text' button, the text in the input field should be appended to the page as a new paragraph below it.
Hint: the new paragraph should be appended to the element with id 'addArticle'.
*/
let addText = document.querySelector("#addArticleBtn");
addText.addEventListener("click", () => {
  let newP = document.createElement("p");
  let addArticle = document.querySelector("#addArticle");
  let inputText = document.querySelector("#addArticleInput");
  newP.innerText = inputText.value;
  addArticle.appendChild(newP);
  inputText.value = ""; // resets the input field
});
//
// let addText = document.querySelector("#addArticleBtn");
// addText.addEventListener("click", () => {
//   let newP = document.createElement("p");
//   let addArticle = document.querySelector("#addArticle");
//   newP.innerText = document.querySelector("#addArticleInput").value;
//   addArticle.appendChild(newP);
// });
