import { useSelector, useDispatch } from "react-redux";
import { selectAllPokemon } from "./pokemonSlice";
import { pokeId, increment, decrement } from "../ids/idsSlice";

const PokemonDisplay = () => {
    const dispatch = useDispatch();

    const pokes = useSelector(selectAllPokemon)
    const count = useSelector(pokeId);

    const renderedPokemon = pokes.filter(pokemon => {
        if (pokemon.id === count) {
            return pokemon;
        }
    })

    return (
        <section>
            <button onClick={() => dispatch(decrement())}>Previous</button>
            <button onClick={() => dispatch(increment())}>Next</button>
            <article>
                <p>Name: {renderedPokemon[0].name}</p>
                <p>Id: {renderedPokemon[0].id}</p>
                <p>Types: {renderedPokemon[0].type1} {renderedPokemon[0].type2}</p>
            </article>
        </section>
    )
}

export default PokemonDisplay;