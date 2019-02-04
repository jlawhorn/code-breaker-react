import React from 'react';
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
                <fieldset className="control-set">
                    <legend>I'm a...</legend>
                    <div className="switch-toggle">
                        <div className="switch-toggle__item">
                            <input
                                type="radio"
                                name="playerTeam"
                                id="viewAsBlue"
                                defaultChecked={getPlayerTeam(props.teams, props.playerId) === 1}
                                onClick={props.onClickViewBlue}
                                className="switch-toggle__control"
                            />
                            <label htmlFor="viewAsBlue" className="switch--blue switch-toggle__label">Blue</label>
                        </div>
                        <div className="switch-toggle__item">
                            <input
                                type="radio"
                                name="playerTeam"
                                id="viewAsRed"
                                defaultChecked={getPlayerTeam(props.teams, props.playerId) === 2}
                                onClick={props.onClickViewRed}
                                className="switch-toggle__control"
                            />
                            <label htmlFor="viewAsRed" className="switch--red switch-toggle__label">Red</label>
                        </div>
                    </div>
                    <div className="switch">
                        <input
                            type="checkbox"
                            name="master"
                            id="setAsMaster"
                            defaultChecked={playerIsMaster}
                            onClick={e => props.onClickViewMaster(e)}
                            className="switch__control"
                        />
                        <label htmlFor="setAsMaster" className="switch__label">
                            { masterIcon }
                        </label>
                    </div>
                </fieldset>
            </div>
        </aside>
    );
}

export default Controls;