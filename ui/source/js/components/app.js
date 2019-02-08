import React, {Component} from 'react';
import Start from './start.js';
import Lobby from './lobby.js';
import Game from './game.js';

import {setSeed} from '../helpers/seedUtilities.js';
import {setPlayerIsMaster} from '../helpers/teamUtilities.js';
import router from '../helpers/router.js';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            page: 'start',
            seed: null,
            teams: null,
            currentPlayerId: null,
            currentPlayerName: null,
            currentLobbyName: null
        };
        this.handleEntrySubmit = this.handleEntrySubmit.bind(this);
        this.handleLobbySubmit = this.handleLobbySubmit.bind(this);
        this.updateTeams = this.updateTeams.bind(this);
    }

    updateTeams(newTeams) {
        this.setState({ teams: newTeams });
    }

    getPage(pageId) {
        let pageRoute;
        switch(pageId) {
            case 'start':
                pageRoute = <Start handleEntrySubmit={this.handleEntrySubmit} />;
                break;
            case 'lobby':
                pageRoute = <Lobby
                    handleLobbySubmit={this.handleLobbySubmit}
                    currentPlayerName={this.state.currentPlayerName}
                    currentLobbyName={this.state.currentLobbyName}
                    updateTeams={this.updateTeams}
                />;
                break;
            case 'game':
                pageRoute = <Game
                    updateTeams={this.updateTeams}
                    currentPlayerId={this.state.currentPlayerId}
                    currentPlayerName={this.state.currentPlayerName}
                    seed={this.state.seed}
                    teams={this.state.teams}

                />;
                break;
            default:
                console.error('Invalid Page Id');
        }
        return pageRoute;
    }

    handleEntrySubmit(currentPlayerName, currentLobbyName) {
        setSeed(currentLobbyName);
        this.setState({
            page: 'lobby',
            currentPlayerName: currentPlayerName,
            currentLobbyName: currentLobbyName,
            seed: currentLobbyName
        });
    }

    handleLobbySubmit(lobbyTeams, currentPlayerId) {
        this.setState({
            page: 'game',
            teams: lobbyTeams,
            currentPlayerId: currentPlayerId
        });
    }

	render() {
		return (
			<div className="controller">
                { this.getPage(this.state.page) }
			</div>
		);
	}
}

export default App;