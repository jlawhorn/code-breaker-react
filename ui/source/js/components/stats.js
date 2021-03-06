import React from 'react';
import TeamList from './teamlist.js';
import {getActiveTeamColorCSS, getViewerColorCSS, getViewerName} from '../helpers/decodeViewersAndWinners.js';
import capitalizeFirstLetter from '../helpers/stringFunctions.js';

function Stats(props) {

    function getStatus(winner, isBlueTurn) {
		if (winner === null) {
			return `Current Turn: ${(isBlueTurn ? 'Blue' : 'Red')}`;
		}
		winner = capitalizeFirstLetter(winner);
		return `${winner} team wins.`;
    }

    return (
        <aside className="sidebar sidebar--left">
            <ul className="status-list">
                <li className="status-list__item">
                    <span className="team--blue text-outline">{props.score.blue}</span>
                    <span className="seperator"> - </span>
                    <span className="team--red text-outline">{props.score.red}</span>
                </li>
                <li className={"status-list__item status-list__item--" + getActiveTeamColorCSS(props.isBlueTurn, props.winner)}>
                    {getStatus(props.winner, props.isBlueTurn)}
                </li>
                <li className={"status-list__item status-list__item--" + getViewerColorCSS(props.viewer)}>
                    Viewing as: {getViewerName(props.viewer)}
                </li>
            </ul>
            <TeamList teams={props.teams} />
        </aside>
    );
}

export default Stats;