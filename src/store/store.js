import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slices/counter';
import { pokemonSlice } from './slices/pokemon';
import { todosApi } from './apis';
// import { getDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';


export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        pokemons: pokemonSlice.reducer,
        [todosApi.reducerPath]: todosApi.reducer, //Se pone entre corchetes porque es una propiedad computada /7 Alberga el resultado de los querys que disparemos
    },

    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware()
    .concat( todosApi.middleware )
})