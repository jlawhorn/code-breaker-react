import React from 'react';
import TeamList from './teamlist.js';
import {getActiveTeamColorCSS} from '../helpers/classNames.js';
import capitalizeFirstLetter from '../helpers/stringFunctions.js';

function Stats(props) {

    function getStatus(winner, isBlueTurn) {
		if (winner === null) {
			return `${(isBlueTurn ? 'Blue' : 'Red')} Turn`;
		}
		winner = capitalizeFirstLetter(winner);
		return `${winner} Wins`;
    }

    return (
        <aside className="sidebar sidebar--left">
            <ul className="status-list">
                <li className="status-list__item display-score text-center">
                    <span className="team--blue text-outline">{props.score.blue}</span>
                    <span className="seperator"> - </span>
                    <span className="team--red text-outline">{props.score.red}</span>
                </li>
                <li className={"status-list__item text-center status-list__item--" + getActiveTeamColorCSS(props.isBlueTurn, props.winner)}>
                    {getStatus(props.winner, props.isBlueTurn)}
                </li>
            </ul>
            <TeamList teams={props.teams} />
        </aside>
    );
}

export default Stats;