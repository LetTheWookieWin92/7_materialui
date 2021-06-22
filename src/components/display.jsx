import React, { Component } from "react";

// Components
import Home from "./home";
import NavigationBar from "./navigationBar";
import ButtonExample from "./examples/buttonExample";

class Display extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayMode: "Home",
		};

		this.changeDisplayMode = this.changeDisplayMode.bind(this);
	}
	
	changeDisplayMode(mode) {
		this.setState({ displayMode: mode });
	}

	render() {
		return (
			<React.Fragment>
				{this.state.displayMode === "Home" && (
					<div>
						<NavigationBar textLabel="MaterialUI Elements" showBack="No"/>
						<Home onSelection={this.changeDisplayMode} />
					</div>
				)}
				{this.state.displayMode === "Button" && (
					<div>
						<NavigationBar textLabel="Button" showBack="Yes" backPressed={this.changeDisplayMode}/>
						<ButtonExample onBackPress={this.changeDisplayMode} />
					</div>
				)}
			</React.Fragment>
		);
	}
}

export default Display;
