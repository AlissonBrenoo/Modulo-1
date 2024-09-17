//Primeiro requisito
let newElement = document.createElement('h1');
let body = document.querySelector('body');
newElement.innerHTML = 'TrybeTrip - Agência de Viagens';
body.appendChild(newElement);

//Segundo requisito
let newMain = document.createElement('main');
newMain.className = 'main-content';
body.appendChild(newMain);

//Terceiro requisito
let centerSection = document.createElement('section');
centerSection.className = 'center-content';
newMain.appendChild(centerSection);

//Quarto requisito
let paragraph = document.createElement('p');
centerSection.appendChild(paragraph);

//Quinto requisito
let leftSection = document.createElement('section')
leftSection.className = 'left-content';
newMain.appendChild(leftSection);

//Sexto requisito
let rightSection = document.createElement('section')
rightSection.className = 'right-content';
newMain.appendChild(rightSection);

//Sétimo requisito
let img = document.createElement('src')
img.className = 'small-image'
leftSection.appendChild(img)
document.querySelector('.small-image').innerHTML = '<img src= "https://picsum.photos/200">'

//Oitavo requisito
let list = document.createElement('ul');
list.className = 'list';
rightSection.appendChild(list);
console.log(list);
list.innerHTML = ('<li>Um</li><li>Dois</li><li>Três</li><li>Quatro</li><li>Cinco</li><li>Seis</li><li>Sete</li><li>Oito</li><li>Nove</li><li>Dez</li>')
// document.querySelector('.list').innerHTML = 
//     <> <li>Um</li><li>Dois</li><li>Três</li><li>Quatro</li><li>Cinco</li><li>Seis</li><li>Sete</li><li>Oito</li><li>Nove</li><li>Dez</li> </>;

//Nono requisito
let newh30 = document.createElement('h3');
let newh31 = document.createElement('h3');
let newh32 = document.createElement('h3');
newMain.appendChild(newh30)
newMain.appendChild(newh31)
newMain.appendChild(newh32)