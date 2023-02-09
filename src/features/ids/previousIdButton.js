import { useDispatch } from "react-redux";
import { decrement } from "./idsSlice";

const PreviousIdButton = () => {
    const dispatch = useDispatch();

    return (
        <button onClick={dispatch(decrement())}>Previous</button>
    )
}

export default PreviousIdButton;