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

            //Sintaxis sin Redux
            // return{
            //     ...state,
            //     isLoading:true
            // }
        },

        setPokemons: (state,action) => {
            console.log(action);
        },
    },
});

//Action creators are generated for each case reducer function
export const { starLoadingPokemons,setPokemons } = pokemonSlice.actions;