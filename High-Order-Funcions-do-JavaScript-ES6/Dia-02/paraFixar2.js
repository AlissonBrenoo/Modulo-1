const players = [
    { name: 'Michael Jordan', height: 198, team: 'Chicago Bulls' },
    { name: 'LeBron James', height: 203, team: 'Los Angeles Lakers' },
    { name: 'Kobe Bryant', height: 198, team: 'Los Angeles Lakers' },
    { name: 'Stephen Curry', height: 191, team: 'Golden State Warriors' },
    { name: 'Kevin Durant', height: 211, team: 'Brooklyn Nets' },
  ];

  //   const [ player1, player2, player3, player4, player5 ] = players;
 const filterHighPlayers =  players.filter((arrayPlayers) => arrayPlayers.height >= 200)
 
 console.log(filterHighPlayers);