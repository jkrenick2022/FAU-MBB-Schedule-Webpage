import React from 'react';
import '../EventCard.css';

const EventCard = (props) => {
    const openInNewTab = (link) => {
        const newWindow = window.open(link, '_blank', 'noopener,noreferrer')
    }
    return (
        <div className="event-card">
            <div className="cover-image">
                <img src={props.gameImage} alt="Game image for {props.gameTitle}" className="game-image" />
            </div>
            <div className="game-information">
                <h3 className="game-title">{props.gameTitle}</h3>
                <ul>
                    <li>{props.gameLocation}</li>
                    <li>{props.gameDate}</li>
                    <li>{props.gameTime}</li>
                </ul>
                <button onClick={() => openInNewTab(props.gameLink)}>{!props.buttonText ? "More Info" : props.buttonText}</button>
            </div>
        </div>
    );
}

export default EventCard;