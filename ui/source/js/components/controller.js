import React, {Component} from 'react';

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 1
		};
	}

	render() {
		return (
			<div className="controller">
				<h1>Controller!</h1>
			</div>
		);
	}
}

export default Game;