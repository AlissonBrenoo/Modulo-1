//EXERCICIO 1

const songs = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ];
  
  // Adicione seu código aqui

  const findSong = (arraySong) => arraySong.find((song) => song.id === '31031685');
//   console.log(findSong(songs));


// EXERCICIO 2

const contacts = [
    { name: 'João', phone: '123456789' },
    { name: 'Maria', phone: '987654321' },
    { name: 'Pedro', phone: '456123789' },
    { name: 'Ana', phone: '789456123' },
    { name: 'Carlos', phone: '321654987' },
    { name: 'Mariana', phone: '654123987' },
    { name: 'Lucas', phone: '987321654' },
    { name: 'Laura', phone: '123789456' },
    { name: 'Tiago', phone: '789123456' },
    { name: 'Beatriz', phone: '456789123' }
  ];
  
  const searchContact = (contacts, name) => {
        const findContact = contacts.find((contatct) =>  contatct.name === name);
        if (findContact === undefined) {
            return `Contato não encontrado`
        } else {
            return findContact;
        }
  };
  console.log(searchContact(contacts, 'Beatriz'));