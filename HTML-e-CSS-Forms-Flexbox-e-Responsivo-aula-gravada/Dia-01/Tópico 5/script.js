// SELETORES
const inputText = document.querySelector("#input-text");
const inputCheckbox = document.querySelector("#input-checkbox");
const hrefLink = document.querySelector("#href");

hrefLink.addEventListener('click', (event) => {
    event.preventDefault();

} );
inputCheckbox.addEventListener('click', (Event) =>{
    Event.preventDefault();
})

inputText.addEventListener('keypress', (newEvent) =>{
const key = event.key
if(key !== 'a'){
    event.preventDefault();
} 
}) 