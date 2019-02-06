import React, {Component} from 'react';
import {getSeed, createSeed, setSeed} from '../helpers/seedUtilities.js';
import {getPlayerName, setPlayerName} from '../helpers/playerUtilities.js';
import {stripSpecialCharacters} from '../helpers/stringUtilities.js';

class Entry extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            currentPlayerName: getPlayerName(),
            currentLobbyName: getSeed()
        };
        this.handleLobbyChange = this.handleLobbyChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleRandomClick = this.handleRandomClick.bind(this);
    }

    handleLobbyChange(event) {
        this.setState({ currentLobbyName: event.target.value.toLowerCase().substr(0,20) });
    }

    handleNameChange(event) {
        this.setState({ currentPlayerName: stripSpecialCharacters(event.target.value).substr(0,20) });
    }

    handleRandomClick(event) {
        this.setState({ currentLobbyName: createSeed() });
    }

    render() {
        return (
            <div className="entry-prompt">
                <form onSubmit={() => this.props.handleEntrySubmit(this.state)} className="entry-prompt__form">
                    <label htmlFor="currentPlayerName" className="currentPlayerName">Player Name:</label>
                    <input
                        type="text"
                        id="nameInput"
                        name="nameInput"
                        className="input"
                        placeholder="Enter Player Name"
                        required="required"
                        value={this.state.currentPlayerName}
                        maxLength="20"
                        onChange={this.handleNameChange}
                    />
                    <label htmlFor="lobbyInput" className="label">Lobby Name:</label>
                    <input
                        type="text"
                        id="lobbyInput"
                        name="lobbySeed"
                        className="input"
                        placeholder="Enter a Lobby"
                        required="required"
                        value={this.state.currentLobbyName}
                        maxLength="20"
                        onChange={this.handleLobbyChange}
                    />
                    <input
                        type="button"
                        className="button"
                        value="Random Lobby"
                        onClick={this.handleRandomClick}
                    />
                    <input
                        type="submit"
                        className="button button--alt"
                        value="Enter Lobby"
                    />
                </form>
            </div>
        );
	}
}

export default Entry;