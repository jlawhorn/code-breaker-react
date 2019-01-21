import React, {Component} from 'react';

class Piece extends React.Component {
	render() {
		return (
			<button className="piece">
				{this.props.value}
			</button>
		);
	}
}

export default Piece;