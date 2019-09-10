import React, {Component} from 'react';

class Result extends Component {
	constructor(props) {
		super(props);
		this.state = {
			language: ''
		}
	}

	render() {
		return (
			<h2>test</h2>

			// This will handle what result message will come up to the user based on the headline validator's results
			// So if this is branded, it will let the user know that there's branded language in their input
			// If it's long, it will let the user know that they need to shorten the character count in their input
		)
	}
}

export default Result;