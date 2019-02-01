import React from 'react';
import Player from './player.js';

function TeamList(props) {

    function renderPlayer(player, i) {
        return <Player
            player={player}
            key={i}
		/>;
    }

    function generateList(teamArray, teamId) {
        let listItemsArray = [];
        teamArray.filter(player => player.team === teamId)
            .forEach((player,i) => listItemsArray.push(renderPlayer(player, i)));
        return listItemsArray;
    }

    return (
        <div className="teams-list">
            <ul className="team-list">
                <li className="team-list__item team-list__item--title team--blue text-outline">Blue</li>
                {generateList(props.teams, 1)}
            </ul>
            <ul className="team-list">
                <li className="team-list__item team-list__item--title team--red text-outline">Red</li>
                {generateList(props.teams, 2)}
            </ul>
        </div>
    );
}

export default TeamList;