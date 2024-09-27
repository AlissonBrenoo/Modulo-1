let clientesTrybeBank = ['Ada', 'John', 'Gus'];


function verificaCliente(cliente) {
    let clienteEncontrado = false;
    for (let index = 0; index < clientesTrybeBank.length; index += 1){
    if (cliente === clientesTrybeBank[index]) {
        clienteEncontrado = true;
    }
} return "Cliente verificado com sucesso"
}


function removeCliente(cliente) {
  for (let index1 = 0; index1 < clientesTrybeBank.length; index1+=1) {
   if (typeof cliente === 'string' && verificaCliente) {
     clientesTrybeBank.splice(index1);
    return 'Cliente excluída(o) com sucesso.';
    }

    else if (verificaCliente === false) {
      return 'Cliente não encontrado'
    
  } else {
    return 'O parâmetro passado deve ser do tipo "string"!';
  }
}
};

console.log(removeCliente('Breno'));
console.log(clientesTrybeBank);