import { useSelector, useDispatch } from "react-redux";
import { increment, pokeId } from "./idsSlice";

const NextIdButton = () => {
    const dispatch = useDispatch();
    const currentId = useSelector(pokeId);

    return (
        <button onClick={dispatch(increment())}>Next</button>
    )
}

export default NextIdButton;