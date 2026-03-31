// =======================
// TASK 9.1 Selecting Elements
// =======================

const header = document.getElementById("main-header");
console.log(header);

const contents = document.getElementsByClassName("content");
console.log(contents);

const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

const firstLink = document.querySelector(".nav-link");
console.log(firstLink);

const allLinks = document.querySelectorAll(".nav-link");
console.log(allLinks);


// =======================
// TASK 9.2 Traversing DOM
// =======================

const nav = document.querySelector("nav");

console.log(nav.parentElement);
console.log(nav.children);
console.log(nav.firstElementChild);
console.log(nav.lastElementChild);

const article = document.querySelector("article");

console.log(article.nextElementSibling);
console.log(article.previousElementSibling);

const navLinks = nav.querySelectorAll("a");
console.log(navLinks);


// =======================
// TASK 9.3 Modifying Content
// =======================

const h1 = document.querySelector("h1");

console.log(h1.textContent);
console.log(h1.innerText);

// modify text
h1.textContent = "DOM Practice Updated";


// =======================
// TASK 9.4 Creating Elements
// =======================

const newParagraph = document.createElement("p");

newParagraph.textContent = "This is a new paragraph!";
newParagraph.className = "content highlight";

article.appendChild(newParagraph);


// =======================
// TASK 10.1 Event Listeners
// =======================

const button = document.createElement("button");

button.textContent = "Click Me";

document.body.appendChild(button);

button.addEventListener("click", function(){
console.log("Button clicked!");
});

function handleClick(){
console.log("Handled!");
}

button.addEventListener("click", handleClick);


// =======================
// TASK 10.2 Event Object
// =======================

document.addEventListener("click", function(event){

console.log("Target:", event.target);
console.log("Type:", event.type);
console.log("Position:", event.clientX, event.clientY);

});


// Keyboard events

document.addEventListener("keydown", function(event){

console.log("Key:", event.key);
console.log("Code:", event.code);

});


// =======================
// TASK 10.3 Event Bubbling
// =======================

const grandparent = document.createElement("div");
grandparent.id = "grandparent";
grandparent.textContent = "Grandparent";

const parent = document.createElement("div");
parent.id = "parent";
parent.textContent = "Parent";

const child = document.createElement("div");
child.id = "child";
child.textContent = "Child";

document.body.appendChild(grandparent);

grandparent.appendChild(parent);
parent.appendChild(child);

grandparent.addEventListener("click", function(){
console.log("Grandparent clicked");
});

parent.addEventListener("click", function(){
console.log("Parent clicked");
});

child.addEventListener("click", function(){
console.log("Child clicked");
});


// =======================
// Event Delegation
// =======================

const ul = document.querySelector(".nav-list");

ul.addEventListener("click", function(event){

if(event.target.matches(".nav-link")){
console.log("Clicked:", event.target.textContent);
}

});
