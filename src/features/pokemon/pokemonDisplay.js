import { useSelector, useDispatch } from "react-redux";
import {
    selectAllPokemon,
    setPokemon,
    // increment,
    // decrement,
    setIdTo
} from "./pokemonSlice";
import { useEffect } from "react";
import { selectQuery } from "../search/searchSlice";
import "./pokemonDisplay.css";

const PokemonDisplay = () => {
    const dispatch = useDispatch();

    const pokes = useSelector(selectAllPokemon);
    const query = useSelector(selectQuery)

    useEffect(() => {
        const fetchPokemon = async () => {
            const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
            const json = await data.json();
            dispatch(setPokemon(json));
            dispatch(setIdTo(json.id));
        }
        fetchPokemon();
    })

    const renderedPokemon = pokes;

    let content;
    if (renderedPokemon.name) {
        content =
            <article className="displayPort">
                <div className="nameIdBlock">
                    <h2 className="pokeName">Name: {renderedPokemon.name.toUpperCase()}</h2>
                    <p className="pokeId">Id: {renderedPokemon.id}</p>
                </div>
                <img src={renderedPokemon.sprites.other['official-artwork'].front_default} alt={renderedPokemon.name} />
                <p className="pokeTypes">Types: {renderedPokemon.types ? renderedPokemon.types.map(type => <span className="pokeType">{type.type.name.toUpperCase()} </span>) : ''}</p>
                <p className="pokeAbilities"><strong>Abilities: </strong>
                    <ul>
                        {renderedPokemon.abilities ? renderedPokemon.abilities.map(ability => <li>{ability.ability.name.toUpperCase()}</li>) : ''}
                    </ul> </p>
            </article>
    }

    return (
        <section>
            {/* <button onClick={() => dispatch(decrement())}>Previous</button>
            <button onClick={() => dispatch(increment())}>Next</button> */}
            {content}
        </section>
    )
}

export default PokemonDisplay;