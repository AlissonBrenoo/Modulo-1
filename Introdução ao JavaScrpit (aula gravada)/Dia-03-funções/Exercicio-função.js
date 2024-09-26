let saldo = 10;

function adicionaSaldo(valueModification) {
    return  "Foi adicionado " + valueModification + " a sua conta, agora você possui " + (valueModification + saldo)
}

function subtraiSaldo(valueModification) {
    return  "Foi adicionado " + valueModification + " a sua conta, agora você possui " + (saldo - valueModification)
}
function multiplicaSaldo(valueModification) {
    return  "Foi adicionado " + valueModification + " a sua conta, agora você possui " + valueModification * saldo
}
function divideSaldo(valueModification) {
    return  "Foi adicionado " + valueModification + " a sua conta, agora você possui " + valueModification / saldo
}

console.log(adicionaSaldo(15));
console.log(subtraiSaldo(5));
console.log(multiplicaSaldo(15));
console.log(divideSaldo(15));


