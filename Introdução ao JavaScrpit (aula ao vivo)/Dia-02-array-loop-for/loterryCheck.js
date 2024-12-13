// Jogo do Chimba

let studentGame = [3,7,22,12,15,53];
console.log("Jogo do Chimba", studentGame);

// Jogo sorteado

let megaSenaNumbers = [];
for(let MegaSenaindex = 0; MegaSenaindex < 6; MegaSenaindex +=1){
    megaSenaNumbers[MegaSenaindex] = Math.floor(Math.random()*61)

}
console.log("Numeros sorteados",megaSenaNumbers);

// Conferindo o jogo

let numberOfHits = 0;
for(let index = 0; index < megaSenaNumbers.length; index+=1){
    let drawNumbers = megaSenaNumbers[index];

    for(let gameIndex = 0; gameIndex < studentGame.length; gameIndex+=1){
        let studentNumber = studentGame[gameIndex]

        if (drawNumbers === studentNumber){
            numberOfHits +=1;
        }
    }
}
console.log("Numero de acertos", numberOfHits)