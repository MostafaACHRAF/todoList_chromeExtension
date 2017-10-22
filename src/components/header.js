import React, { Component } from 'react';

/*const Header = () => {
	return <div>Header</div>
}
*/

class Header extends Component {

	constructor(props) {
		super(props);
		this.state = {
			title:'The key words are...',
			keywords:''
		}
	}

	inputChange(event) {
		// console.log(event.target.value);
		this.setState({keywords:event.target.value})
	}


	render() {

		return(
			<header>
				<div className="logo" onClick={() => {console.log('clicked !')}}>Logo</div>
				<input onChange={this.inputChange.bind(this)} />
				<div>{this.state.title}</div>
				<div>{this.state.keywords}</div>
			</header>
		)
	}

}

export default Header;