import Axios from 'axios'
export const PokemonGetter = () => {
  const id = Math.floor((Math.random() * 721) + 1);
  return {
    type: 'getPokemon',
    payload: Axios.get('http://pokeapi.co/api/v2/pokemon/'+id)
  }
}
