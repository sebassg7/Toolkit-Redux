import { setPokemons, starLoadingPokemons } from './pokemonSlice';

export const getPokemons = (page = 0) => {
    return async( dispatch,getState ) => {
    dispatch( starLoadingPokemons());

        //TODO: Realizar petición

    // dispatch( setPokemons() );

    }
}
