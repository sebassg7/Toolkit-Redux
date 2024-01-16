import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';



export const PokemonApp = () => {

    const { isLoading, pokemons = [], page } = useSelector(state => state.pokemons)
    const dispatch = useDispatch(getPokemons);
    
  
    useEffect(() => {
      dispatch(getPokemons())
    }, []);

    
    
  return (
    <>
        <h1>Pokemón App</h1>
        <hr />
        <span> Loading: {isLoading ? 'Cargando' :  'No esta cargando' }  </span>

        <ul>
          {
            pokemons.map(pokemon => 
              <ol key={pokemon.name}>{pokemon.name}</ol>)
          }
        </ul>

        <button
        disabled={isLoading}
        onClick={() => dispatch(getPokemons(page))}
        >
          Next
        </button>
    </>
  )
}
