import { useDispatch, useSelector } from "react-redux";
import { selectCurrentId } from "../pokemon/pokemonSlice";
import { useEffect } from "react";
import { increment } from "./idsSlice";

import { setPokemon,  } from "../pokemon/pokemonSlice";

const NextIdButton = () => {
    const dispatch = useDispatch();
    const id = useSelector(selectCurrentId);

    useEffect(() => {
        const fetchIncrementPokemon = async () => {
            dispatch(increment())
            const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const json = await data.json();
            dispatch(setPokemon(json));
        }
        fetchIncrementPokemon();
    })

    return (
        <button onClick={dispatch()}>Next</button>
    )
}

export default NextIdButton;