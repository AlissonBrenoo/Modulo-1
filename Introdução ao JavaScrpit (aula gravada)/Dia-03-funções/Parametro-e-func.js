let clientesTrybeBank = ['Ada', 'John', 'Gus'];

// function cliente(newClient) {
//     if(typeof newClient === 'string'){
//         clientesTrybeBank.push(newClient);
//         return 'Cliente adicionado com sucesso!';
//     }else{
//         return 'O parâmetro passado deve ser do tipo "string"';
//     }   
// }
// console.log(cliente(true));
// console.log(cliente('Joana'));
// console.log(clientesTrybeBank);


function removeclient(Client) {
    if(typeof Client === 'string'){
        clientesTrybeBank.pop(Client);
        return 'Cliente removido com sucesso!';
    }else{
        return 'O parâmetro passado deve ser do tipo "string"';
    }   
}
console.log(removeclient(true));
console.log(removeclient('Ada'));
console.log(clientesTrybeBank);