import getData from '../util/getData'

const Home = async () => {
  const characters = await getData()
  const view = `
    <div class="Characters">
    ${characters.results.map(character => `
      <article class="Character-item">
        <a href="#/${character.id}">
          <img src="${character.image}" alt="${character.name}">
          <h2>${character.name}</h2>
        </a>
      </article>
      `).join('')} //el join es para que el array que me va a devolver lo pegue
    </div>
  `
  return view
}

export default Home
