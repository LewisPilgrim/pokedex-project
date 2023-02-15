import React from "react";
import './tooltip.css';

export default function Tooltip() {

    return (
        <div id="tooltip" className="bottom">
            <div className="tooltip-arrow" />
            <div className="tooltip-label">- You can search by entering a Pokemon's name or Id and pressing the Enter key<br></br>- Pokemon with different forms will need you to specify which form to show, separated by a hyphen. Example: "lycanroc-midday" or "lycanroc-dusk"</div>
        </div>
    )
}