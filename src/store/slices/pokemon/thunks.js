import { pokemonApi } from '../../../api/pokemonApi';
import { setPokemons, starLoadingPokemons } from './pokemonSlice';

export const getPokemons = (page = 0) => {
    return async( dispatch,getState ) => {

        dispatch( starLoadingPokemons());

        // const url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page}`;
        // const resp = await fetch( url );
        // const data = await resp.json();

        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`)

        // console.log(resp); //Endpoint

        //TODO: Realizar petición

        dispatch( setPokemons({page: page + 1, pokemons: data.results,}));

    }
};
