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
            page: 1,
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
            case 1:
                pageRoute = <Start handleEntrySubmit={this.handleEntrySubmit} />;
                break;
            case 2:
                pageRoute = <Lobby
                    handleLobbySubmit={this.handleLobbySubmit}
                    currentPlayerName={this.state.currentPlayerName}
                    currentLobbyName={this.state.currentLobbyName}
                    updateTeams={this.updateTeams}
                />;
                break;
            case 3:
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
            page: 2,
            currentPlayerName: currentPlayerName,
            currentLobbyName: currentLobbyName,
            seed: currentLobbyName
        });
    }

    handleLobbySubmit(lobbyTeams, currentPlayerId) {
        this.setState({
            page: 3,
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