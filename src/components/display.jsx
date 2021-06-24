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
					<React.Fragment>
						<NavigationBar textLabel="MaterialUI Elements" showBack="No"/>
						<Home onSelection={this.changeDisplayMode} />
					</React.Fragment>
				)}
				{this.state.displayMode === "Button" && (
					<React.Fragment>
						<NavigationBar textLabel="Button" showBack="Yes" backPressed={this.changeDisplayMode}/>
						<ButtonExample onBackPress={this.changeDisplayMode}/>
					</React.Fragment>
				)}
			</React.Fragment>
		);
	}
}

export default Display;
