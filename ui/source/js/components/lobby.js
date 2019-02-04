import React, {Component} from 'react';
import {generateTeams} from '../helpers/teamUtilities.js';
import Player from './player.js';

const maxPlayers = 16;

class Lobby extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            teams: generateTeams()
		};
	}

    render() {
        return (
            <div className="lobby">
                Such a lobby!
            </div>
        );
	}
}

export default Lobby;