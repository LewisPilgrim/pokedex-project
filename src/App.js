import './App.css';

import PokemonDisplay from './features/pokemon/pokemonDisplay';
import SearchTerm from './features/search/SearchTerm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>POKEDEX</h1>
      </header>
      <main>
        <SearchTerm />
        <PokemonDisplay />
      </main>
      <footer>
        <a href="https://lewispilgrim.github.io">2023 @ Lewis Pilgrim</a>
      </footer>
    </div>
  );
}

export default App;
