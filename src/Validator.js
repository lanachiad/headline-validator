import React, {Component} from 'react';
import Result from './Result';

class Validator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			headlineInput: '',
			headlineBranded: null,
			headlineLength: null
		}
	}

	createHeadline = e => {
		e.preventDefault();
		const headlineCopy = e.target.headlineInput.value;
		this.checkHeadline(headlineCopy);
	}

	checkHeadline = text => {
		const branded = this.testBranded(text);
		const tooLong = this.testLength(text);
		this.isItAcceptable(branded, tooLong);
		this.updateState(text, tooLong, branded);
	}

	testBranded = text => {
		const splitString = text.split('');

      let isItBranded = false;

      for (let i = 0; i < splitString.length; i++) {
         if ((splitString[i] === "®") ||
            (splitString[i] === "(" && splitString[i + 1] === "R" && splitString[i + 2] === ")") ||
            (splitString[i] === "(" && splitString[i + 1] === "r" && splitString[i + 2] === ")") ||
            (splitString[i] === "™") ||
            (splitString[i] === "T" && splitString[i + 1] === "M") ||
            (splitString[i] === "t" && splitString[i + 1] === "m")) {
               isItBranded = true;
         }
      }
      return isItBranded;
	}

	testLength = text => {
		const textLength = text.split('').length;

      if (textLength > 65) {
         return true;
         // True = too long
      } else {
         return false;
         // False = Equal to or less
      }
	}

	isItAcceptable = (brandedBoolean, lengthBoolean) => {
		if (brandedBoolean === true) {
			console.log('this bitch is branded');
		}

		if (lengthBoolean === true) {
			console.log('this bitch is too long');
		}
	}

	updateState = (headline, brandedBoolean, lengthBoolean) => {
		this.setState({
			headlineInput: headline,
			headlineBranded: brandedBoolean,
			headlineLength: lengthBoolean
		});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.createHeadline}>
					<input id="headlineInput" type="text" placeholder="Insert Headline Copy Here" />
					<button value="Check">
						Check
					</button>
				</form>

				<Result text={this.state.headlineInput} branded={this.state.headlineBranded} length={this.state.headlineLength} />
			</div>
		)
	}

}

export default Validator;