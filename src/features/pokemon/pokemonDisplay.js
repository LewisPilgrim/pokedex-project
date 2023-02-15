import { useSelector, useDispatch } from "react-redux";
import {
    selectAllPokemon,
    setPokemon,
    setIdTo
} from "./pokemonSlice";
import { useEffect } from "react";
import { selectQuery } from "../search/searchSlice";
import "./pokemonDisplay.css";
import PokemonExerpt from "./pokeExeprt";

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

    let content;
    if (pokes.name) {
        content = <PokemonExerpt />
    }

    return (
        <section>
            {content}
        </section>
    )
}

export default PokemonDisplay;