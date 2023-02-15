import { useSelector } from "react-redux"
import { selectAllPokemon } from "./pokemonSlice"



const PokemonExerpt = () => {
    const pokes = useSelector(selectAllPokemon);

    return (
        <article className="displayPort">
            <div className="nameIdBlock">
                <h2 className="pokeName" title="Name">Name: {pokes.name.toUpperCase()}</h2>
                <p className="pokeId" title="Id">Id: {pokes.id}</p>
            </div>
            <br />
            <img src={pokes.sprites.other['official-artwork'].front_default} alt={pokes.name} title={pokes.name} />
            <div className="pokeTypes" title="Types">TYPES: {pokes.types ? pokes.types.map(type => <div className="pokeType" key={type.type.name} id={type.type.name} title={type.type.name}>{type.type.name.toUpperCase()} </div>) : ''}</div>
            <div className="pokeAbilities" title="Abilities"><strong>ABILITIES  : </strong>
                <div>
                    <ul>
                        {pokes.abilities ? pokes.abilities.map(ability => <li title={ability.ability.name} key={ability.ability.name}>{ability.ability.name.toUpperCase()}</li>) : ''}
                    </ul>
                </div> </div>
        </article>
    )
}

export default PokemonExerpt;