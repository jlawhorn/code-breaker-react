import React from 'react';
import {getPlayerTeam, getPlayerIsMaster} from '../helpers/teams.js';

function Controls(props) {

    function isMaster(viewerId, controlId) {
        return getPlayerIsMaster(props.teams, props.playerId);
    }

    function isOtherTeamsTurn(teamArray, playerId, isBlueTurn) {
        return getPlayerTeam(teamArray, playerId) === 1 ? !isBlueTurn : true;
    }

    function isGameOver(winnerName) {
        return winnerName !== null ? true : false;
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
                <fieldset className="control-set">
                    <legend>I'm ...</legend>
                    <div className="toggleSwitches">
                        <div className="switchItem">
                            <input
                                type="radio"
                                name="viewer"
                                id="viewAsBlue"
                                defaultChecked={getPlayerTeam(props.teams, props.playerId) === 1}
                                onClick={props.onClickViewBlue}
                            />
                            <label htmlFor="viewAsBlue">on Blue Team</label>
                        </div>
                        <div className="switchItem">
                            <input
                                type="radio"
                                name="viewer"
                                id="viewAsRed"
                                defaultChecked={getPlayerTeam(props.teams, props.playerId) === 2}
                                onClick={props.onClickViewRed}
                            />
                            <label htmlFor="viewAsRed">on Red Team</label>
                        </div>
                    </div>
                    <div className="">
                        <div className="switchItem">
                            <input
                                type="checkbox"
                                name="master"
                                id="setAsMaster"
                                defaultChecked={isMaster(props.teams, props.playerId)}
                                onClick={e => props.onClickViewMaster(e)}
                            />
                            <label htmlFor="setAsMaster">a Master</label>
                        </div>
                    </div>
                </fieldset>
            </div>
        </aside>
    );
}

export default Controls;