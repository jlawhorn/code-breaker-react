import React from 'react';
import ChangePlayer from './changePlayer.js';

import {getPlayerTeam, getPlayerIsMaster} from '../helpers/teamUtilities.js';

function Controls(props) {

    let playerIsMaster = getPlayerIsMaster(props.teams, props.playerId);
    let masterIcon = generateMasterIcon();

    function isOtherTeamsTurn(teamArray, playerId, isBlueTurn) {
        return getPlayerTeam(teamArray, playerId) === 1 ? !isBlueTurn : true;
    }

    function isGameOver(winnerName) {
        return winnerName !== null ? true : false;
    }

    function generateMasterIcon() {
        return playerIsMaster ? <span>Master <i className="icon icon--master"></i></span> : <span>Player</span>;
    }

    return (
        <aside className="sidebar sidebar--right">
            <div className="button-set">
                <button type="button" className="button"
                    disabled={(isGameOver(props.winner) || isOtherTeamsTurn(props.teams, props.playerId, props.isBlueTurn))}
                    onClick={props.onClickSwitchTeams}
                >
                    End Turn
                </button>
                <button type="button" className="button button--alt" onClick={props.onClickPromptNewGame}>New Game</button>
                <ChangePlayer
                    teams={props.teams}
                    currentPlayerId={props.playerId}
                    updateTeams={props.updateTeams}
                />
            </div>
        </aside>
    );
}

export default Controls;