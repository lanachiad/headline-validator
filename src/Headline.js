import React, {Component} from 'react';

class Headline extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		}
	}

	render() {
		return (
			<p>{this.state.text}</p>
		)
	}
}

export default Headline;