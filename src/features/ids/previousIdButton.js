import { useSelector, useDispatch } from "react-redux";
import { decrement, pokeId } from "./idsSlice";

const PreviousIdButton = () => {
    const dispatch = useDispatch();
    const currentId = useSelector(pokeId);

    return (
        <button onClick={dispatch(decrement())}>Previous</button>
    )
}

export default PreviousIdButton;