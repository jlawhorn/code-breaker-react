import React, {Component} from 'react';

class Piece extends React.Component {
	render() {
		return (
			<button type="button" className="piece" onClick={() => alert('click')}>
				{this.props.value}
			</button>
		);
	}
}

export default Piece;