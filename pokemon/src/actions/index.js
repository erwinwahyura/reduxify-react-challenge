import Axios from 'axios'
export const PokemonGetter = () => {
  return {
    type: 'getPokemon',
    payload: Axios.get('http://pokeapi.co/api/v2/pokemon/bulbasaur')
  }
}
