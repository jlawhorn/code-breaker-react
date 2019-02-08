import React from 'react';
import {getPlayerTeam, setPlayerTeam, getPlayerIsMaster, setPlayerIsMaster} from '../helpers/teamUtilities.js';

function ChangePlayer(props) {

    let playerIsMaster = getPlayerIsMaster(props.teams, props.currentPlayerId);
    let masterIcon = generateMasterIcon();

    function generateMasterIcon() {
        return playerIsMaster ? <span>Master <i className="icon icon--master"></i></span> : <span>Player</span>;
    }

    function updatePlayerTeam(players, currentPlayerId, teamId) {
        const updatedTeams = setPlayerTeam(players, currentPlayerId, teamId);
        props.updateTeams(updatedTeams);
    }

    function togglePlayerIsMaster(players, currentPlayerId, toggleStatus) {
        const updatedTeams = setPlayerIsMaster(players, currentPlayerId, toggleStatus);
        props.updateTeams(updatedTeams);
    }

    return (
        <fieldset className="control-set">
            <legend>I'm a...</legend>
            <div className="switch-toggle">
                <div className="switch-toggle__item">
                    <input
                        type="radio"
                        name="playerTeam"
                        id="viewAsBlue"
                        defaultChecked={getPlayerTeam(props.teams, props.currentPlayerId) === 1}
                        onClick={() => updatePlayerTeam(props.teams, props.currentPlayerId, 1)}
                        className="switch-toggle__control"
                    />
                    <label htmlFor="viewAsBlue" className="switch--blue switch-toggle__label">Blue</label>
                </div>
                <div className="switch-toggle__item">
                    <input
                        type="radio"
                        name="playerTeam"
                        id="viewAsRed"
                        defaultChecked={getPlayerTeam(props.teams, props.currentPlayerId) === 2}
                        onClick={() => updatePlayerTeam(props.teams, props.currentPlayerId, 2)}
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
                    onClick={e => togglePlayerIsMaster(props.teams, props.currentPlayerId, e.target.checked)}
                    className="switch__control"
                />
                <label htmlFor="setAsMaster" className="switch__label">
                    { masterIcon }
                </label>
            </div>
        </fieldset>
    );
}

export default ChangePlayer;