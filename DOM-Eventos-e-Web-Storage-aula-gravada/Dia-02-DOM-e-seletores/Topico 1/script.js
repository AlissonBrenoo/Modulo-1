let WhereAreYOu = document.querySelector('#where-are-you');

let parentWhereAreYOu = document.querySelector('#where-are-you').
parentNode;
parentWhereAreYOu.style.backgroundColor = ('Green');

let childWhereAreYou = document.querySelector('#where-are-you').firstElementChild;
childWhereAreYou.innerText = 'Novo novinho';

let firstChild = document.querySelector('#parent').firstElementChild
firstChild = document.querySelector('#where-are-you').previousElementSibling

let paragraph = document.querySelector('#where-are-you').nextSibling;

let thirdChild = document.querySelector('#where-are-you').nextElementSibling
thirdChild = document.querySelector('#parent').childNodes[5];
console.log(thirdChild);