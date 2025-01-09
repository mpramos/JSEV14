
//Seleccionar el contenedor donde se mostrarán los personajes
const characterList= document.getElementById('character-list')

async function fetchCharacters() {
    try {
        const response= await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        displayCharacters(data.results)
    } catch (error) {
          console.error('Error al realizar la peticion del get')     
          characterList.innerHTML='<p>Hubo un problema</p>'     
    }    
}
function displayCharacters(characters) {
    characterList.innerHTML=''
    characters.forEach(character => {
        const card= document.createElement('div')
        card.className='character-card'
        card.innerHTML=`
              <img src=${character.image} alt="">
              <h2>${character.name}</h2>
              <p> Status: ${character.status}</p>
              <p> Species: ${character.species}</p>
        `
        characterList.appendChild(card)
    });
}

fetchCharacters()

