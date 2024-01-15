import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState : {
        page:0,
        pokemons: [],
        isLoading: false,
    },
    reducers: {
        starLoadingPokemons: ( state, /*action*/ ) => {
            state.isLoading = true;
        },

        setPokemons: (state,action) => {
            state.isLoading = false; 
            state.page = action.payload.page; 
            state.pokemons = action.payload.pokemons; 
        },
    },
});

//Action creators are generated for each case reducer function
export const { starLoadingPokemons,setPokemons } = pokemonSlice.actions;