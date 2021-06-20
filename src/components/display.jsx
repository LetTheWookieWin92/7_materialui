import React, { Component } from "react";

// Components
import Home from "./home";
import NavigationBar from "./navigationBar";
import ButtonExample from "./examples/buttonExample";

class Display extends Component {
	state = {
		displayMode: "Home",
	};

	changeDisplayMode(mode) {
		this.setState({ displayMode: mode });
	}

	render() {
		return (
			<React.Fragment>
				<NavigationBar title={this.state.displayMode} />
				{this.state.displayMode == "Home" && (
					<div>
						<Home onSelection={this.changeDisplayMode} />
					</div>
				)}
				{this.state.displayMode == "Button" && (
					<div>
						<ButtonExample onBackPress={this.changeDisplayMode} />
					</div>
				)}
			</React.Fragment>
		);
	}
}

export default Display;
