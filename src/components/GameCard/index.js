import React from "react";
import "./style.css";

function GameCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <stong>Name:</stong> {props.name}
                    </li>
                    <li>
                        <strong>Occupation:</strong> {props.occupation}
                    </li>
                    <li>
                        <strong>Location:</strong> {props.location}
                    </li>
                </ul>
            </div>
            <span onClick={() => props.removeGame(props.id)} className="remove">
                x
            </span>
        </div>

    );
}

export default GameCard;




