import React, {Component} from 'react';

class Validator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentHeadline: ''
		}
	}
	
	createHeadline = e => {
		e.preventDefault();
		const headlineCopy = e.target.headlineInput.value;
		this.setState({ currentHeadline: headlineCopy });
		this.checkHeadline(this.state.currentHeadline);
	};

	checkHeadline = (text) => {
		const branded = this.testBranded(text);
		console.log(branded);
	}

	testBranded = (text) => {
		const splitString = text.split('');

      let isItBranded = false;

      for (let i = 0; i < splitString.length; i++) {
         if (splitString[i] === "®" ||
            (splitString[i] === "(" && splitString[i + 1] === "R" && splitString[i + 2] === ")") ||
            (splitString[i] === "(" && splitString[i + 1] === "r" && splitString[i + 2] === ")") ||
            (splitString[i] === "™") ||
            (splitString[i] === "T" && splitString[i + 1] === "M") ||
            (splitString[i] === "t" && splitString[i + 1] === "m")) {
               isItBranded = true;
               // True = branded
         }
      }
      console.log(text);

      return isItBranded;

	}

	render() {
		return (
			<form onSubmit={this.createHeadline}>
				<input id="headlineInput" type="text" placeholder="Insert Headline Copy Here" />
				<button value="Check">
					Check
				</button>
			</form>
		)
	}

}

export default Validator;