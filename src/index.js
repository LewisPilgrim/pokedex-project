import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <head>
      <meta charSet='UTF-8'></meta>
      <link href="https://fonts.googleapis.com/css2?family=Gruppo&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Michroma&display=swap" rel="stylesheet"></link>
      <title>Pokedex</title>
    </head>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>);