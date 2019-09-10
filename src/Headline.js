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

			// This will eventually store each headline copy passed through
			// I'll create a short-term list of all headline copy inputs so that the user knows what attempts they've done
			// There will also be a check or X next to this input copy to remind the user whether the headline was good to use or not
			// We can also put the reasoning for why there's an X (this copy was branded/too long)

			
		)
	}
}

export default Headline;