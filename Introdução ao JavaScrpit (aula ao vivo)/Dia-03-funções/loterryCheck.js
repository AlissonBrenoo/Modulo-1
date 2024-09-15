// Jogo do Chimba

let studentGame = [3,7,22,12,15,53];
let joaoGames= [17,22,33,42,35,41]

// Jogo sorteado

let megaSenaNumbers = [];
for(let MegaSenaindex = 0; MegaSenaindex < 6; MegaSenaindex +=1){
    megaSenaNumbers[MegaSenaindex] = Math.floor(Math.random()*61)

}


// Conferindo o jogo

function megaSenaChecker (game){
    let numberOfHits = 0;
    for(let index = 0; index < megaSenaNumbers.length; index+=1){
        let drawNumbers = megaSenaNumbers[index];

    for(let gameIndex = 0; gameIndex < game.length; gameIndex+=1){
        let studentNumber = game[gameIndex]

        if (drawNumbers === studentNumber){
            numberOfHits +=1;
            }
        }
    }
    return numberOfHits;
}
console.log("Jogo do Chimba", studentGame);
console.log("Numeros sorteados",megaSenaNumbers);
console.log("Numero de acertos", megaSenaChecker(studentGame));
console.log('-------');
console.log("Jogo do João", joaoGames);
console.log("Numeros sorteados",megaSenaNumbers);
console.log("Numero de acertos", megaSenaChecker(joaoGames));


