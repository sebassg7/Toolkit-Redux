import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
// import { PokemonApp } from './PokemonApp.jsx';
import { TodoApp } from './TodoApp.jsx';


import { store } from './store';
import { Provider } from 'react-redux';
import './index.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <TodoApp />
    </Provider>,  
  </React.StrictMode>

)
