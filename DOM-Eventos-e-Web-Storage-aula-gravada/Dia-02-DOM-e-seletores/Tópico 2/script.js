let elementoQueEstou = document.querySelector('#elementoOndeVoceEsta');
let filhoDoFilho = document.querySelector('#primeiroFilhoDoFilho')
let pai = document.querySelector('#pai');
let terceiroFilho = document.querySelector('#elementoOndeVoceEsta', '#primeiroFilhoDoFilho', '#newElement3').nextElementSibling;
let newElement = document.createElement('section');
let newElement2 = document.createElement('section');
let newElement3 = document.createElement('section');

newElement.innerText = 'teste'
newElement2.innerText = 'teste2'
newElement3.innerText = 'teste3'


pai.appendChild(newElement2);
elementoQueEstou.appendChild(newElement);
filhoDoFilho.appendChild(newElement3);