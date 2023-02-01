import './App.css';

import PokemonDisplay from './features/pokemon/pokemonDisplay';
import NextIdButton from './features/ids/nextIdButton';
import PreviousIdButton from './features/ids/previousIdButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>POKEDEX</h1>
      </header>
      <main>
        {/* <PreviousIdButton />
        <NextIdButton /> */}
        <PokemonDisplay />
      </main>
    </div>
  );
}

export default App;
