student = {};
let newInfo = 'nome'
let fullName = 'Alisson Breno'

let newInfo1 = 'e-mail'
let email = 'alissonbreno36@hotmail.com'

let newInfo2 = 'telefone'
let number = '(25)98466-1331'

let newInfo3 = ' GitHub'
let gitHub = 'https://github.com/AlissonBrenoo?tab=repositories'

let newInfo4 = 'LinkedIn'
let linkedin = 'https://www.linkedin.com/in/alisson-breno-2785301b3/'

function addInfos(object, keys, value) {
    object[keys] = value;
    
}

addInfos(student, newInfo, fullName);
addInfos(student, newInfo1, email);
addInfos(student, newInfo2, number);
addInfos(student, newInfo3, gitHub);
addInfos(student, newInfo4, linkedin);

console.log(student);