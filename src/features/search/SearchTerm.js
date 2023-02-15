import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./search.css";
import infoIcon from '../../Images/info-icon.png';

import { newSearchTerm } from "./searchSlice";
import Tooltip from "./toolTIp";

export default function SearchTerm() {

    const [visible, setVisible] = useState(false)


    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        if (e.key === 'Enter') {
            dispatch(newSearchTerm(e.target.value));
        }
    }
    const handleMouseOver = () => {
        return setVisible(true);
    }
    const handleOnMouseOut = () => {
        return setVisible(false);
    }

    return (
        <div className="searchBar">
            <input name='searchBar' type='text' placeholder='Search by Pokemon name or id' id='queryBox' spellCheck="false" onKeyUp={handleSubmit}></input>
            <div className="searchInfoBox">
                <img onMouseOver={handleMouseOver} onMouseLeave={handleOnMouseOut} src={infoIcon} alt="Help"></img>
                {visible === true ? <Tooltip /> : ''}
            </div>
        </div>
    )
}