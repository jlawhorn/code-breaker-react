import React from 'react';
import Player from './player.js';

function TeamList(props) {

    function renderPlayer(player, i) {
        return <Player
            player={player}
            key={i}
		/>;
    }

    function generateList(teamArray) {
        let listItemsArray = [];
        teamArray.forEach((player,i) => listItemsArray.push(renderPlayer(player, i)));
        return listItemsArray;
    }

    return (
        <div className="teams-list">
            <ul className="team-list">
                <li className="team-list__item team-list__item--title team--blue">Blue</li>
                {generateList(props.teams.blue)}
            </ul>
            <ul className="team-list">
                <li className="team-list__item team-list__item--title team--red">Red</li>
                {generateList(props.teams.red)}
            </ul>
        </div>
    );
}

export default TeamList;